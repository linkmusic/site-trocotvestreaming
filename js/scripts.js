// js/scripts.js

let cart = [];
let allProducts = []; // <-- Armazenará os produtos carregados do JSON
let discountApplied = false;
const DISCOUNT_CODE = "DESC10";
const DISCOUNT_PERCENTAGE = 0.1;
let currentCategory = 'todos';

const categories = [
  { id: 'todos', name: 'Todos os Produtos' },
  { id: 'streaming', name: 'Streaming' },
  { id: 'musica', name: 'Música' },
  { id: 'vitalicios', name: 'Métodos Vitalícios' },
  { id: 'edicao', name: 'Edição' },
  { id: 'ia', name: 'Inteligência Artificial' }
];

async function fetchProducts() {
    try {
        // Busca o arquivo JSON
        const response = await fetch('/_data/products.json');
        if (!response.ok) throw new Error('Erro ao carregar produtos.');
        allProducts = await response.json();
    } catch (error) {
        console.error(error);
        document.getElementById('productsByCategory').innerHTML = '<p class="empty-cart">Não foi possível carregar os produtos. Tente recarregar a página.</p>';
    }
}

function renderProducts(categoryId) {
  const container = document.getElementById('productsByCategory');
  container.innerHTML = '';
  
  const filteredProducts = categoryId === 'todos' 
    ? allProducts // <-- Usa a variável com dados do JSON
    : allProducts.filter(p => p.category === categoryId);
  
  if (filteredProducts.length === 0) {
    container.innerHTML = '<p class="empty-cart">Nenhum produto encontrado nesta categoria.</p>';
    return;
  }
  
  const grid = document.createElement('div');
  grid.className = 'product-grid';
  
  filteredProducts.forEach((product, index) => {
    const cardLink = document.createElement('a');
    cardLink.className = 'product-card fade-in';
    cardLink.href = `produto.html?id=${product.id}`;
    cardLink.target = '_blank';
    cardLink.style.animationDelay = `${index * 0.05}s`;
    
    const minPrice = Math.min(...product.variations.map(v => v.price));
    
    cardLink.innerHTML = `
      <i class="${product.icon}"></i>
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <div style="margin-top: 0.5rem;">
        <span style="font-weight: bold;">A partir de ${formatPrice(minPrice)}</span>
      </div>
      <small>${product.variations.length} opção${product.variations.length !== 1 ? 'es' : ''} disponível${product.variations.length !== 1 ? 's' : ''}</small>
    `;
    grid.appendChild(cardLink);
  });
  
  container.appendChild(grid);
}

// --- Funções do Carrinho e Outras (permanecem as mesmas) ---
function loadCart() { const savedCart = localStorage.getItem('trocoTVCart'); if (savedCart) { cart = JSON.parse(savedCart); updateCart(); } }
function saveCart() { localStorage.setItem('trocoTVCart', JSON.stringify(cart)); }
function initPage() { loadCart(); renderCategories(); renderProducts('todos'); }
function renderCategories() { const container = document.getElementById('categoryTabs'); container.innerHTML = ''; categories.forEach(category => { const tab = document.createElement('div'); tab.className = `category-tab ${category.id === currentCategory ? 'active' : ''}`; tab.textContent = category.name; tab.onclick = () => { document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active')); tab.classList.add('active'); currentCategory = category.id; renderProducts(category.id); }; container.appendChild(tab); }); }
function removeFromCart(itemId) { const index = cart.findIndex(item => item.id === itemId); if (index !== -1) { cart.splice(index, 1); saveCart(); updateCart(); showAlert("Item removido do carrinho", "danger"); } }
function updateItemQuantity(itemId, change) { const index = cart.findIndex(item => item.id === itemId); if (index !== -1) { cart[index].quantity += change; if (cart[index].quantity < 1) { cart.splice(index, 1); showAlert("Item removido do carrinho", "danger"); } saveCart(); updateCart(); } }
function toggleCart() { document.getElementById("cartDropdown").classList.toggle("show"); }
function closeCart() { document.getElementById("cartDropdown").classList.remove("show"); }
function applyCoupon() { const couponCode = document.getElementById("couponInput").value.trim(); const discountAppliedElement = document.getElementById("discountApplied"); if (couponCode.toUpperCase() === DISCOUNT_CODE) { discountApplied = true; discountAppliedElement.style.display = "block"; showAlert("Cupom aplicado com sucesso! 10% de desconto.", "success"); } else { discountApplied = false; discountAppliedElement.style.display = "none"; showAlert("Código de cupom inválido", "danger"); } updateCart(); }
function formatPrice(price) { return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price); }
function calculateCartTotal() { let subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0); let discount = 0; if (discountApplied) { discount = subtotal * DISCOUNT_PERCENTAGE; } return { subtotal: subtotal, discount: discount, total: subtotal - discount }; }
function updateCart() { const cartItems = document.getElementById("cart-items"); const cartCount = document.getElementById("cart-count"); const cartBadge = document.getElementById("cart-badge"); const cartTotalElement = document.getElementById("cart-total"); const discountAmountElement = document.getElementById("discount-amount"); const finalTotalElement = document.getElementById("final-total"); const cartDiscountElement = document.getElementById("cart-discount"); const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0); cartCount.textContent = totalItems; cartBadge.textContent = totalItems; if (cart.length === 0) { cartItems.innerHTML = '<div class="empty-cart">Seu carrinho está vazio</div>'; cartTotalElement.textContent = formatPrice(0); finalTotalElement.textContent = formatPrice(0); cartDiscountElement.style.display = "none"; document.getElementById("cart-final-total").style.display = 'none'; return; } cartItems.innerHTML = ""; cart.forEach(item => { const div = document.createElement("div"); div.className = "cart-item fade-in"; div.innerHTML = `<div style="flex: 1;"><i class="${item.icon}"></i> <strong>${item.name}</strong> - ${item.variation}<div style="margin-top: 0.5rem;"><strong>${formatPrice(item.price)} × ${item.quantity} = ${formatPrice(item.price * item.quantity)}</strong></div><div class="quantity-control" style="margin-top: 0.5rem; justify-content: flex-start;"><button class="quantity-btn" onclick="event.stopPropagation(); updateItemQuantity(${item.id}, -1)">-</button><span class="quantity-input" style="width: 40px; pointer-events: none;">${item.quantity}</span><button class="quantity-btn" onclick="event.stopPropagation(); updateItemQuantity(${item.id}, 1)">+</button><button class="btn btn-danger" style="margin-left: auto; padding: 0.3rem 0.6rem; font-size: 0.8rem;" onclick="event.stopPropagation(); removeFromCart(${item.id})"><i class="fas fa-trash" style="color: white;"></i></button></div></div>`; cartItems.appendChild(div); }); const totals = calculateCartTotal(); cartTotalElement.textContent = formatPrice(totals.subtotal); if (discountApplied) { discountAmountElement.textContent = formatPrice(totals.discount); cartDiscountElement.style.display = "block"; document.getElementById("cart-final-total").style.display = 'block'; finalTotalElement.textContent = formatPrice(totals.total); } else { cartDiscountElement.style.display = "none"; document.getElementById("cart-final-total").style.display = 'none'; cartTotalElement.textContent = `Total: ${formatPrice(totals.total)}`; } }
function checkout() { if (cart.length === 0) { showAlert("Seu carrinho está vazio. Adicione itens antes de finalizar.", "danger"); return; } const totals = calculateCartTotal(); let itemsText = cart.map(item => `*${item.name} - ${item.variation}*\n` + `Quantidade: ${item.quantity}\n` + `Preço unitário: ${formatPrice(item.price)}\n` + `Subtotal: ${formatPrice(item.price * item.quantity)}\n`).join("\n"); let message = `Olá, gostaria de adquirir os seguintes planos:\n\n${itemsText}\n`; message += `\n*Total a pagar: ${formatPrice(totals.total)}*\n\n`; message += `Por favor, informe os próximos passos para finalizar a compra. Obrigado!`; const encodedMessage = encodeURIComponent(message); window.open(`https://wa.me/+5584981518164?text=${encodedMessage}`, "_blank"); }
function openSupportWhatsApp() { const supportMessage = encodeURIComponent("Olá, equipe Troço TV e Streaming! Preciso de ajuda com..."); window.open(`https://wa.me/+5584981518164?text=${supportMessage}`, "_blank"); }
function openTelegram() { window.open(`https://t.me/suporte_trocodigital`, "_blank"); }
function openGroupWhatsApp() { window.open(`https://chat.whatsapp.com/Gh9TBmVNHx2GI83kxRc2yz`, "_blank"); }
function showAlert(message, type) { const alert = document.createElement("div"); alert.className = `alert alert-${type}`; alert.textContent = message; document.body.appendChild(alert); setTimeout(() => { alert.style.animation = "fadeOut 0.5s ease"; setTimeout(() => alert.remove(), 500); }, 3000); }
document.addEventListener('click', function(event) { const cartDropdown = document.getElementById('cartDropdown'); const cartToggle = document.querySelector('.cart-toggle'); if (!cartDropdown.contains(event.target) && !cartToggle.contains(event.target)) { closeCart(); } });

// --- Inicialização da Página (AGORA É ASSÍNCRONA) ---
document.addEventListener("DOMContentLoaded", async () => {
    await fetchProducts(); // Espera os produtos serem carregados
    initPage(); // Inicia o resto da página
});