export interface Product {
  id: string;
  name: string;
  image?: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export const qualimaxCategories: Category[] = [
  { id: "chocolatadas", name: "Chocolatadas", slug: "chocolatadas" },
  { id: "gelatinas", name: "Gelatinas", slug: "gelatinas" },
  { id: "jugos", name: "Jugos", slug: "jugos" },
  { id: "avenas", name: "Avenas", slug: "avenas" },
  { id: "salsa-tomate", name: "Salsa de tomate", slug: "salsa-tomate" },
  { id: "linea-confitera", name: "Línea confitera", slug: "linea-confitera" },
];

export const qualimaxProducts: Product[] = [
  // Chocolatadas
  { id: "choco-1", name: "Chocolatada en polvo 200g", category: "chocolatadas" },
  { id: "choco-2", name: "Chocolatada en polvo 400g", category: "chocolatadas" },
  // Gelatinas
  { id: "gel-1", name: "Gelatina sabor frutilla", category: "gelatinas" },
  { id: "gel-2", name: "Gelatina sabor limón", category: "gelatinas" },
  // Jugos
  { id: "jugo-1", name: "Jugo en polvo naranja", category: "jugos" },
  { id: "jugo-2", name: "Jugo en polvo pomelo", category: "jugos" },
  // Avenas
  { id: "avena-1", name: "Avena instantánea 200g", category: "avenas" },
  // Salsa de tomate
  { id: "salsa-1", name: "Salsa de tomate 340g", category: "salsa-tomate" },
  // Línea confitera
  { id: "conf-1", name: "Polvo para preparar flan", category: "linea-confitera" },
  { id: "conf-2", name: "Polvo para preparar mousse", category: "linea-confitera" },
];
