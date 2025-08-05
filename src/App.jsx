import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Phone, MessageCircle, Menu, X, MapPin, Clock, Star, Mail, Facebook, Instagram } from 'lucide-react'
import './App.css'

// Importando imagens
import logo from './assets/logo.png'
import heroBackground from './assets/hero_background_new.jpg'
import desentupimentoCano from './assets/desentupimento_cano.jpg'
import desentupimentoRalo from './assets/desentupimento_ralo.jpg'
import desentupimentoVaso from './assets/desentupimento_vaso.webp'
import desentupimentoEsgoto from './assets/desentupimento_esgoto.jpg'
import desentupimentoPia from './assets/desentupimento_pia.webp'
import atendimento24h from './assets/atendimento_24h.jpg'
import mapaSP from './assets/mapa_sp.png'
import whatsappIcon from './assets/whatsapp_icon.png'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Simula carregamento da página
    setIsLoaded(true)
    
    // Adiciona Google Analytics (simulado)
    if (typeof window !== 'undefined') {
      // window.gtag('config', 'GA_MEASUREMENT_ID')
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const whatsappNumber = "5511986902406"
  const phoneNumber = "11986902406"

  const services = [
    {
      title: "Desentupimento de Cano",
      description: "Desentupimento profissional de canos e tubulações com equipamentos modernos e técnicas eficazes.",
      image: desentupimentoCano,
      icon: "🔧",
      alt: "Profissional realizando desentupimento de cano com equipamentos especializados"
    },
    {
      title: "Desentupimento de Ralo",
      description: "Limpeza e desentupimento de ralos de banheiro, cozinha e área de serviço com garantia.",
      image: desentupimentoRalo,
      icon: "🚿",
      alt: "Técnico desentupindo ralo com equipamento profissional"
    },
    {
      title: "Desentupimento de Vaso",
      description: "Serviço especializado em desentupimento de vasos sanitários com atendimento rápido.",
      image: desentupimentoVaso,
      icon: "🚽",
      alt: "Desentupimento de vaso sanitário sendo realizado por profissional"
    },
    {
      title: "Desentupimento de Esgoto",
      description: "Desentupimento de rede de esgoto com hidrojateamento e equipamentos especializados.",
      image: desentupimentoEsgoto,
      icon: "🏠",
      alt: "Serviço de desentupimento de esgoto com hidrojateamento"
    },
    {
      title: "Desentupimento de Pia",
      description: "Desentupimento de pias de cozinha e banheiro com técnicas seguras e eficientes.",
      image: desentupimentoPia,
      icon: "🔧",
      alt: "Profissional desentupindo pia de cozinha"
    }
  ]

  const testimonials = [
    {
      name: "Maria Silva",
      text: "Excelente atendimento! Resolveram o problema do meu banheiro em menos de 1 hora. Super recomendo!",
      rating: 5,
      location: "Vila Madalena, SP"
    },
    {
      name: "João Santos",
      text: "Profissionais muito competentes. Chegaram rápido e fizeram um trabalho impecável. Preço justo!",
      rating: 5,
      location: "Moema, SP"
    },
    {
      name: "Ana Costa",
      text: "Atendimento 24h funcionou perfeitamente. Tive um problema de madrugada e eles vieram imediatamente.",
      rating: 5,
      location: "Pinheiros, SP"
    }
  ]

  // Função para scroll suave
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <div className={`min-h-screen bg-white ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      {/* Header */}
      <header className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo e Nome */}
            <div className="flex items-center space-x-3">
              <img 
                src={logo} 
                alt="SOS Desentupidora - Logo da empresa de desentupimento em São Paulo" 
                className="h-12 w-12 rounded-full"
                loading="eager"
              />
              <div>
                <h1 className="text-xl font-bold text-red-600">SOS Desentupidora</h1>
                <p className="text-sm text-gray-600">Atendimento 24h</p>
              </div>
            </div>

            {/* Botões Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <a 
                href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Olá!%20vim%20pelo%20site%20e%20gostaria%20de%20um%20orçamento`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-8 px-3 bg-green-500 hover:bg-green-600 text-white"
              >
                <img src={whatsappIcon} alt="WhatsApp Icon" className="w-4 h-4 mr-2" />
                Chamar Agora
              </a>
              <Button 
                size="sm"
                onClick={() => window.open(`tel:${phoneNumber}`, '_self')}
                className="bg-red-600 hover:bg-red-700"
                aria-label="Ligar agora para SOS Desentupidora"
              >
                <Phone className="w-4 h-4 mr-2" />
                Ligar Agora
              </Button>
            </div>

            {/* Menu Mobile */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMenu}
                aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>

          {/* Menu Mobile Expandido */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t">
              <nav className="flex flex-col space-y-3 mt-4">
                <button onClick={() => scrollToSection('servicos')} className="text-gray-700 hover:text-red-600 transition-colors text-left">Serviços</button>
                <button onClick={() => scrollToSection('atendimento')} className="text-gray-700 hover:text-red-600 transition-colors text-left">Atendimento 24h</button>
                <button onClick={() => scrollToSection('area')} className="text-gray-700 hover:text-red-600 transition-colors text-left">Área de Atendimento</button>
                <button onClick={() => scrollToSection('depoimentos')} className="text-gray-700 hover:text-red-600 transition-colors text-left">Depoimentos</button>
                <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-red-600 transition-colors text-left">Contato</button>
                <button onClick={() => scrollToSection('blog')} className="text-gray-700 hover:text-red-600 transition-colors text-left">Blog</button>
                <div className="flex flex-col space-y-2 pt-3 border-t">
                  <a 
                    href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Olá!%20vim%20pelo%20site%20e%20gostaria%20de%20um%20orçamento`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-8 px-3 border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chamar Agora
                  </a>
                  <Button 
                    size="sm"
                    onClick={() => window.open(`tel:${phoneNumber}`, '_self')}
                    className="bg-red-600 hover:bg-red-700"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Ligar Agora
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Desentupimento <span className="text-red-500">24 Horas</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Atendimento rápido e eficiente em toda Grande São Paulo. 
            Desentupimento de cano, ralo, vaso, esgoto e pia com garantia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => window.open(`tel:${phoneNumber}`, '_self')}
              className="bg-red-600 hover:bg-red-700 text-lg px-8 py-4"
              aria-label="Ligar agora para emergência de desentupimento"
            >
              <Phone className="w-5 h-5 mr-2" />
              Ligar Agora: (11) 98690-2406
            </Button>
            <a 
              href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Olá!%20vim%20pelo%20site%20e%20gostaria%20de%20um%20orçamento`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-lg font-medium transition-all h-10 px-8 py-4 bg-green-500 hover:bg-green-600 text-white"
              aria-label="Entrar em contato via WhatsApp"
            >
              <img src={whatsappIcon} alt="WhatsApp Icon" className="w-5 h-5 mr-2" />
              Chamar Agora
            </a>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oferecemos soluções completas em desentupimento com equipamentos modernos e profissionais qualificados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={service.image} 
                  alt={service.alt}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3" role="img" aria-label={service.title}>{service.icon}</span>
                    <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <a 
                    href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Olá!%20vim%20pelo%20site%20e%20gostaria%20de%20um%20orçamento%20sobre%20${service.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 py-2 w-full bg-red-600 hover:bg-red-700 text-white"
                    aria-label={`Solicitar orçamento para ${service.title}`}
                  >
                    Pedir Orçamento
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Atendimento 24h */}
      <section id="atendimento" className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Atendimento 24 Horas
              </h2>
              <p className="text-lg mb-6">
                Emergências não esperam! Nossa equipe está disponível 24 horas por dia, 7 dias por semana, 
                incluindo feriados. Atendimento rápido em toda Grande São Paulo.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Clock className="w-6 h-6 mr-3" />
                  <span>Atendimento 24h todos os dias</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-3" />
                  <span>Resposta em até 30 minutos</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 mr-3" />
                  <span>Cobertura em toda Grande São Paulo</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={atendimento24h} 
                alt="Técnico da SOS Desentupidora realizando atendimento 24 horas"
                className="rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Área de Atendimento */}
      <section id="area" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Área de Atendimento
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Atendemos toda a região metropolitana de São Paulo com rapidez e eficiência.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={mapaSP} 
                alt="Mapa da Grande São Paulo mostrando área de atendimento da SOS Desentupidora"
                className="rounded-lg shadow-lg w-full"
                loading="lazy"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Grande São Paulo
              </h3>
              <div className="grid grid-cols-2 gap-4 text-gray-600">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Zona Norte</h4>
                  <ul className="space-y-1 text-sm">
                    <li>Santana</li>
                    <li>Tucuruvi</li>
                    <li>Vila Guilherme</li>
                    <li>Casa Verde</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Zona Sul</h4>
                  <ul className="space-y-1 text-sm">
                    <li>Vila Madalena</li>
                    <li>Moema</li>
                    <li>Brooklin</li>
                    <li>Campo Belo</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Zona Leste</h4>
                  <ul className="space-y-1 text-sm">
                    <li>Tatuapé</li>
                    <li>Mooca</li>
                    <li>Vila Prudente</li>
                    <li>Penha</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Zona Oeste</h4>
                  <ul className="space-y-1 text-sm">
                    <li>Pinheiros</li>
                    <li>Butantã</li>
                    <li>Lapa</li>
                    <li>Perdizes</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6">
                <a 
                  href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Olá!%20vim%20pelo%20site%20e%20gostaria%20de%20um%20orçamento%20e%20verificar%20se%20vocês%20atendem%20na%20minha%20região.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 py-2 bg-red-600 hover:bg-red-700 text-white"
                  aria-label="Verificar se atendemos na sua região"
                >
                  Verificar Atendimento na Sua Região
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Veja os depoimentos de quem já confiou na SOS Desentupidora.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Entre em Contato
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Precisa de ajuda? Entre em contato conosco agora mesmo!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-red-600 mr-4" />
                  <div>
                    <p className="font-semibold">Telefone</p>
                    <p className="text-gray-600">(11) 98690-2406</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="w-6 h-6 text-green-600 mr-4" />
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <p className="text-gray-600">(11) 98690-2406</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">contato@sosdesentupidora.com.br</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-purple-600 mr-4" />
                  <div>
                    <p className="font-semibold">Área de Atendimento</p>
                    <p className="text-gray-600">Grande São Paulo</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Siga-nos nas redes sociais</h4>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm" aria-label="Seguir no Facebook">
                    <Facebook className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" aria-label="Seguir no Instagram">
                    <Instagram className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Solicite um Orçamento
              </h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                  <input 
                    type="text" 
                    id="nome"
                    name="nome"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Seu nome completo"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                  <input 
                    type="tel" 
                    id="telefone"
                    name="telefone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="(11) 99999-9999"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="servico" className="block text-sm font-medium text-gray-700 mb-2">Serviço</label>
                  <select 
                    id="servico"
                    name="servico"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  >
                    <option value="">Selecione o serviço</option>
                    <option value="cano">Desentupimento de Cano</option>
                    <option value="ralo">Desentupimento de Ralo</option>
                    <option value="vaso">Desentupimento de Vaso</option>
                    <option value="esgoto">Desentupimento de Esgoto</option>
                    <option value="pia">Desentupimento de Pia</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                  <textarea 
                    rows="4"
                    id="mensagem"
                    name="mensagem"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Descreva o problema..."
                  ></textarea>
                </div>
                <a 
                  href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Olá! Gostaria de solicitar um orçamento.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 py-2 w-full bg-red-600 hover:bg-red-700 text-white"
                  aria-label="Enviar solicitação via WhatsApp"
                >
                  Enviar via WhatsApp
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section id="blog" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Blog
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dicas e informações úteis sobre desentupimento e manutenção.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={desentupimentoCano} 
                alt="Como prevenir entupimentos em casa - Dicas da SOS Desentupidora"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Como Prevenir Entupimentos em Casa
                </h3>
                <p className="text-gray-600 mb-4">
                  Dicas essenciais para evitar entupimentos e manter sua casa funcionando perfeitamente.
                </p>
                <Button variant="outline" size="sm">
                  Ler Mais
                </Button>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={desentupimentoRalo} 
                alt="Sinais de entupimento - Quando chamar desentupidora"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  5 Sinais de que Você Precisa de uma Desentupidora
                </h3>
                <p className="text-gray-600 mb-4">
                  Identifique os sinais de alerta que indicam a necessidade de um serviço profissional.
                </p>
                <Button variant="outline" size="sm">
                  Ler Mais
                </Button>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={desentupimentoVaso} 
                alt="Manutenção preventiva de encanamento"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Manutenção Preventiva: Vale a Pena?
                </h3>
                <p className="text-gray-600 mb-4">
                  Entenda os benefícios da manutenção preventiva para evitar problemas futuros.
                </p>
                <Button variant="outline" size="sm">
                  Ler Mais
                </Button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src={logo} alt="SOS Desentupidora" className="h-10 w-10 rounded-full" />
                <h3 className="text-xl font-bold">SOS Desentupidora</h3>
              </div>
              <p className="text-gray-300">
                Atendimento 24 horas em toda Grande São Paulo. 
                Soluções rápidas e eficazes para todos os tipos de entupimento.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Desentupimento de Cano</li>
                <li>Desentupimento de Ralo</li>
                <li>Desentupimento de Vaso</li>
                <li>Desentupimento de Esgoto</li>
                <li>Desentupimento de Pia</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Telefone: (11) 98690-2406</li>
                <li>WhatsApp: (11) 98690-2406</li>
                <li>Email: contato@sosdesentupidora.com.br</li>
                <li>Atendimento: 24h todos os dias</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Área de Atendimento</h4>
              <p className="text-gray-300 mb-4">
                Atendemos toda a região metropolitana de São Paulo com rapidez e eficiência.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-gray-800">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-gray-800">
                  <Instagram className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 SOS Desentupidora. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Botão Flutuante WhatsApp */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Olá!%20vim%20pelo%20site%20e%20gostaria%20de%20um%20orçamento`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all bg-green-500 hover:bg-green-600 text-white shadow-lg px-6 py-3"
          aria-label="Entrar em contato via WhatsApp - Botão flutuante"
        >
          <img 
            src={whatsappIcon} 
            alt="WhatsApp" 
            className="w-6 h-6 mr-2"
          />
          Chamar Agora
        </a>
      </div>
    </div>
  )
}

export default App

