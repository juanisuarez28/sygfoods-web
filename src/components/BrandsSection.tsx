import { Button } from "@/components/ui/button";
import alcaLogo from "@/assets/alcafoods-logo.png";
import qualimaxLogo from "@/assets/qualimax-logo.png";

const brands = [
  { name: "AlcaFoods", logo: alcaLogo },
  { name: "Qualimax", logo: qualimaxLogo },
];

const BrandsSection = () => {
  return (
    <section id="marcas" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-14">
          Marcas que <span className="text-primary">distribuimos</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="bg-background rounded-2xl p-8 border border-border hover:shadow-xl transition-shadow flex flex-col items-center text-center gap-6"
            >
              <img
                src={brand.logo}
                alt={`Logo de ${brand.name}`}
                className="h-20 md:h-24 object-contain"
              />
              <Button
                variant="default"
                className="rounded-full px-8"
              >
                Ver catálogo
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
