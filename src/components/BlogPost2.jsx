import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Phone, MessageCircle, ArrowLeft, Calendar, User, Clock, AlertTriangle } from 'lucide-react'
import logo from '../assets/logo.png'
import desentupimentoRalo from '../assets/desentupimento_ralo.jpg'

function BlogPost2() {
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
              src={desentupimentoRalo} 
              alt="5 Sinais de que Você Precisa de uma Desentupidora"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg mb-8"
            />

            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                5 Sinais de que Você Precisa de uma Desentupidora Profissional
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
                  <span>6 min de leitura</span>
                </div>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                Nem todos os problemas de encanamento podem ser resolvidos com métodos caseiros. 
                Saber quando é hora de chamar uma desentupidora profissional pode economizar tempo, 
                dinheiro e evitar danos maiores à sua propriedade. Conheça os principais sinais de alerta.
              </p>
            </div>

            {/* Conteúdo do Artigo */}
            <article className="prose prose-lg max-w-none">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <div className="flex">
                  <AlertTriangle className="w-5 h-5 text-yellow-400 mr-3 mt-0.5" />
                  <div>
                    <p className="text-yellow-800 font-medium">Atenção!</p>
                    <p className="text-yellow-700 text-sm">
                      Ignorar os sinais de problemas no encanamento pode resultar em danos estruturais 
                      e custos muito maiores de reparo.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Água que Escoa Muito Lentamente</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Um dos primeiros sinais de que você pode precisar de uma desentupidora profissional é quando 
                a água começa a escoar lentamente pelos ralos. Este problema pode parecer menor no início, 
                mas geralmente indica que há uma obstrução se formando no sistema de encanamento.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Quando você nota que a água da pia, do box ou da máquina de lavar demora mais tempo que o 
                normal para escoar, isso significa que há algo impedindo o fluxo livre da água. Pode ser 
                acúmulo de cabelos, gordura, restos de comida ou outros detritos que se acumularam ao longo do tempo.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Embora você possa tentar algumas soluções caseiras inicialmente, como usar um desentupidor 
                ou produtos de limpeza, se o problema persistir ou piorar, é hora de chamar um profissional. 
                Uma desentupidora tem equipamentos especializados, como máquinas de hidrojateamento, que podem 
                remover obstruções de forma mais eficaz e duradoura.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Maus Odores Persistentes</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Odores desagradáveis vindos dos ralos são outro sinal claro de que você precisa de ajuda 
                profissional. Estes odores podem indicar várias situações problemáticas: acúmulo de matéria 
                orgânica em decomposição, problemas no sifão, ou até mesmo questões mais sérias na rede de esgoto.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Quando restos de comida, cabelos, gordura e outros materiais orgânicos ficam presos nos canos, 
                eles começam a se decomposer, criando gases com odores muito desagradáveis. Estes gases podem 
                retornar pelos ralos, causando mau cheiro em toda a casa.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Além do desconforto, estes odores podem indicar problemas de saúde, especialmente se houver 
                gases tóxicos envolvidos. Um profissional pode identificar a fonte exata do problema e 
                realizar uma limpeza completa do sistema, eliminando tanto a obstrução quanto os odores.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Gorgolejos e Ruídos Estranhos</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Sons estranhos vindos dos canos, como gorgolejos, borbulhamentos ou ruídos de sucção, 
                são sinais de que o ar está tendo dificuldade para circular adequadamente no sistema de 
                encanamento. Isso geralmente acontece quando há obstruções parciais que impedem o fluxo 
                normal da água e do ar.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Estes ruídos podem ser especialmente perceptíveis quando você puxa a descarga do vaso 
                sanitário, esvazia a banheira ou usa a máquina de lavar. O som indica que o sistema está 
                lutando para mover a água através de uma passagem restrita.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Embora possa parecer um problema menor, estes ruídos frequentemente precedem entupimentos 
                completos. É muito mais econômico e conveniente resolver o problema nesta fase do que 
                esperar até que o sistema pare completamente de funcionar.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Múltiplos Pontos de Entupimento</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Quando você tem problemas de drenagem em múltiplos pontos da casa simultaneamente, isso 
                geralmente indica um problema na linha principal de esgoto, não apenas em um ralo específico. 
                Esta é definitivamente uma situação que requer atenção profissional imediata.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Por exemplo, se a pia da cozinha, o ralo do banheiro e o vaso sanitário estão todos 
                apresentando problemas ao mesmo tempo, o problema provavelmente está na tubulação principal 
                que conecta sua casa à rede de esgoto municipal. Isso pode ser causado por raízes de árvores 
                que invadiram os canos, colapso parcial da tubulação, ou obstruções maiores.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Tentar resolver este tipo de problema por conta própria não apenas é ineficaz, mas pode 
                ser perigoso. Profissionais têm equipamentos como câmeras de inspeção que podem identificar 
                exatamente onde está o problema e qual a melhor forma de resolvê-lo.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Água Retornando pelos Ralos</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                O sinal mais alarmante de que você precisa de uma desentupidora profissional é quando a 
                água começa a retornar pelos ralos. Isso pode acontecer no box do banheiro, na pia da 
                cozinha, ou até mesmo no vaso sanitário. Este é um problema sério que requer atenção imediata.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Quando a água retorna, significa que há uma obstrução completa em algum ponto do sistema 
                de encanamento, forçando a água a encontrar uma saída alternativa. Além de ser extremamente 
                inconveniente, isso pode causar danos significativos à sua propriedade e criar riscos de saúde.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                A água que retorna pelos ralos pode conter bactérias, vírus e outros contaminantes perigosos. 
                É essencial parar de usar o sistema de encanamento imediatamente e chamar uma desentupidora 
                profissional. Tentar resolver este problema sozinho pode piorar a situação e espalhar a 
                contaminação.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Por que Escolher um Serviço Profissional?</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Desentupidoras profissionais têm acesso a equipamentos e técnicas que não estão disponíveis 
                para o consumidor comum. Máquinas de hidrojateamento, cabos elétricos especializados, 
                câmeras de inspeção e produtos químicos profissionais podem resolver problemas que métodos 
                caseiros simplesmente não conseguem.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Além disso, profissionais experientes podem identificar rapidamente a causa raiz do problema 
                e oferecer soluções duradouras. Eles também podem detectar problemas potenciais antes que 
                se tornem emergências caras, oferecendo conselhos valiosos sobre manutenção preventiva.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Quando Chamar Imediatamente</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Algumas situações requerem atenção profissional imediata, sem tentativas de soluções caseiras. 
                Estas incluem: água retornando pelos ralos, odores de gás de esgoto, múltiplos pontos de 
                entupimento simultâneos, ou qualquer situação que possa representar riscos de saúde ou segurança.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Lembre-se de que problemas de encanamento tendem a piorar com o tempo. O que começa como 
                um pequeno inconveniente pode rapidamente se transformar em uma emergência cara. Reconhecer 
                os sinais precocemente e agir rapidamente pode economizar muito dinheiro e estresse a longo prazo.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Conclusão</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Saber quando chamar uma desentupidora profissional é uma habilidade valiosa para qualquer 
                proprietário. Os cinco sinais discutidos neste artigo - drenagem lenta, maus odores, ruídos 
                estranhos, múltiplos entupimentos e água retornando - são todos indicadores de que é hora 
                de buscar ajuda profissional.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Não espere até que um pequeno problema se torne uma grande emergência. Agir rapidamente 
                quando você nota estes sinais pode economizar tempo, dinheiro e evitar danos significativos 
                à sua propriedade. Profissionais qualificados têm as ferramentas e o conhecimento necessários 
                para resolver problemas de forma eficaz e duradoura.
              </p>
            </article>

            {/* Call to Action */}
            <div className="bg-red-50 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Identificou Algum Destes Sinais?
              </h3>
              <p className="text-gray-700 mb-4">
                Não espere o problema piorar! A SOS Desentupidora está disponível 24 horas para resolver 
                qualquer problema de entupimento em toda Grande São Paulo. Nossa equipe experiente tem 
                os equipamentos e conhecimento necessários para solucionar seu problema rapidamente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => window.open(`tel:${phoneNumber}`, '_self')}
                  className="bg-red-600 hover:bg-red-700"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Emergência: (11) 98690-2406
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Olá! Identifiquei sinais de entupimento e preciso de ajuda profissional.`, '_blank')}
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

export default BlogPost2

