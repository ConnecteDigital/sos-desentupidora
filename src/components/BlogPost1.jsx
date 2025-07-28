import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Phone, MessageCircle, ArrowLeft, Calendar, User, Clock } from 'lucide-react'
import logo from '../assets/logo.png'
import desentupimentoCano from '../assets/desentupimento_cano.jpg'

function BlogPost1() {
  const whatsappNumber = "5511986902406"
  const phoneNumber = "11986902406"

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

      {/* Conteúdo do Post */}
      <main className="pt-20">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Button 
              variant="ghost" 
              onClick={() => window.history.back()}
              className="text-red-600 hover:text-red-700"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Blog
            </Button>
          </div>

          {/* Cabeçalho do Post */}
          <div className="max-w-4xl mx-auto">
            <img 
              src={desentupimentoCano} 
              alt="Como Prevenir Entupimentos em Casa"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg mb-8"
            />

            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Como Prevenir Entupimentos em Casa: Guia Completo
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>28 de Julho, 2024</span>
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  <span>SOS Desentupidora</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>8 min de leitura</span>
                </div>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                Entupimentos são um dos problemas mais comuns e frustrantes que podem ocorrer em qualquer residência. 
                Felizmente, a maioria deles pode ser evitada com algumas práticas simples de prevenção. 
                Neste guia completo, você aprenderá tudo o que precisa saber para manter sua casa livre de entupimentos.
              </p>
            </div>

            {/* Conteúdo do Artigo */}
            <article className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Por que os Entupimentos Acontecem?</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Antes de falarmos sobre prevenção, é importante entender as principais causas dos entupimentos. 
                Na maioria dos casos, os entupimentos ocorrem devido ao acúmulo gradual de resíduos que não deveriam 
                estar no sistema de esgoto. Cabelos, restos de comida, gordura, papel higiênico em excesso e objetos 
                pequenos são os principais vilões.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                O sistema de encanamento de uma casa foi projetado para transportar apenas água e dejetos humanos. 
                Quando outros materiais são introduzidos no sistema, eles podem se acumular ao longo do tempo, 
                criando obstruções que impedem o fluxo normal da água.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Prevenção na Cozinha</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                A cozinha é um dos locais onde mais ocorrem entupimentos, principalmente na pia e no ralo. 
                A gordura é o principal causador de problemas neste ambiente. Quando despejada quente pelo ralo, 
                ela pode parecer inofensiva, mas ao esfriar, solidifica-se e gruda nas paredes dos canos, 
                criando uma barreira que retém outros resíduos.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Para prevenir entupimentos na cozinha, nunca despeje óleo ou gordura pelo ralo. Em vez disso, 
                deixe a gordura esfriar e solidificar, depois descarte-a no lixo comum. Use papel toalha para 
                limpar panelas e pratos antes de lavá-los, removendo o máximo de gordura possível.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Instale uma peneira ou filtro no ralo da pia para capturar restos de comida. Estes pequenos 
                dispositivos são muito eficazes para impedir que partículas de alimento entrem no sistema de esgoto. 
                Lembre-se de limpar a peneira regularmente para manter sua eficácia.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cuidados no Banheiro</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                O banheiro apresenta seus próprios desafios quando se trata de prevenção de entupimentos. 
                O vaso sanitário, o ralo do box e a pia do banheiro requerem cuidados específicos para 
                funcionar adequadamente.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                No vaso sanitário, use apenas a quantidade necessária de papel higiênico. Papéis muito espessos 
                ou em grande quantidade podem causar entupimentos. Nunca descarte fraldas, absorventes, 
                preservativos, fio dental ou qualquer outro objeto pelo vaso sanitário, mesmo que sejam 
                anunciados como "descartáveis no vaso".
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                No box do banheiro, os cabelos são o principal problema. Instale um protetor de ralo específico 
                para capturar cabelos antes que eles entrem no sistema de esgoto. Após cada banho, remova os 
                cabelos acumulados no protetor. Esta simples ação pode prevenir a maioria dos entupimentos no box.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Manutenção Preventiva Regular</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Além das práticas diárias de prevenção, é importante realizar uma manutenção preventiva regular 
                em todo o sistema de encanamento da casa. Uma vez por semana, despeje água quente pelos ralos 
                para ajudar a dissolver pequenos acúmulos de gordura e sabão.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Uma mistura de bicarbonato de sódio e vinagre também pode ser muito eficaz. Despeje meia xícara 
                de bicarbonato de sódio pelo ralo, seguida de meia xícara de vinagre branco. Deixe agir por 
                30 minutos e depois despeje água quente. Esta combinação ajuda a quebrar acúmulos orgânicos 
                e mantém os canos limpos.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sinais de Alerta</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Mesmo com todas as medidas preventivas, é importante estar atento aos sinais que podem indicar 
                o início de um entupimento. Água que escoa lentamente, gorgolejos estranhos, maus odores vindos 
                dos ralos e água que retorna são todos sinais de que algo não está funcionando corretamente.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Quando estes sinais aparecem, é hora de agir rapidamente. Quanto mais cedo o problema for 
                identificado e tratado, menor será o custo e a complexidade da solução. Em muitos casos, 
                uma limpeza simples pode resolver o problema antes que se torne um entupimento completo.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Quando Chamar um Profissional</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Embora muitas medidas preventivas possam ser tomadas pelos próprios moradores, há situações 
                em que é necessário chamar um profissional. Se você notar que os problemas persistem mesmo 
                após seguir todas as práticas preventivas, ou se houver entupimentos recorrentes, pode haver 
                um problema mais sério no sistema de encanamento.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Problemas na rede principal de esgoto, raízes de árvores que invadem os canos, ou danos 
                estruturais no encanamento são situações que requerem equipamentos e conhecimento especializado. 
                Nesses casos, tentar resolver o problema por conta própria pode piorar a situação e resultar 
                em custos muito maiores.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Conclusão</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                A prevenção de entupimentos é muito mais simples e econômica do que lidar com o problema 
                depois que ele já ocorreu. Com algumas mudanças simples nos hábitos diários e uma manutenção 
                preventiva regular, é possível evitar a maioria dos entupimentos domésticos.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Lembre-se: o que você coloca pelo ralo hoje pode se tornar um problema amanhã. Seja consciente 
                sobre o que descarta pelo sistema de esgoto e mantenha uma rotina de limpeza preventiva. 
                Sua casa e seu bolso agradecerão.
              </p>
            </article>

            {/* Call to Action */}
            <div className="bg-red-50 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Precisa de Ajuda Profissional?
              </h3>
              <p className="text-gray-700 mb-4">
                Se você está enfrentando problemas de entupimento ou quer uma avaliação preventiva do seu sistema de encanamento, 
                a SOS Desentupidora está aqui para ajudar. Atendemos 24 horas em toda Grande São Paulo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => window.open(`tel:${phoneNumber}`, '_self')}
                  className="bg-red-600 hover:bg-red-700"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Ligar Agora: (11) 98690-2406
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Olá! Li o artigo sobre prevenção de entupimentos e gostaria de mais informações.`, '_blank')}
                  className="bg-green-500 text-white border-green-500 hover:bg-green-600"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

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

export default BlogPost1

