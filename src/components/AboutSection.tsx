import { ShieldCheck, Truck, Handshake } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Calidad garantizada",
    description: "Trabajamos con marcas líderes del mercado brasilero para asegurar los más altos estándares.",
  },
  {
    icon: Truck,
    title: "Distribución eficiente",
    description: "Red logística ágil que asegura la disponibilidad de productos en tiempo y forma.",
  },
  {
    icon: Handshake,
    title: "Confianza y compromiso",
    description: "Construimos relaciones a largo plazo con nuestros clientes basadas en la transparencia.",
  },
];

const AboutSection = () => {
  return (
    <section id="quienes-somos" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Quiénes <span className="text-primary">somos</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            SYGfoods es una empresa dedicada a la distribución de productos alimenticios de origen brasilero.
            Nos especializamos en llevar las mejores marcas de Brasil directamente a tu negocio,
            asegurando calidad, frescura y un servicio de excelencia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v) => (
            <div
              key={v.title}
              className="text-center p-8 rounded-2xl bg-secondary/50 border border-border hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-5">
                <v.icon size={28} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
