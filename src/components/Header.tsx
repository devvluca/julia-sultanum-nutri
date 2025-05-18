import { useState, useEffect } from "react";
import { Button } from "./ui/button";

const NAV_ITEMS = [
	{ id: "sobre", label: "Sobre" },
	{ id: "serviços", label: "Serviços" },
	{ id: "depoimentos", label: "Depoimentos" },
	{ id: "contato", label: "Contato" },
];

const Header = () => {
	const [scrolled, setScrolled] = useState(false);
	const [hovered, setHovered] = useState(false);
	const [clickedLogo, setClickedLogo] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 50);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const showBar = scrolled || hovered;

	const handleLogoClick = () => {
		setClickedLogo(true);
		window.scrollTo({ top: 0, behavior: "smooth" });
		setTimeout(() => setClickedLogo(false), 800);
	};

	const scrollToSection = (id: string) => {
		const el = document.getElementById(id);
		if (el) el.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4
        ${showBar ? "bg-white/90 shadow-md" : "bg-transparent"}
      `}
			style={{
				backdropFilter: showBar ? "blur(4px)" : undefined,
				WebkitBackdropFilter: showBar ? "blur(4px)" : undefined,
			}}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<div className="container-custom flex items-center justify-between">
				{/* Logo e nome */}
				<button
					className="flex items-center group outline-none"
					onClick={handleLogoClick}
					style={{
						background: "none",
						border: "none",
						padding: 0,
						cursor: "pointer",
					}}
					tabIndex={0}
				>
					<img
						src={
							clickedLogo || showBar
								? "/img/simbolo-julia-sultanum.png"
								: "/img/simbolo-julia-sultanum-branco.png"
						}
						alt="Júlia Sultanum Logo"
						className="h-12 transition-all duration-200"
					/>
					<span
						className={`ml-2 font-serif text-lg font-semibold transition-colors duration-200 ${
							clickedLogo || showBar
								? "text-[#9B4E20]"
								: "text-cream-light group-hover:text-[#9B4E20]"
						}`}
					>
						Júlia Sultanum
					</span>
				</button>

				{/* Navegação */}
				<nav className="hidden md:flex items-center space-x-6">
					{NAV_ITEMS.map((item) => (
						<button
							key={item.id}
							onClick={() => scrollToSection(item.id)}
							className={`
                bg-transparent border-none shadow-none px-0 py-0
                font-semibold text-base transition-colors duration-200
                outline-none
                ${showBar ? "text-[#9B4E20]" : "text-white"}
                hover:text-[#9B4E20] focus:text-[#9B4E20]
              `}
							style={{ background: "none" }}
						>
							{item.label}
						</button>
					))}
				</nav>

				{/* Botão de ação como texto flutuante */}
				<button
					onClick={() => scrollToSection("contato")}
					className={`
            bg-transparent border-none shadow-none px-0 py-0
            font-semibold text-base transition-colors duration-200
            outline-none
            ${showBar ? "text-[#9B4E20]" : "text-white"}
            hover:text-[#9B4E20] focus:text-[#9B4E20]
          `}
					style={{ background: "none" }}
				>
					Agendar Consulta
				</button>
			</div>
		</header>
	);
};

export default Header;
