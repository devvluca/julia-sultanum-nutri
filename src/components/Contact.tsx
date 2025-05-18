import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from './ui/use-toast';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [customMsg, setCustomMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      toast({
        title: "Por favor, preencha seu nome.",
        variant: "destructive",
      });
      return;
    }
    setLoading(true);

    const phone = "5581996263294";
    let msg = `Olá Júlia! Meu nome é ${name}, e gostaria de agendar uma consulta!`;
    if (customMsg.trim()) {
      msg += `\n\n${customMsg}`;
    }
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;

    window.open(url, "_blank");
    setLoading(false);
    setName('');
    setCustomMsg('');
  };

  return (
    <section id="contato" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Entre em Contato
          </h2>
          <div className="w-20 h-1 bg-bronze mx-auto mb-6"></div>
          <p className="text-charcoal text-lg">
            Agende sua consulta e inicie sua jornada para uma vida mais saudável
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 animate-slide-up">
            <div className="bg-cream rounded-lg p-8 h-full">
              <h3 className="text-2xl font-serif text-bronze mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone size={20} className="text-bronze mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Telefone</h4>
                    <p className="text-charcoal">(81) 99626-3294</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail size={20} className="text-bronze mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-charcoal">jusultanum@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin size={20} className="text-bronze mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Endereço</h4>
                    <p className="text-charcoal">RioMar Trade Center, Torre 5, Sala 904<br />Recife - CEP: 51110-160</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-medium mb-3">Siga nas Redes Sociais</h4>
                <div className="flex space-x-4">
                  <a href="https://instagram.com/juliasultanumnutri" target="_blank" rel="noopener noreferrer" className="text-bronze hover:text-bronze-light transition-colors">
                    @juliasultanumnutri
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 animate-slide-up h-full" style={{ animationDelay: '0.2s' }}>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-lg p-8 shadow-md border border-gray-100 h-full flex flex-col"
            >
              <h3 className="text-2xl font-serif text-bronze mb-6">Agende sua Consulta</h3>
              
              <div className="space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">
                    Nome Completo
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="customMsg" className="block mb-2 text-sm font-medium">
                    Mensagem (Opcional)
                  </label>
                  <Textarea
                    id="customMsg"
                    name="customMsg"
                    value={customMsg}
                    onChange={e => setCustomMsg(e.target.value)}
                    rows={4}
                    placeholder="Digite uma mensagem personalizada"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-bronze hover:bg-bronze-light mt-4"
                  disabled={loading}
                >
                  {loading ? 'Redirecionando...' : 'Enviar Mensagem pelo WhatsApp'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
