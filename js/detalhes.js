// js/detalhes.js

let cart = [];
let allProducts = []; // <-- Armazenará os produtos carregados do JSON
let selectedProductId = null;
let selectedVariationText = "";
let discountApplied = false;
const DISCOUNT_CODE = "DESC10";
const DISCOUNT_PERCENTAGE = 0.1;

async function fetchProducts() {
    try {
        const response = await fetch('/_data/products.json');
        if (!response.ok) throw new Error('Erro ao carregar produtos.');
        allProducts = await response.json();
    } catch (error) {
        console.error(error);
        document.getElementById("productName").innerHTML = `<i class="fas fa-exclamation-circle"></i> Erro ao carregar`;
    }
}

function showProductDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get('id'));

  if (!productId) {
    document.getElementById("productName").textContent = "Produto não encontrado!";
    return;
  }
  
  const product = allProducts.find(p => p.id === productId); // <-- Usa a variável com dados do JSON
  if (!product) {
    document.getElementById("productName").textContent = "Produto não encontrado!";
    return;
  }
  
  selectedProductId = productId;

  document.title = `${product.name} - Troço TV e Streaming`;
  document.getElementById("productName").innerHTML = `<i class="${product.icon}"></i> ${product.name}`;
  document.getElementById("productDescription").textContent = product.description;
  document.getElementById("productQuantity").value = 1;

  const container = document.getElementById("variationsContainer");
  container.innerHTML = "";
  
  product.variations.forEach((variation, index) => {
    const btn = document.createElement("div");
    btn.className = "variation-btn";
    btn.innerHTML = `<strong>${variation.name}</strong><br><small>${formatPrice(variation.price)}</small><div style="margin-top: 0.5rem; font-size: 0.8rem; color: var(--light-gray);">${variation.details}</div>`;
    
    if (index === 0) {
      btn.classList.add("active");
      selectVariation(variation);
    }
    
    btn.onclick = () => {
      document.querySelectorAll(".variation-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      selectVariation(variation);
    };
    
    container.appendChild(btn);
  });
}

function addToCart() {
  if (!selectedProductId || !selectedVariationText) {
    showAlert("Por favor, selecione uma opção.", "danger");
    return;
  }

  const quantity = parseInt(document.getElementById('productQuantity').value) || 1;
  const product = allProducts.find(p => p.id === selectedProductId); // <-- Usa a variável com dados do JSON
  const variation = product.variations.find(v => v.name === selectedVariationText);
  
  const existingItemIndex = cart.findIndex(item => item.productId === product.id && item.variation === selectedVariationText);
  
  if (existingItemIndex !== -1) {
    cart[existingItemIndex].quantity += quantity;
  } else {
    cart.push({ id: Date.now(), productId: product.id, name: product.name, variation: selectedVariationText, price: variation.price, quantity: quantity, icon: product.icon });
  }
  
  saveCart();
  updateCart();
  showAlert("Item adicionado ao carrinho!", "success");
}

// --- Funções do Carrinho e Outras (permanecem as mesmas) ---
function selectVariation(variation) { selectedVariationText = variation.name; document.getElementById("selectedVariation").innerHTML = `<div><strong>${variation.name} - ${formatPrice(variation.price)}</strong></div><div style="margin-top: 0.5rem;">${variation.details}</div><div class="important-note"><strong>Importante:</strong> ${variation.important}</div>`; }
function changeQuantity(change) { const input = document.getElementById('productQuantity'); let newValue = parseInt(input.value) + change; if (newValue < 1) newValue = 1; input.value = newValue; }
function updateQuantityInput() { const input = document.getElementById('productQuantity'); if (parseInt(input.value) < 1 || isNaN(parseInt(input.value))) { input.value = 1; } }
function loadCart() { const savedCart = localStorage.getItem('trocoTVCart'); if (savedCart) { cart = JSON.parse(savedCart); updateCart(); } }
function saveCart() { localStorage.setItem('trocoTVCart', JSON.stringify(cart)); }
function formatPrice(price) { return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price); }
function showAlert(message, type) { const alert = document.createElement("div"); alert.className = `alert alert-${type}`; alert.textContent = message; document.body.appendChild(alert); setTimeout(() => { alert.style.animation = "fadeOut 0.5s ease"; setTimeout(() => alert.remove(), 500); }, 3000); }
function toggleCart() { document.getElementById("cartDropdown").classList.toggle("show"); }
function closeCart() { document.getElementById("cartDropdown").classList.remove("show"); }
function applyCoupon() { const couponCode = document.getElementById("couponInput").value.trim(); const discountAppliedElement = document.getElementById("discountApplied"); if (couponCode.toUpperCase() === DISCOUNT_CODE) { discountApplied = true; discountAppliedElement.style.display = "block"; showAlert("Cupom aplicado com sucesso!", "success"); } else { discountApplied = false; discountAppliedElement.style.display = "none"; showAlert("Código de cupom inválido", "danger"); } updateCart(); }
function calculateCartTotal() { let subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0); let discount = 0; if (discountApplied) { discount = subtotal * DISCOUNT_PERCENTAGE; } return { subtotal, discount, total: subtotal - discount }; }
function updateCart() { const cartItems = document.getElementById("cart-items"); const cartCount = document.getElementById("cart-count"); const cartBadge = document.getElementById("cart-badge"); const cartTotalElement = document.getElementById("cart-total"); const discountAmountElement = document.getElementById("discount-amount"); const finalTotalElement = document.getElementById("final-total"); const cartDiscountElement = document.getElementById("cart-discount"); const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0); cartCount.textContent = totalItems; cartBadge.textContent = totalItems; if (cart.length === 0) { cartItems.innerHTML = '<div class="empty-cart">Seu carrinho está vazio</div>'; cartTotalElement.textContent = formatPrice(0); finalTotalElement.textContent = formatPrice(0); cartDiscountElement.style.display = "none"; document.getElementById("cart-final-total").style.display = 'none'; return; } cartItems.innerHTML = ""; cart.forEach(item => { const div = document.createElement("div"); div.className = "cart-item fade-in"; div.innerHTML = `<div style="flex: 1;"><i class="${item.icon}"></i> <strong>${item.name}</strong> - ${item.variation}<div style="margin-top: 0.5rem;"><strong>${formatPrice(item.price)} × ${item.quantity} = ${formatPrice(item.price * item.quantity)}</strong></div></div>`; cartItems.appendChild(div); }); const totals = calculateCartTotal(); cartTotalElement.textContent = formatPrice(totals.subtotal); if (discountApplied) { discountAmountElement.textContent = formatPrice(totals.discount); cartDiscountElement.style.display = "block"; document.getElementById("cart-final-total").style.display = 'block'; finalTotalElement.textContent = formatPrice(totals.total); } else { cartDiscountElement.style.display = "none"; document.getElementById("cart-final-total").style.display = 'none'; cartTotalElement.textContent = `Total: ${formatPrice(totals.total)}`; } }
function checkout() { if (cart.length === 0) { showAlert("Seu carrinho está vazio.", "danger"); return; } const totals = calculateCartTotal(); let itemsText = cart.map(item => `*${item.name} - ${item.variation}*\n` + `Quantidade: ${item.quantity}\n` + `Subtotal: ${formatPrice(item.price * item.quantity)}\n`).join("\n"); let message = `Olá, gostaria de adquirir os seguintes planos:\n\n${itemsText}\n*Total a pagar: ${formatPrice(totals.total)}*\n\nObrigado!`; const encodedMessage = encodeURIComponent(message); window.open(`https://wa.me/+5584981518164?text=${encodedMessage}`, "_blank"); }
function openSupportWhatsApp() { window.open(`https://wa.me/+5584981518164?text=Olá, preciso de suporte.`, "_blank"); }
function openTelegram() { window.open(`https://t.me/suporte_trocodigital`, "_blank"); }
function openGroupWhatsApp() { window.open(`https://chat.whatsapp.com/Gh9TBmVNHx2GI83kxRc2yz`, "_blank"); }
document.addEventListener('click', function(event) { const cartDropdown = document.getElementById('cartDropdown'); const cartToggle = document.querySelector('.cart-toggle'); if (!cartDropdown.contains(event.target) && !cartToggle.contains(event.target)) { closeCart(); } });

// --- Inicialização da Página (AGORA É ASSÍNCRONA) ---
document.addEventListener("DOMContentLoaded", async () => {
    loadCart();
    await fetchProducts(); // Espera os produtos serem carregados
    showProductDetails(); // Mostra os detalhes do produto específico
});