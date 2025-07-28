import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Phone, MessageCircle, ArrowLeft, Calendar, User, Clock } from 'lucide-react'
import logo from '../assets/logo.png'
import desentupimentoCano from '../assets/desentupimento_cano.jpg'
import desentupimentoRalo from '../assets/desentupimento_ralo.jpg'
import desentupimentoVaso from '../assets/desentupimento_vaso.webp'

function Blog() {
  const whatsappNumber = "5511986902406"
  const phoneNumber = "11986902406"

  const blogPosts = [
    {
      id: 1,
      title: "Como Prevenir Entupimentos em Casa: Guia Completo",
      excerpt: "Dicas essenciais para evitar entupimentos e manter sua casa funcionando perfeitamente. Aprenda práticas simples que podem economizar muito dinheiro.",
      image: desentupimentoCano,
      date: "28 de Julho, 2024",
      readTime: "8 min",
      category: "Prevenção"
    },
    {
      id: 2,
      title: "5 Sinais de que Você Precisa de uma Desentupidora Profissional",
      excerpt: "Identifique os sinais de alerta que indicam a necessidade de um serviço profissional. Saiba quando não tentar resolver sozinho.",
      image: desentupimentoRalo,
      date: "28 de Julho, 2024",
      readTime: "6 min",
      category: "Diagnóstico"
    },
    {
      id: 3,
      title: "Manutenção Preventiva: Vale a Pena Investir?",
      excerpt: "Entenda os benefícios da manutenção preventiva para evitar problemas futuros e economizar dinheiro a longo prazo.",
      image: desentupimentoVaso,
      date: "28 de Julho, 2024",
      readTime: "10 min",
      category: "Manutenção"
    }
  ]

  const handlePostClick = (postId) => {
    // Aqui você implementaria a navegação para o post específico
    // Por enquanto, vamos simular com um alert
    window.location.hash = `#blog-post-${postId}`
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo e Nome */}
            <div className="flex items-center space-x-3">
              <img src={logo} alt="SOS Desentupidora" className="h-12 w-12 rounded-full" />
              <div>
                <h1 className="text-xl font-bold text-red-600">SOS Desentupidora</h1>
                <p className="text-sm text-gray-600">Atendimento 24h</p>
              </div>
            </div>

            {/* Botões Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
                className="bg-green-500 text-white border-green-500 hover:bg-green-600"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
              <Button 
                size="sm"
                onClick={() => window.open(`tel:${phoneNumber}`, '_self')}
                className="bg-red-600 hover:bg-red-700"
              >
                <Phone className="w-4 h-4 mr-2" />
                Ligar Agora
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="pt-20">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Button 
              variant="ghost" 
              onClick={() => window.location.href = '/'}
              className="text-red-600 hover:text-red-700"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Site
            </Button>
          </div>

          {/* Cabeçalho do Blog */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Blog SOS Desentupidora
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dicas, informações e guias completos sobre desentupimento, manutenção preventiva 
              e cuidados com o sistema de encanamento da sua casa.
            </p>
          </div>

          {/* Posts do Blog */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        {post.date}
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handlePostClick(post.id)}
                        className="text-red-600 border-red-600 hover:bg-red-600 hover:text-white"
                      >
                        Ler Mais
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Seção de Newsletter */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Receba Dicas Exclusivas
              </h3>
              <p className="text-gray-600 mb-6">
                Inscreva-se para receber dicas exclusivas sobre manutenção preventiva, 
                prevenção de entupimentos e cuidados com o encanamento da sua casa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Seu melhor e-mail"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <Button className="bg-red-600 hover:bg-red-700">
                  Inscrever-se
                </Button>
              </div>
            </div>
          </div>

          {/* Seção de Contato */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-red-50 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Precisa de Ajuda Imediata?
              </h3>
              <p className="text-gray-700 mb-6">
                Nossa equipe está disponível 24 horas para resolver qualquer problema de entupimento 
                em toda Grande São Paulo. Não deixe um pequeno problema se tornar uma grande dor de cabeça!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  onClick={() => window.open(`tel:${phoneNumber}`, '_self')}
                  className="bg-red-600 hover:bg-red-700"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Ligar Agora: (11) 98690-2406
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Olá! Vim através do blog e preciso de ajuda com desentupimento.`, '_blank')}
                  className="bg-green-500 text-white border-green-500 hover:bg-green-600"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-16">
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
              <h4 className="text-lg font-semibold mb-4">Blog</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Prevenção</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Manutenção</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Diagnóstico</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dicas Gerais</a></li>
              </ul>
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
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 SOS Desentupidora. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Botão Flutuante WhatsApp */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
          className="bg-green-500 hover:bg-green-600 rounded-full w-16 h-16 shadow-lg"
        >
          <MessageCircle className="w-8 h-8" />
        </Button>
      </div>
    </div>
  )
}

export default Blog

