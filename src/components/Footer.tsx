
import { CircleCheck } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bronze text-cream pt-16 pb-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <img 
                src="/img/simbolo-julia-sultanum-branco.png" 
                alt="Julia Sultanum Logo" 
                className="h-12 mr-2" 
              />
              <span className="font-serif text-xl">Júlia Sultanum</span>
            </div>
            <p className="max-w-xs mb-4 text-cream/80">
              Nutricionista especializada em saúde digestiva e nutrição estética, transformando vidas através da alimentação adequada.
            </p>
            <p className="text-cream/70 text-sm">CRN: 47502/P</p>
          </div>
          
          <div className="mb-8 md:mb-0">
            <h3 className="font-serif text-lg mb-4">Atendimentos</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CircleCheck size={16} className="mr-2" />
                <span>Nutrição Clínica</span>
              </li>
              <li className="flex items-center">
                <CircleCheck size={16} className="mr-2" />
                <span>Saúde Digestiva</span>
              </li>
              <li className="flex items-center">
                <CircleCheck size={16} className="mr-2" />
                <span>Nutrição Estética</span>
              </li>
              <li className="flex items-center">
                <CircleCheck size={16} className="mr-2" />
                <span>Reeducação Alimentar</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg mb-4">Contato</h3>
            <address className="not-italic">
              <p className="mb-2">RioMar Trade Center</p>
              <p className="mb-2">Torre 5, Sala 904</p>
              <p className="mb-2">Recife - CEP: 51110-160</p>
              <p className="mb-2">(81) 99626-3294</p>
              <p>jusultanum@gmail.com</p>
            </address>
          </div>
        </div>
        
        <hr className="border-cream/20 mb-8" />
        
        <div className="text-center text-cream/60 text-sm">
          <p>&copy; {currentYear} Júlia Sultanum Nutricionista. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
