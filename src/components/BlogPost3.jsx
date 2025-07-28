import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Phone, MessageCircle, ArrowLeft, Calendar, User, Clock, CheckCircle, DollarSign } from 'lucide-react'
import logo from '../assets/logo.png'
import desentupimentoVaso from '../assets/desentupimento_vaso.webp'

function BlogPost3() {
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
              src={desentupimentoVaso} 
              alt="Manutenção Preventiva: Vale a Pena?"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg mb-8"
            />

            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Manutenção Preventiva: Vale a Pena Investir?
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
                  <span>10 min de leitura</span>
                </div>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                A manutenção preventiva do sistema de encanamento é um investimento que pode economizar 
                milhares de reais em reparos emergenciais. Descubra por que vale a pena investir em 
                prevenção e como implementar um programa eficaz de manutenção.
              </p>
            </div>

            {/* Conteúdo do Artigo */}
            <article className="prose prose-lg max-w-none">
              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
                <div className="flex">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5" />
                  <div>
                    <p className="text-green-800 font-medium">Fato Importante</p>
                    <p className="text-green-700 text-sm">
                      Estudos mostram que a manutenção preventiva pode reduzir os custos de reparo 
                      em até 70% e aumentar a vida útil do sistema de encanamento em 50%.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">O que é Manutenção Preventiva?</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                A manutenção preventiva do sistema de encanamento consiste em uma série de ações planejadas 
                e regulares destinadas a manter o sistema funcionando adequadamente e prevenir problemas 
                antes que eles ocorram. É uma abordagem proativa que contrasta com a manutenção corretiva, 
                que só age depois que o problema já se manifestou.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Este tipo de manutenção inclui inspeções regulares, limpezas programadas, substituição 
                de componentes desgastados antes que falhem, e ajustes necessários para manter o sistema 
                operando em condições ideais. É como fazer a revisão regular do seu carro - você não 
                espera o motor quebrar para trocar o óleo.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                No contexto do encanamento residencial, a manutenção preventiva pode incluir desde 
                limpezas simples que o próprio morador pode fazer até inspeções técnicas mais complexas 
                que requerem equipamentos especializados e conhecimento profissional.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Benefícios Econômicos da Prevenção</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                O principal argumento a favor da manutenção preventiva é econômico. Embora possa parecer 
                um gasto desnecessário quando tudo está funcionando bem, os números mostram uma realidade 
                diferente. O custo de uma manutenção preventiva regular é significativamente menor do que 
                o custo de reparos emergenciais.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Por exemplo, uma limpeza preventiva anual de toda a rede de esgoto de uma residência pode 
                custar entre R$ 200 e R$ 500, dependendo do tamanho da propriedade. Em contraste, resolver 
                um entupimento severo que cause refluxo de esgoto pode custar entre R$ 800 e R$ 2.000, 
                sem contar os danos à propriedade que podem elevar esse valor para dezenas de milhares de reais.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Além dos custos diretos de reparo, há também os custos indiretos a considerar. Entupimentos 
                emergenciais frequentemente ocorrem nos momentos mais inconvenientes - fins de semana, 
                feriados, madrugada - quando os custos de serviço são mais altos. A manutenção preventiva 
                pode ser agendada em horários convenientes e com preços regulares.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Prevenção de Danos Estruturais</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Um dos aspectos mais importantes da manutenção preventiva é sua capacidade de prevenir 
                danos estruturais graves. Vazamentos pequenos e não detectados podem causar danos 
                significativos ao longo do tempo, incluindo apodrecimento de madeira, danos à fundação, 
                crescimento de mofo e deterioração de paredes e pisos.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Estes tipos de danos frequentemente passam despercebidos até que se tornem problemas 
                sérios e caros de resolver. Uma inspeção preventiva regular pode identificar vazamentos 
                pequenos, corrosão inicial, ou outros problemas estruturais antes que causem danos 
                significativos à propriedade.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                O custo de reparar danos estruturais causados por problemas de encanamento pode facilmente 
                chegar a dezenas de milhares de reais. Em casos extremos, pode ser necessário refazer 
                pisos, paredes, ou até mesmo partes da fundação. A manutenção preventiva pode evitar 
                completamente estes cenários catastróficos.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Componentes de um Programa Preventivo</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Um programa eficaz de manutenção preventiva deve incluir vários componentes diferentes, 
                cada um com sua própria frequência e objetivos específicos. A combinação destes elementos 
                cria uma abordagem abrangente que cobre todos os aspectos do sistema de encanamento.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Inspeções visuais regulares</strong> devem ser feitas mensalmente pelo próprio morador. 
                Isso inclui verificar se há vazamentos visíveis, sinais de corrosão, manchas de água, 
                ou outros problemas óbvios. Estas inspeções não requerem conhecimento técnico especializado, 
                mas podem identificar problemas em estágios iniciais.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Limpezas preventivas</strong> devem ser realizadas trimestralmente ou semestralmente, 
                dependendo do uso do sistema. Isso inclui limpeza de ralos, sifões, e tubulações principais 
                usando métodos apropriados como hidrojateamento ou produtos químicos específicos.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Inspeções técnicas profissionais</strong> devem ser realizadas anualmente por uma 
                empresa especializada. Estas inspeções podem incluir o uso de câmeras para examinar o 
                interior das tubulações, testes de pressão, e avaliação do estado geral do sistema.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tecnologias Modernas de Prevenção</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                A tecnologia moderna oferece várias ferramentas que tornam a manutenção preventiva mais 
                eficaz e precisa. Câmeras de inspeção de alta definição podem examinar o interior das 
                tubulações sem necessidade de escavação, identificando problemas como corrosão, raízes 
                de árvores, ou obstruções parciais.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Equipamentos de hidrojateamento de alta pressão podem limpar tubulações de forma muito 
                mais eficaz do que métodos tradicionais, removendo acúmulos de gordura, calcário, e 
                outros detritos que podem causar entupimentos futuros. Esta tecnologia permite uma 
                limpeza completa sem danificar as tubulações.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Sistemas de monitoramento inteligente estão se tornando mais acessíveis e podem alertar 
                os proprietários sobre problemas potenciais em tempo real. Sensores podem detectar 
                vazamentos, mudanças na pressão da água, ou outros indicadores de problemas antes que 
                se tornem visíveis ou causem danos.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequência Ideal de Manutenção</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                A frequência ideal de manutenção preventiva varia dependendo de vários fatores, incluindo 
                a idade do sistema de encanamento, o tipo de tubulação, o número de pessoas na residência, 
                e o histórico de problemas. No entanto, existem algumas diretrizes gerais que podem servir 
                como ponto de partida.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Para residências com sistemas de encanamento mais novos (menos de 10 anos), uma inspeção 
                profissional anual e limpezas preventivas semestrais são geralmente suficientes. Para 
                sistemas mais antigos, pode ser necessário aumentar a frequência para inspeções semestrais 
                e limpezas trimestrais.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Residências com histórico de problemas recorrentes, ou aquelas localizadas em áreas com 
                água muito dura ou outros fatores ambientais desafiadores, podem se beneficiar de um 
                programa de manutenção mais intensivo. Um profissional qualificado pode avaliar as 
                necessidades específicas de cada propriedade.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Custo-Benefício a Longo Prazo</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Quando analisamos o custo-benefício da manutenção preventiva a longo prazo, os números 
                são convincentes. Uma residência típica que investe em manutenção preventiva regular 
                pode esperar economizar entre 50% e 70% em custos de reparo ao longo de 10 anos, 
                comparado com uma abordagem puramente reativa.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Além das economias diretas em reparos, há também benefícios indiretos significativos. 
                Sistemas bem mantidos têm vida útil mais longa, funcionam de forma mais eficiente, e 
                causam menos inconvenientes aos moradores. O valor da propriedade também pode ser 
                positivamente impactado por um sistema de encanamento bem mantido.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Para proprietários de imóveis de aluguel, a manutenção preventiva é ainda mais importante. 
                Problemas de encanamento podem resultar em inquilinos insatisfeitos, períodos de vacância, 
                e responsabilidades legais. Um programa de manutenção preventiva pode minimizar estes 
                riscos e proteger o investimento.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Como Implementar um Programa Preventivo</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Implementar um programa de manutenção preventiva eficaz começa com uma avaliação completa 
                do sistema atual. Um profissional qualificado pode realizar uma inspeção detalhada e 
                criar um plano personalizado baseado nas necessidades específicas da propriedade.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                O próximo passo é estabelecer um cronograma regular de manutenção. Isso deve incluir 
                tanto atividades que o proprietário pode realizar quanto serviços profissionais. 
                Manter registros detalhados de todas as atividades de manutenção ajuda a rastrear a 
                eficácia do programa e identificar tendências ao longo do tempo.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                É importante escolher uma empresa de desentupimento confiável e experiente para realizar 
                os serviços profissionais. Procure empresas com boa reputação, equipamentos modernos, 
                e técnicos qualificados. Uma boa empresa deve ser capaz de fornecer relatórios detalhados 
                após cada serviço e recomendações para melhorias futuras.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Conclusão</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                A manutenção preventiva do sistema de encanamento é definitivamente um investimento que 
                vale a pena. Os benefícios econômicos, a prevenção de danos estruturais, e a tranquilidade 
                que vem de saber que seu sistema está funcionando adequadamente superam em muito os custos 
                envolvidos.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Em um mundo onde os custos de reparo continuam a subir e os inconvenientes de problemas 
                de encanamento podem ser significativos, a manutenção preventiva oferece uma forma 
                inteligente e econômica de proteger seu investimento e manter sua casa funcionando 
                adequadamente.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Não espere até que problemas apareçam para começar a pensar em manutenção. Comece hoje 
                mesmo a implementar um programa de manutenção preventiva e desfrute dos benefícios de 
                um sistema de encanamento confiável e eficiente por muitos anos.
              </p>
            </article>

            {/* Call to Action */}
            <div className="bg-blue-50 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                <DollarSign className="w-6 h-6 inline mr-2 text-blue-600" />
                Comece Seu Programa de Manutenção Preventiva
              </h3>
              <p className="text-gray-700 mb-4">
                Quer implementar um programa de manutenção preventiva em sua residência? A SOS Desentupidora 
                oferece planos personalizados de manutenção preventiva para toda Grande São Paulo. 
                Economize dinheiro e evite problemas futuros!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => window.open(`tel:${phoneNumber}`, '_self')}
                  className="bg-red-600 hover:bg-red-700"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Consulta: (11) 98690-2406
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Olá! Gostaria de saber mais sobre planos de manutenção preventiva.`, '_blank')}
                  className="bg-green-500 text-white border-green-500 hover:bg-green-600"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Solicitar Orçamento
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

export default BlogPost3

