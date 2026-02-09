import { Instagram, Facebook, MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import sygLogo from "@/assets/sygfoods-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-14">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Logo & tagline */}
          <div>
            <img src={sygLogo} alt="SYGfoods" className="h-12 mb-4 brightness-0 invert" />
            <p className="text-sm text-background/70 leading-relaxed">
              Tu distribuidor de confianza de productos brasileros.
            </p>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Contacto</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-center gap-2">
                <Mail size={16} /> info@sygfoods.com
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} /> +54 11 1234-5678
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} /> Buenos Aires, Argentina
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
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
          © {new Date().getFullYear()} SYGfoods. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
