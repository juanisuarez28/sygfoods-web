import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import sygLogo1 from "@/assets/SYG-logo1.png";
import sygLogo3 from "@/assets/SYG-logo3.png";

const navItems = [{
  label: "Inicio",
  href: "#inicio"
}, {
  label: "Quiénes somos",
  href: "#quienes-somos"
}, {
  label: "Marcas",
  href: "#marcas"
}, {
  label: "Contacto",
  href: "#contacto"
}];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-primary shadow-md" : "bg-secondary"}`}>
    <div className="container mx-auto flex items-center justify-between px-4 py-2 md:py-3">
      <a href="#inicio">
        <img src={scrolled ? sygLogo3 : sygLogo1} alt="SYGfoods" className="h-10 md:h-14 lg:h-16" />
      </a>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-8">
        {navItems.map(item => <a key={item.href} href={item.href} className={`font-medium transition-colors text-base ${scrolled ? "text-primary-foreground hover:text-accent" : "text-foreground/80 hover:text-primary"}`}>
          {item.label}
        </a>)}
      </nav>

      {/* Mobile toggle */}
      <button className={`md:hidden ${scrolled ? "text-primary-foreground" : "text-foreground"}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </div>

    {/* Mobile nav */}
    {menuOpen && <nav className="md:hidden bg-background/95 backdrop-blur border-t border-border px-4 pb-4">
      {navItems.map(item => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="block py-3 text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
        {item.label}
      </a>)}
    </nav>}
  </header>;
};
export default Header;