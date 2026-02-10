import { ShieldCheck, Truck, Handshake } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Marcas con identidad propia",
    description: "Creamos y gestionamos marcas con posicionamiento definido, cuidando cada etapa desde el origen hasta la comercialización.",
  },
  {
    icon: Truck,
    title: "Gestión integral de la cadena",
    description: "Controlamos selección de origen, calidad, cumplimiento normativo, logística y comercialización con excelencia operativa.",
  },
  {
    icon: Handshake,
    title: "Valor sostenible",
    description: "Generamos valor para clientes, socios y consumidores a través de una gestión profesional y comprometida con el mercado.",
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
            Somos SyG Foods, una compañía que se especializa en desarrollar y gestionar marcas de alimentos para el mercado argentino, transformando oportunidades globales en productos confiables, accesibles y alineados con el consumo local.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mt-4">
            Creamos marcas propias con identidad y posicionamiento definidos, cuidando cada etapa del proceso: selección de origen, calidad, cumplimiento normativo, logística y comercialización. Cada marca se comunica de forma independiente, manteniendo un mismo estándar de excelencia operativa y compromiso con el mercado.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mt-4">
            Nuestro propósito es generar valor sostenible para clientes, socios y consumidores, a través de una gestión profesional de toda la cadena alimentaria.
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
