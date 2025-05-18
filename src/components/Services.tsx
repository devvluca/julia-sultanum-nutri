import { useRef, useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Check } from 'lucide-react';

const services = [
  {
    title: "Nutrição Clínica",
    description: "Tratamento nutricional personalizado para diversas condições de saúde",
    features: [
      "Avaliação nutricional completa",
      "Plano alimentar personalizado",
      "Acompanhamento mensal",
      "Ajustes conforme necessidade"
    ]
  },
  {
    title: "Saúde Digestiva",
    description: "Especialização em tratamentos para problemas do sistema digestivo",
    features: [
      "Diagnóstico nutricional específico",
      "Plano alimentar terapêutico",
      "Suplementação quando necessário",
      "Acompanhamento quinzenal"
    ]
  },
  {
    title: "Nutrição Estética",
    description: "Estratégias nutricionais para melhorar a composição corporal",
    features: [
      "Avaliação antropométrica detalhada",
      "Plano alimentar estratégico",
      "Suplementação específica",
      "Monitoramento de resultados"
    ]
  },
  {
    title: "Nutrição para TEA",
    description: "Abordagem nutricional especializada para pessoas com Transtorno do Espectro Autista",
    features: [
      "Análise de seletividade alimentar",
      "Estratégias para novas introduções",
      "Suporte a familiares e cuidadores",
      "Acompanhamento personalizado"
    ]
  }
];

const Services = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Carousel state for mobile
  const [active, setActive] = useState(0);
  const touchStartX = useRef<number | null>(null);

  // Handle swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 40 && active > 0) setActive(active - 1); // swipe right
    if (delta < -40 && active < services.length - 1) setActive(active + 1); // swipe left
    touchStartX.current = null;
  };

  // Auto-advance carousel on mobile every 3s
  useEffect(() => {
    // Só ativa o auto-slide se for mobile (md:hidden está ativo)
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [active]);

  // Carousel for mobile, grid for desktop
  return (
    <section id="serviços" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Serviços Especializados
          </h2>
          <div className="w-20 h-1 bg-bronze mx-auto mb-6"></div>
          <p className="text-charcoal text-lg">
            Conheça as especialidades disponíveis para cuidar da sua saúde
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="block md:hidden relative">
          <div
            className="flex overflow-x-hidden touch-pan-x"
            style={{
              // Centraliza o card ativo, mostra preview dos lados
              transform: `translateX(calc(50vw - 50% - ${active * 85}vw))`,
              transition: "transform 0.4s cubic-bezier(.4,1.2,.4,1)",
              gap: 0,
            }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex-shrink-0 px-2`}
                style={{
                  width: "85vw",
                  maxWidth: 340,
                  opacity: index === active ? 1 : 0.6,
                  transform: index === active
                    ? "scale(1)"
                    : "scale(0.92)",
                  transition: "transform 0.3s, opacity 0.3s",
                  zIndex: index === active ? 2 : 1,
                }}
              >
                <Card className="h-full flex flex-col border-gray-200 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl text-bronze">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check size={18} className="text-bronze mt-0.5 mr-2 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      onClick={scrollToContact}
                      className="w-full bg-bronze hover:bg-bronze-light"
                    >
                      Agendar Consulta
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
          {/* Carousel indicators */}
          <div className="flex justify-center mt-4 gap-2">
            {services.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                  idx === active ? "bg-bronze" : "bg-bronze/30"
                }`}
                aria-label={`Ir para serviço ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <Card className="h-full flex flex-col border-gray-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-bronze">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check size={18} className="text-bronze mt-0.5 mr-2 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    onClick={scrollToContact}
                    className="w-full bg-bronze hover:bg-bronze-light"
                  >
                    Agendar Consulta
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
