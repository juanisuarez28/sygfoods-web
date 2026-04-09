import { Instagram, Facebook, MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import sygLogo2 from "@/assets/SYG-logo2.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-14">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 mb-10 text-center items-start">
          {/* Logo & tagline */}
          <div className="flex flex-col items-center">
            <Link to="/">
              <img src={sygLogo2} alt="SyG Foods" className="h-24 mb-4 cursor-pointer" />
            </Link>
          </div>

          {/* Contact info */}
          <div className="flex flex-col items-center">
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Contacto</h4>
            <ul className="space-y-3 text-sm text-background/70 flex flex-col items-center">
              <li className="flex items-center gap-2">
                <Mail size={16} /> atencionalcliente@sygfoods.com.ar
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} /> 0800-333-0794
              </li>
              <li className="flex items-center gap-2 text-center max-w-md">
                <MapPin size={16} className="shrink-0" /> RP55 km 65.7, B7620, Balcarce, Buenos Aires, Argentina
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center">
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Seguinos</h4>
            <div className="flex gap-4">
              {[
                { icon: Instagram, label: "Instagram", href: "#" },
                { icon: Facebook, label: "Facebook", href: "#" },
                { icon: MessageCircle, label: "WhatsApp", href: "#" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-6 text-center text-xs text-background/50">
          © {new Date().getFullYear()} SyG Foods. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
