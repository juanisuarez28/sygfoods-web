export interface ProductDetail {
  peso_neto: string;
  validez: string;
  rendimiento?: string;
  cantidad_por_sobre?: string;
  cantidad_por_caja?: string;
  presentacion?: string;
  sabores?: string[];
  caracteristicas?: string[];
}

export interface Product {
  id: string;
  titulo: string;
  descripcion: string;
  detalles: ProductDetail;
  category: string;
  image?: string;
}

export interface Category {
  id: string;
  name: string;
}

export const qualimaxCategories: Category[] = [
  { id: "chocolatadas", name: "Chocolatadas" },
  { id: "gelatinas", name: "Gelatinas" },
  { id: "jugos", name: "Jugos" },
  { id: "avenas", name: "Avenas" },
  { id: "salsa-tomate", name: "Salsa de tomate" },
  { id: "linea-confitera", name: "Línea confitera" },
];

export const qualimaxProducts: Product[] = [
  // Chocolatadas
  {
    id: "choco-300",
    titulo: "Chocolatada en polvo Qualimax",
    descripcion: "La chocolatada en polvo Qualimax es instantánea y ya viene endulzada. Alimento en polvo a base de cacao.",
    detalles: {
      peso_neto: "300 g",
      validez: "12 meses",
      cantidad_por_sobre: "24 x 300 g",
      caracteristicas: ["Sin gluten", "Instantánea", "Endulzada"],
    },
    category: "chocolatadas",
  },
  {
    id: "choco-1kg",
    titulo: "Chocolatada en polvo Qualimax",
    descripcion: "La chocolatada en polvo Qualimax es instantánea y ya viene endulzada. Alimento en polvo a base de cacao.",
    detalles: {
      peso_neto: "1 kg",
      validez: "12 meses",
      cantidad_por_sobre: "10 x 1 kg",
      caracteristicas: ["Sin gluten", "Instantánea", "Endulzada"],
    },
    category: "chocolatadas",
  },
  // Gelatinas
  {
    id: "gel-sin-sabor",
    titulo: "Gelatina sin Sabor",
    descripcion: "La Gelatina sin sabor Qualimax posee excelente concentración de bloom y tiene un alto rendimiento.",
    detalles: {
      peso_neto: "24 g",
      rendimiento: "1 sobre = 500ml",
      validez: "18 meses",
      cantidad_por_sobre: "30 x 24 g",
    },
    category: "gelatinas",
  },
  {
    id: "gel-saborizada",
    titulo: "Gelatina saborizada",
    descripcion: "Gelatinas para completar el mix y aumentar las ventas. Rinde 4 porciones de 120 g.",
    detalles: {
      peso_neto: "20 g",
      sabores: ["Frutilla", "Frambuesa", "Ananá", "Cereza"],
      validez: "18 meses",
      cantidad_por_caja: "6 x 15 x 20 g",
      caracteristicas: ["Sin gluten", "Dietética"],
    },
    category: "gelatinas",
  },
  // Jugos
  {
    id: "jugo-1l",
    titulo: "Jugos en polvo 15g",
    descripcion: "Los sobres Qualimax 15g rinden mucho más. Tienen un sabor intenso, acidez equilibrada y son ricos en vitamina C.",
    detalles: {
      peso_neto: "15 g",
      rendimiento: "1 Litro",
      sabores: ["Ananá", "Naranja", "Limón", "Frutilla", "Maracuyá"],
      validez: "18 meses",
      cantidad_por_sobre: "8 x 15 x 15 g",
    },
    category: "jugos",
  },
  {
    id: "jugo-2l",
    titulo: "Jugos en polvo 15g",
    descripcion: "Polvo para preparar bebida analcohólica artificial dietética. Ya viene endulzado y fortificado con vitamina C.",
    detalles: {
      peso_neto: "15 g",
      rendimiento: "2 Litros",
      sabores: ["Naranja", "Ananá", "Limón"],
      validez: "18 meses",
      cantidad_por_sobre: "8 x 15 x 15 g",
      caracteristicas: ["Sin gluten", "Dietético", "Endulzado"],
    },
    category: "jugos",
  },
  // Avenas
  {
    id: "avena-170",
    titulo: "Avena arrollada tradicional",
    descripcion: "Considerado el cereal más completo de la naturaleza. Ofrece beneficios para la salud con un precio competitivo. Fuente de fibra.",
    detalles: {
      peso_neto: "170 g",
      validez: "12 meses",
      presentacion: "Caja 12 x 170 g",
    },
    category: "avenas",
  },
  // Salsa de tomate
  {
    id: "salsa-1kg",
    titulo: "Salsa de Tomate deshidratada",
    descripcion: "Elaborada con 126 tomates. Preparación rápida en solo 1 minuto.",
    detalles: {
      peso_neto: "1 kg",
      rendimiento: "9 kg (equivalente a 3 latas de 3 kg de salsa lista)",
      validez: "12 meses",
      cantidad_por_sobre: "6 x 1 kg",
      caracteristicas: ["Sin gluten"],
    },
    category: "salsa-tomate",
  },
  // Línea confitera
  {
    id: "crema-pastelera",
    titulo: "Crema Pastelera",
    descripcion: "Garantiza la uniformidad en la calidad del producto. Es resistente al hornear, manteniendo la textura.",
    detalles: {
      peso_neto: "1 kg",
      validez: "8 meses",
      cantidad_por_sobre: "10 x 1 kg",
      caracteristicas: ["Sin gluten", "Uso profesional"],
    },
    category: "linea-confitera",
  },
];
