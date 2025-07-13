// js/produtos.js
const products = [
      {
  id: 1,
  name: "Netflix",
  icon: "fas fa-film", // Ícone alternativo para Netflix
  category: "streaming",
  description: "Assinatura de Netflix com diferentes planos e durações.",
  variations: [
    { 
      name: "Tela Privada - 07 Dias", 
      price: 4.99,
      details: "Entrega imediata com PIN seguro | Pagamento único | Suporte completo durante 7 dias",
      important: "Uso permitido em apenas 1 aparelho por cliente | Validade e garantia de 7 dias"
    },
    { 
      name: "Tela Privada - 30 Dias", 
      price: 19.99,
      details: "Ativação imediata | Pagamento único | Suporte completo durante 30 dias",
      important: "Uso permitido em apenas 1 aparelho por cliente | Validade e garantia de 30 dias"
    },
    { 
      name: "4K Ultra HD (Somente TV) - 30 Dias", 
      price: 19.99,
      details: "Acesso disponível somente em TVs | Entrega manual | Suporte completo durante 30 dias",
      important: "Uso permitido em apenas 1 aparelho por cliente | Funciona exclusivamente em TVs"
    }
  ]
},
{
  id: 2,
  name: "Disney Plus",
  icon: "fas fa-magic", // Ícone alternativo para Disney Plus
  category: "streaming",
  description: "Assinatura de Disney+ com diferentes tipos de acesso.",
  variations: [
    { 
      name: "Compartilhado - Mensal", 
      price: 4.99,
      details: "Perfil compartilhado com outros usuários | Renovação mensal | Suporte completo",
      important: "Pode haver limitação de dispositivos simultâneos | Validade de 30 dias"
    },
    { 
      name: "Privado - Mensal", 
      price: 5.99,
      details: "Perfil exclusivo para você | Renovação mensal | Suporte completo",
      important: "Uso em até 4 dispositivos simultâneos | Validade de 30 dias"
    }
  ]
},
  {
    id: 3,
    name: "Prime Video",
    icon: "fab fa-amazon",
    category: "streaming",
    description: "Assinatura do serviço de streaming da Amazon.",
    variations: [
      { 
        name: "Compartilhada - Mensal", 
        price: 3.99,
        details: "Conta compartilhada com outros usuários | Renovação mensal",
        important: "Limitação de dispositivos simultâneos | Validade de 30 dias"
      },
      { 
        name: "Privada - Mensal", 
        price: 7.99,
        details: "Conta exclusiva para você | Renovação mensal",
        important: "Maior número de dispositivos simultâneos | Validade de 30 dias"
      }
    ]
  },
  {
    id: 4,
    name: "Paramount Plus",
    icon: "fas fa-film",
    category: "streaming",
    description: "Assinatura do serviço de streaming Paramount+.",
    variations: [
      { 
        name: "Compartilhada - Mensal", 
        price: 4.99,
        details: "Conta compartilhada | Renovação mensal | Suporte completo",
        important: "Pode haver limitação de dispositivos simultâneos"
      },
      { 
        name: "Privada - Mensal", 
        price: 6.99,
        details: "Conta exclusiva | Renovação mensal | Suporte completo",
        important: "Mais dispositivos simultâneos | Validade de 30 dias"
      }
    ]
  },
  {
    id: 5,
    name: "Crunchyroll Premium",
    icon: "fas fa-dragon",
    category: "streaming",
    description: "Assinatura premium do Crunchyroll para animes.",
    variations: [
      { 
        name: "Compartilhada - Mensal", 
        price: 4.99,
        details: "Conta compartilhada | Renovação mensal | Sem anúncios",
        important: "Acesso simultâneo limitado | Validade de 30 dias"
      },
      { 
        name: "Privada - Mensal", 
        price: 8.99,
        details: "Conta exclusiva | Renovação mensal | Sem anúncios",
        important: "Acesso em múltiplos dispositivos | Validade de 30 dias"
      }
    ]
  },
  {
    id: 6,
    name: "Apple TV",
    icon: "fab fa-apple",
    category: "streaming",
    description: "Assinatura do serviço de streaming da Apple.",
    variations: [
      { 
        name: "Compartilhada - Mensal", 
        price: 15.99,
        details: "Conta compartilhada | Renovação mensal | Catálogo completo",
        important: "Acesso simultâneo limitado | Validade de 30 dias"
      }
    ]
  },
  {
    id: 7,
    name: "Brasil Paralelo",
    icon: "fas fa-globe-americas",
    category: "streaming",
    description: "Plataforma de documentários e conteúdo nacional.",
    variations: [
      { 
        name: "Compartilhado - Mensal", 
        price: 7.99,
        details: "Acesso compartilhado | Renovação mensal | Catálogo completo",
        important: "Acesso simultâneo limitado | Validade de 30 dias"
      },
      { 
        name: "Privado - Mensal", 
        price: 9.99,
        details: "Acesso exclusivo | Renovação mensal | Catálogo completo",
        important: "Acesso ilimitado | Validade de 30 dias"
      }
    ]
  },
  {
    id: 8,
    name: "Max",
    icon: "fas fa-film",
    category: "streaming",
    description: "Serviço de streaming da HBO Max.",
    variations: [
      { 
        name: "Compartilhada - Mensal", 
        price: 4.99,
        details: "Conta compartilhada | Renovação mensal | Catálogo completo",
        important: "Acesso simultâneo limitado | Validade de 30 dias"
      },
      { 
        name: "Privada - Mensal", 
        price: 7.99,
        details: "Conta exclusiva | Renovação mensal | Catálogo completo",
        important: "Acesso em múltiplos dispositivos | Validade de 30 dias"
      }
    ]
  },
  {
    id: 9,
    name: "Youtube Premium + Music",
    icon: "fab fa-youtube",
    category: "streaming",
    description: "Youtube sem anúncios + Youtube Music Premium.",
    variations: [
      { 
        name: "1 Convite no seu Email (Mensal)", 
        price: 3.99,
        details: "Convite enviado para seu email | Renovação mensal",
        important: "Acesso individual | Validade de 30 dias"
      },
      { 
        name: "5 Convites no seu Email (Mensal)", 
        price: 11.99,
        details: "5 convites enviados para seu email | Renovação mensal",
        important: "Compartilhável com família | Validade de 30 dias"
      }
    ]
  },
  {
    id: 10,
    name: "Globoplay",
    icon: "fas fa-tv",
    category: "streaming",
    description: "Serviço de streaming da Globo.",
    variations: [
      { 
        name: "Básico - Mensal", 
        price: 2.99,
        details: "Acesso básico | Renovação mensal | Conteúdo limitado",
        important: "Alguns programas podem estar indisponíveis"
      },
      { 
        name: "+ Canais - Mensal", 
        price: 4.99,
        details: "Acesso a mais canais | Renovação mensal",
        important: "Conteúdo expandido | Validade de 30 dias"
      },
      { 
        name: "+ Canais (Conta Completa) - Mensal", 
        price: 9.99,
        details: "Acesso completo | Renovação mensal | Todos os canais",
        important: "Conteúdo completo | Validade de 30 dias"
      },
      { 
        name: "+ Canais + Telecine - Mensal", 
        price: 9.99,
        details: "Acesso completo + Telecine | Renovação mensal",
        important: "Inclui filmes do Telecine | Validade de 30 dias"
      }
    ]
  },
  {
    id: 11,
    name: "Claro TV",
    icon: "fas fa-satellite-dish",
    category: "streaming",
    description: "Serviço de TV por streaming da Claro.",
    variations: [
      { 
        name: "Básica - Mensal", 
        price: 5.99,
        details: "Pacote básico de canais | Renovação mensal",
        important: "Canais limitados | Validade de 30 dias"
      },
      { 
        name: "+ Telecine - Mensal", 
        price: 9.99,
        details: "Pacote básico + Telecine | Renovação mensal",
        important: "Inclui filmes do Telecine | Validade de 30 dias"
      },
      { 
        name: "+ Premiere - Mensal", 
        price: 9.99,
        details: "Pacote básico + Premiere | Renovação mensal",
        important: "Inclui jogos ao vivo | Validade de 30 dias"
      }
    ]
  },
  {
    id: 12,
    name: "Sky",
    icon: "fas fa-satellite",
    category: "streaming",
    description: "Serviço de TV por streaming da Sky.",
    variations: [
      { 
        name: "+ Básica - Mensal", 
        price: 13.99,
        details: "Pacote básico de canais | Renovação mensal",
        important: "Canais limitados | Validade de 30 dias"
      },
      { 
        name: "+ HBO - Mensal", 
        price: 17.99,
        details: "Pacote básico + HBO | Renovação mensal",
        important: "Inclui séries e filmes da HBO | Validade de 30 dias"
      },
      { 
        name: "+ Premiere + Telecine + HBO - Mensal", 
        price: 25.99,
        details: "Pacote completo + Premiere + Telecine + HBO | Renovação mensal",
        important: "Conteúdo completo | Validade de 30 dias"
      },
      { 
        name: "+ Premiere + Telecine + HBO + Paramount - Mensal", 
        price: 29.99,
        details: "Pacote completo + todos os extras | Renovação mensal",
        important: "Todos os canais premium | Validade de 30 dias"
      }
    ]
  },
  {
    id: 13,
    name: "Eppi Cinema",
    icon: "fas fa-film",
    category: "streaming",
    description: "Plataforma de filmes e documentários.",
    variations: [
      { 
        name: "Mensal", 
        price: 5.99,
        details: "Acesso mensal | Catálogo completo",
        important: "Validade de 30 dias"
      },
      { 
        name: "Plano Duo", 
        price: 15.99,
        details: "Para 2 pessoas | Acesso simultâneo",
        important: "Validade conforme contrato"
      },
      { 
        name: "Trimestral", 
        price: 15.99,
        details: "Acesso por 3 meses | Economize",
        important: "Validade de 90 dias"
      },
      { 
        name: "Plano Família", 
        price: 29.99,
        details: "Para até 4 pessoas | Acesso simultâneo",
        important: "Validade conforme contrato"
      },
      { 
        name: "Anual", 
        price: 35.99,
        details: "Acesso por 1 ano | Melhor custo-benefício",
        important: "Validade de 365 dias"
      }
    ]
  },
  {
    id: 14,
    name: "Looke",
    icon: "fas fa-video",
    category: "streaming",
    description: "Plataforma de filmes e séries.",
    variations: [
      { 
        name: "Compartilhado - Mensal", 
        price: 9.99,
        details: "Conta compartilhada | Renovação mensal",
        important: "Acesso simultâneo limitado | Validade de 30 dias"
      }
    ]
  },
  {
    id: 15,
    name: "Telecine",
    icon: "fas fa-film",
    category: "streaming",
    description: "Plataforma de filmes premium.",
    variations: [
      { 
        name: "Mensal", 
        price: 5.99,
        details: "Acesso mensal | Catálogo completo",
        important: "Validade de 30 dias"
      },
      { 
        name: "+ Combate - Mensal", 
        price: 9.99,
        details: "Telecine + Combate | Renovação mensal",
        important: "Inclui eventos esportivos | Validade de 30 dias"
      }
    ]
  },
  {
    id: 16,
    name: "Vivo Play",
    icon: "fas fa-tv",
    category: "streaming",
    description: "Serviço de streaming da Vivo.",
    variations: [
      { 
        name: "Mensal", 
        price: 9.99,
        details: "Acesso mensal | Catálogo completo",
        important: "Validade de 30 dias"
      }
    ]
  },
  {
    id: 17,
    name: "PlayPlus",
    icon: "fas fa-basketball-ball",
    category: "streaming",
    description: "Plataforma esportiva e de entretenimento.",
    variations: [
      { 
        name: "Compartilhada - Mensal", 
        price: 4.99,
        details: "Conta compartilhada | Renovação mensal",
        important: "Acesso simultâneo limitado | Validade de 30 dias"
      },
      { 
        name: "Privada - Mensal", 
        price: 9.99,
        details: "Conta exclusiva | Renovação mensal",
        important: "Acesso ilimitado | Validade de 30 dias"
      }
    ]
  },
  {
    id: 18,
    name: "Mubi Premium",
    icon: "fas fa-film",
    category: "streaming",
    description: "Plataforma de filmes cult e independentes.",
    variations: [
      { 
        name: "Compartilhada - Mensal", 
        price: 3.99,
        details: "Conta compartilhada | Renovação mensal",
        important: "Acesso simultâneo limitado | Validade de 30 dias"
      },
      { 
        name: "Privada - Mensal", 
        price: 4.99,
        details: "Conta exclusiva | Renovação mensal",
        important: "Acesso ilimitado | Validade de 30 dias"
      }
    ]
  },
  {
    id: 19,
    name: "Watch TV Brasil",
    icon: "fas fa-tv",
    category: "streaming",
    description: "Plataforma de conteúdo nacional.",
    variations: [
      { 
        name: "Mensal", 
        price: 9.99,
        details: "Acesso mensal | Catálogo completo",
        important: "Validade de 30 dias"
      }
    ]
  },
  {
  id: 20,
  name: "Deezer Premium",
  icon: "fab fa-deezer",
  category: "musica",
  description: "Assinatura Premium do Deezer com diferentes tipos de ativação.",
  variations: [
    { 
      name: "Via Link - Mensal", 
      price: 5.99,
      details: "Ativação via link | Renovação mensal | Qualidade de áudio alta",
      important: "Acesso individual | Validade de 30 dias"
    },
    { 
      name: "No seu Email - Mensal", 
      price: 7.99,
      details: "Conta criada no seu email | Renovação mensal | Qualidade HiFi",
      important: "Acesso individual | Dados pessoais protegidos"
    },
    { 
      name: "Família - Mensal", 
      price: 11.99,
      details: "Para até 6 pessoas | Contas individuais | Renovação mensal",
      important: "Requer comprovação de residência | Economia para família"
    },
    { 
      name: "Duo - Mensal", 
      price: 9.99,
      details: "Para 2 pessoas | Contas individuais | Renovação mensal",
      important: "Ideal para casais | Economia compartilhada"
    }
  ]
},
{
  id: 21,
  name: "Spotify Premium Vitalício",
  icon: "fab fa-spotify",
  category: "vitalicios",
  description: "Método para obter Spotify Premium permanentemente.",
  variations: [
    { 
      name: "Vitalício", 
      price: 9.99,
      details: "Ativação permanente | Sem renovação mensal | Tutorial completo incluído",
      important: "Requer configuração inicial | Suporte por 30 dias | Método não convencional"
    }
  ]
},
{
  id: 22,
  name: "Amazon Prime Video Vitalício",
  icon: "fab fa-amazon",
  category: "vitalicios",
  description: "Método para obter Amazon Prime Video permanentemente.",
  variations: [
    { 
      name: "Vitalício", 
      price: 9.99,
      details: "Acesso vitalício | Sem renovação | Tutorial passo-a-passo",
      important: "Pode requerer configurações específicas | Suporte limitado a 30 dias"
    }
  ]
},
{
  id: 23,
  name: "Canva Pro",
  icon: "fas fa-palette",
  category: "edicao",
  description: "Assinatura premium do Canva para design gráfico profissional.",
  variations: [
    { 
      name: "Via Link - Mensal", 
      price: 4.99,
      details: "Ativação via link exclusivo | Acesso a todos os recursos Pro | Templates premium",
      important: "Renovação mensal | Suporte para configuração inicial"
    }
  ]
},
{
  id: 24,
  name: "Capcut Pro",
  icon: "fas fa-film",
  category: "edicao",
  description: "Versão Pro do CapCut para edição de vídeos avançada.",
  variations: [
    { 
      name: "Compartilhado - Mensal", 
      price: 9.99,
      details: "Conta compartilhada | Efeitos exclusivos Pro | Sem marca d'água",
      important: "Acesso simultâneo limitado | Renovação mensal"
    }
  ]
},
    {
  id: 25,
  name: "ChatGPT Plus",
  icon: "fas fa-robot",  // Ícone para IA
  category: "ia",
  description: "Assinatura premium do ChatGPT com acesso a GPT-4 e recursos avançados.",
  variations: [
    { 
      name: "Compartilhado - Mensal", 
      price: 19.99,
      details: "Acesso compartilhado ao ChatGPT Plus | GPT-4 disponível | Respostas prioritárias",
      important: "Limite de uso simultâneo | Renovação mensal | Suporte 24h"
    }
  ]
},
{
  id: 26,
  name: "Veo 3 + Gemini Pro",
  icon: "fas fa-brain",  // Ícone para IA avançada
  category: "ia",
  description: "Pacote premium de inteligência artificial com convite exclusivo.",
  variations: [
    { 
      name: "Convite de Acesso", 
      price: 9.99,
      details: "Acesso a Veo 3 e Gemini Pro | Tecnologia de ponta em IA | Convite exclusivo",
      important: "Ativação imediata | Suporte para configuração | Acesso vitalício"
    }
  ]
}
];