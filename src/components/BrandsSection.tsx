import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import alcaLogo from "@/assets/alcafoods-logo.png";
import qualimaxLogo from "@/assets/qualimax-logo.png";
import seniorLogo from "@/assets/senior-logo.png";

const brands = [
  { name: "AlcaFoods", logo: alcaLogo, catalogUrl: "/catalogo/alcafoods" },
  { name: "Qualimax", logo: qualimaxLogo, catalogUrl: "/catalogo/qualimax" },
  { name: "Senior", logo: seniorLogo, catalogUrl: "/catalogo/senior" },
];

const BrandsSection = () => {
  return (
    <section id="marcas" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-14">
          Marcas que <span className="text-primary">distribuimos</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05 }}
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
                asChild
              >
                <Link to={brand.catalogUrl}>Ver catálogo</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
