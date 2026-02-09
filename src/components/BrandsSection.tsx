import alcaLogo from "@/assets/alcafoods-logo.png";
import qualimaxLogo from "@/assets/qualimax-logo.png";

const brands = [
  {
    name: "AlcaFoods",
    logo: alcaLogo,
    description:
      "Marca brasilera reconocida por su amplio catálogo de productos alimenticios de alta calidad para el mercado profesional y minorista.",
  },
  {
    name: "Qualimax",
    logo: qualimaxLogo,
    description:
      "Líder en la producción de alimentos y bebidas en polvo, ofreciendo soluciones innovadoras y sabores auténticos de Brasil.",
  },
];

const BrandsSection = () => {
  return (
    <section id="marcas" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Marcas que <span className="text-primary">distribuimos</span>
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
          Representamos las mejores marcas brasileras, llevando sus productos de excelencia al mercado.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="bg-background rounded-2xl p-8 border border-border hover:shadow-xl transition-shadow flex flex-col items-center text-center"
            >
              <img
                src={brand.logo}
                alt={`Logo de ${brand.name}`}
                className="h-20 md:h-24 object-contain mb-6"
              />
              <h3 className="text-xl font-semibold text-foreground mb-3">{brand.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{brand.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
