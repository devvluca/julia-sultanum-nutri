import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Check } from 'lucide-react';

const services = [
	{
		title: "Nutrição Clínica 🩺",
		description: "Tratamento nutricional personalizado para diversas condições de saúde",
		features: [
			"Avaliação nutricional completa",
			"Plano alimentar personalizado",
			"Acompanhamento mensal",
			"Ajustes conforme necessidade"
		]
	},
	{
		title: "Saúde Digestiva 🍎",
		description: "Especialização em tratamentos para problemas do sistema digestivo",
		features: [
			"Diagnóstico nutricional específico",
			"Plano alimentar terapêutico",
			"Suplementação quando necessário",
			"Acompanhamento quinzenal"
		]
	},
	{
		title: "Nutrição Estética 💪",
		description: "Estratégias nutricionais para melhorar a composição corporal",
		features: [
			"Avaliação antropométrica detalhada",
			"Plano alimentar estratégico",
			"Suplementação específica",
			"Monitoramento de resultados"
		]
	},
	{
		title: "Nutrição para TEA 🧩",
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
		// No mobile, scroll para o formulário de agendamento; no desktop, scroll para a seção contato
		const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
		if (isMobile) {
			const form = document.querySelector('#contato form');
			if (form) {
				form.scrollIntoView({ behavior: 'smooth', block: 'center' });
				return;
			}
		}
		const contactSection = document.getElementById('contato');
		if (contactSection) {
			contactSection.scrollIntoView({ behavior: 'smooth' });
		}
	};

	// Desktop: hover state for scale
	const [hovered, setHovered] = useState<number | null>(null);

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

				{/* Grid para todos os tamanhos */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{services.map((service, index) => (
						<div
							key={index}
							className="animate-slide-up"
							style={{
								animationDelay: `${index * 0.2}s`,
								transform: hovered === index ? "scale(1.06)" : "scale(1)",
								transition: "transform 0.3s"
							}}
							onMouseEnter={() => setHovered(index)}
							onMouseLeave={() => setHovered(null)}
						>
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
