import { useEffect, useRef, useState } from "react";
import { Button } from './ui/button';

const banner = {
  image: "/img/banner-julia.jpg",
  description: "Nutricionista especializada em saúde digestiva e estética, com abordagem personalizada para resultados duradouros."
};

const phrases = [
  "Transforme sua relação com a alimentação",
  "Alimente-se de saúde e bem-estar",
  "Descubra o prazer de comer bem",
  "Nutrição personalizada para você",
  "Seu objetivo, minha missão: saúde através da nutrição"
];

const TYPING_SPEED = 60;
const ERASING_SPEED = 35;
const DELAY_BETWEEN = 2000; // ms after typing before erasing
const PHRASE_INTERVAL = 5000; // total time per phrase

const Hero = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Typing/erasing effect
  useEffect(() => {
    const phrase = phrases[currentPhrase];
    if (typing) {
      if (displayed.length < phrase.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(phrase.slice(0, displayed.length + 1));
        }, TYPING_SPEED);
      } else {
        timeoutRef.current = setTimeout(() => setTyping(false), DELAY_BETWEEN);
      }
    } else {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(phrase.slice(0, displayed.length - 1));
        }, ERASING_SPEED);
      } else {
        timeoutRef.current = setTimeout(() => {
          setCurrentPhrase((prev) => (prev + 1) % phrases.length);
          setTyping(true);
        }, 300);
      }
    }
    return () => timeoutRef.current && clearTimeout(timeoutRef.current);
    // eslint-disable-next-line
  }, [displayed, typing, currentPhrase]);

  // Forcibly change phrase every PHRASE_INTERVAL (in case user stays on same phrase)
  useEffect(() => {
    const interval = setInterval(() => {
      setTyping(false);
    }, PHRASE_INTERVAL);
    return () => clearInterval(interval);
  }, [currentPhrase]);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with darker overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('${banner.image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
        }}
        aria-hidden="true"
      />
      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-start max-w-2xl">
          <div className="mb-6" data-aos="fade-down">
            <img 
              src="/img/simbolo-julia-sultanum-branco.png" 
              alt="Júlia Sultanum Logo" 
              className="h-24 md:h-32 mb-4"
              draggable={false}
              style={{ WebkitUserDrag: 'none' } as React.CSSProperties & { WebkitUserDrag?: string }}
            />
          </div>
          <h1
            className="text-cream-light text-4xl md:text-6xl font-bold mb-4 leading-tight drop-shadow flex items-center min-h-[4.5rem]"
            data-aos="fade-up"
            data-aos-delay="100"
            style={{ fontFamily: "inherit", letterSpacing: "0.01em" }}
          >
            <span>
              {displayed}
              <span className="ml-1 border-r-2 border-cream-light animate-blink" style={{height: "1.2em"}}>&nbsp;</span>
            </span>
          </h1>
          <p
            className="text-cream-light text-xl md:text-2xl mb-8 font-light drop-shadow"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {banner.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="300">
            {/* Botão principal: bronze escuro, texto off-white, menor e hover sofisticado */}
            <Button
              onClick={scrollToContact}
              className="bg-[#9B4E20] text-[#F5F3EF] font-semibold text-base px-6 py-3 rounded-md shadow-sm transition-all duration-200 hover:bg-[#7c3b13] hover:shadow-lg focus:ring-2 focus:ring-[#9B4E20] focus:ring-offset-2 outline-none"
              size="sm"
              style={{ backgroundImage: "none" }}
            >
              Agende sua Consulta
            </Button>
            {/* Botão secundário: off-white, sem borda, texto bronze escuro, hover sofisticado */}
            <Button
              onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#F5F3EF] text-[#9B4E20] font-semibold text-base px-6 py-3 rounded-md shadow-sm transition-all duration-200 hover:bg-[#e9e6df] hover:text-[#7c3b13] focus:ring-2 focus:ring-[#9B4E20] focus:ring-offset-2 outline-none"
              size="sm"
              style={{ backgroundImage: "none", border: "none" }}
            >
              Conheça meu Trabalho
            </Button>
          </div>
        </div>
      </div>
      {/* Blinking cursor animation */}
      <style>
        {`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          .animate-blink {
            animation: blink 1s steps(1) infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
