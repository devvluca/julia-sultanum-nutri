import { ArrowDown } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="section-padding bg-cream-light">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Sobre Julia Sultanum
          </h2>
          <div className="w-20 h-1 bg-bronze mx-auto mb-6"></div>
          <p className="text-charcoal text-lg">
            Descubra uma abordagem personalizada que vai além das dietas restritivas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1" data-aos="fade-right" data-aos-delay="200">
            <h3 className="text-2xl md:text-3xl font-serif text-bronze mb-4">
              Nutricionista especialista em saúde digestiva e estética
            </h3>
            <p className="text-charcoal mb-6">
              Com formação em nutrição pela Faculdade Pernambucana de Saúde e pós graduanda em Nutrição Gastrointestinal, 
              trago comprometimento em ajudar pacientes a transformarem sua saúde através da alimentação.
            </p>
            <p className="text-charcoal mb-6">
              Minha abordagem combina conhecimento científico com compreensão das necessidades individuais de cada paciente. 
              Acredito que a nutrição adequada na individualidade do cuidado, e excelente no resultado.
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
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80" 
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
