
import { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Isadora Helena Franco",
    role: "Paciente há 1 ano",
    content: "Com a Julia, consegui resolver meus problemas digestivos que me incomodavam há anos. Seu plano alimentar foi completamente adaptado às minhas necessidades e não senti dificuldade em segui-lo.",
    rating: 5
  },
  {
    id: 2,
    name: "Luca Aguiar",
    role: "Paciente há 11 meses",
    content: "Júlia é simplesmente a melhor nutricionista do mundo. E além de tudo isso, é a mais linda de todas ❤️",
    rating: 5
  },
  {
    id: 3,
    name: "Vinicius Andrade",
    role: "Paciente há 2 anos",
    content: "O acompanhamento nutricional da Julia foi essencial para controlar minha condição de saúde. Ela realmente se importa com cada paciente e está sempre disponível para esclarecer dúvidas.",
    rating: 5
  },
  {
    id: 4,
    name: "Mini Piri",
    role: "Paciente há 3 meses",
    content: "Excelente profissional! Com seu plano alimentar personalizado, consegui melhorar minha performance esportiva e recuperação após os treinos. Recomendo a todos.",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextTestimonial();
    }

    if (touchStart - touchEnd < -50) {
      prevTestimonial();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="depoimentos" className="section-padding bg-cream-light">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Depoimentos
          </h2>
          <div className="w-20 h-1 bg-bronze mx-auto mb-6"></div>
          <p className="text-charcoal text-lg">
            Veja o que nossos pacientes têm a dizer sobre os resultados obtidos
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div 
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="border-bronze/10 shadow-lg">
                    <CardContent className="pt-6 pb-8">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={18} fill="#9b4e20" color="#9b4e20" />
                        ))}
                      </div>
                      <p className="text-lg mb-6 italic text-charcoal">"{testimonial.content}"</p>
                      <div>
                        <h4 className="font-medium text-bronze">{testimonial.name}</h4>
                        <p className="text-sm text-charcoal/70">{testimonial.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`w-3 h-3 mx-1 rounded-full transition-colors ${
                  currentIndex === i ? 'bg-bronze' : 'bg-bronze/30'
                }`}
                onClick={() => setCurrentIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
