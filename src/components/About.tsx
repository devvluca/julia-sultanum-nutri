import { ArrowDown } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="section-padding bg-cream-light">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Sobre Júlia Sultanum
          </h2>
          <div className="w-20 h-1 bg-bronze mx-auto mb-6"></div>
          <p className="text-charcoal text-lg">
            Descubra uma abordagem personalizada que vai além das dietas restritivas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1" data-aos="fade-right" data-aos-delay="200">
            <h3 className="text-2xl md:text-3xl font-serif text-bronze mb-4">
              Nutricionista com foco em saúde gastrointestina e estética corporal
            </h3>
            <p className="text-charcoal mb-6">
               formada pela Faculdade Pernambucana de Saúde e pós-graduanda em Gastroenterologia. Mas mais do que títulos, o que me move é ver a transformação real de quem chega até mim com dúvidas, dores e frustrações – e sai com clareza, autonomia e resultados que duram.

Acredito que ninguém merece viver à base de tentativas frustradas ou dietas que só pioram a relação com o corpo. Por isso, trago um cuidado individualizado, com olhar técnico e acolhimento humano.

            <p className="text-charcoal mb-6">
             Se nada parece funcionar, talvez o que esteja faltando não seja força de vontade — e sim um plano feito para você, com orientação certa e escuta de verdade. Aqui, o cuidado é pensado nos mínimos detalhes, porque "individualidade no cuidado, excelência no resultado" não é só um lema — é o que você vai sentir na prática.
            </p>
            <div className="flex items-center gap-2 text-bronze">
              <ArrowDown size={18} />
              <span
                className="font-medium cursor-pointer underline underline-offset-2 hover:text-bronze-dark transition-colors"
                onClick={() => {
                  const infoBox = document.querySelector('#contato .bg-cream');
                  if (infoBox) {
                    infoBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
                }}
              >
                CRN: 47502/P
              </span>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center" data-aos="fade-left" data-aos-delay="300">
            <div className="relative w-full max-w-sm">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-bronze rounded-xl"></div>
              <img 
                src="/img/mini-imagem.jpg" 
                alt="Julia Sultanum Nutricionista" 
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
