import './header.scss';
import { useState, useEffect } from "react";


function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState("cta");

    {/* scroll to section */}  
    const scrollToSection = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

    setMenuOpen(false);
  };

   {/* section identifie */}  
  useEffect(() => {
        const sections = document.querySelectorAll("section");

        const handleScroll = () => {
            const scrollPosition = window.scrollY + 120;

            sections.forEach((section) => {
            if (
                scrollPosition >= section.offsetTop &&
                scrollPosition < section.offsetTop + section.offsetHeight
            ) {
                setActive(section.id);
            }
            });
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
        }, []);
    
    return(
    <header className='header'>
        <div className='logo'>
            <i className="bi bi-gem"></i>
            <div className='logo_text'>
                <p>Diamond CO.</p>
                <span>PREMIUM INTERNET</span>
            </div>
        </div>
        <div className='menu_button' onClick={() => setMenuOpen(!menuOpen)}>
            <i className="bi bi-list"></i>
        </div>
       <nav className={`navegation_list ${menuOpen ? 'active' : ''}`}>
        <ul>
            <li>
                <a className={active === "cta" ? "active" : ""} href="#cta" onClick={(e) => scrollToSection(e, "cta")}>Início</a>
            </li>
            <li>
                <a className={active === "products" ? "active" : ""} href="#products" onClick={(e) => scrollToSection(e, "products")}>Produtos</a>
            </li>
            <li>
                <a className={active === "packets" ? "active" : ""} href="#packets" onClick={(e) => scrollToSection(e, "packets")}>Planos</a>
            </li>
            <li>
                <a className={active === "services" ? "active" : ""} href="#services" onClick={(e) => scrollToSection(e, "services")}>Serviços</a>
            </li>
            <li>
                <a className={active === "about" ? "active" : ""} href="#about" onClick={(e) => scrollToSection(e, "about")}>Sobre</a>
            </li>
            <li>
                <a className={active === "contact" ? "active" : ""} href="#contact" onClick={(e) => scrollToSection(e, "contact")}>Contato</a>
            </li>
        </ul>
        <button className='hire_button'>Contratar Agora</button>
       </nav>
    </header>
    )
}

export default Header;