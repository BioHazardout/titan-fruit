import { images } from "./images";

export type Product = { id: string; slug: string; name: string; nameEs?: string; category: "fruit" | "vegetable"; image: string; featured?: boolean; description?: string };

export const products: Product[] = [
  { id:"palta", slug:"palta", name:"Hass Avocado", nameEs:"Palta", category:"fruit", image:images.palta, featured:true },
  { id:"pitahaya", slug:"pitahaya", name:"Dragon Fruit", nameEs:"Pitahaya", category:"fruit", image:images.pitahaya, featured:true },
  { id:"granadilla", slug:"granadilla", name:"Granadilla", nameEs:"Granadilla", category:"fruit", image:images.granadillaFruit, featured:true },
  { id:"arandanos", slug:"arandanos", name:"Blueberries", nameEs:"Arándanos", category:"fruit", image:images.arandanos, featured:true },
  { id:"maracuya", slug:"maracuya", name:"Passion Fruit", nameEs:"Maracuyá", category:"fruit", image:images.maracuya, featured:true },
  { id:"fresas", slug:"fresas", name:"Strawberries", nameEs:"Fresas", category:"fruit", image:images.fresas, featured:true },
  { id:"aguaymanto", slug:"aguaymanto", name:"Goldenberry", nameEs:"Aguaymanto", category:"fruit", image:images.aguaymanto, featured:true },
  { id:"chirimoya", slug:"chirimoya", name:"Cherimoya", nameEs:"Chirimoya", category:"fruit", image:images.chirimoya, featured:true },
  { id:"guanabana", slug:"guanabana", name:"Soursop", nameEs:"Guanábana", category:"fruit", image:images.guanabana, featured:true },
  { id:"mandarina", slug:"mandarina", name:"Mandarin", nameEs:"Mandarina", category:"fruit", image:images.mandarina, featured:true },
  { id:"pina", slug:"pina", name:"Pineapple", nameEs:"Piña", category:"fruit", image:images.pina, featured:true },
  { id:"tuna", slug:"tuna", name:"Prickly Pear", nameEs:"Tuna", category:"fruit", image:images.tuna, featured:true },
  { id:"aji-amarillo", slug:"aji-amarillo", name:"Yellow Chili Pepper", nameEs:"Ají Amarillo", category:"vegetable", image:images.ajiAmarillo, featured:true },
  { id:"aji-limo", slug:"aji-limo", name:"Limo Chili Pepper", nameEs:"Ají Limo", category:"vegetable", image:images.ajiLimo, featured:true },
  { id:"pimiento", slug:"pimiento", name:"Bell Pepper", nameEs:"Pimiento", category:"vegetable", image:images.pimiento, featured:true },
  { id:"rocoto", slug:"rocoto", name:"Rocoto Pepper", nameEs:"Rocoto", category:"vegetable", image:images.rocoto, featured:true },
  { id:"ajo", slug:"ajo", name:"Garlic", nameEs:"Ajo", category:"vegetable", image:images.ajo, featured:true },
  { id:"paprika", slug:"paprika", name:"Paprika", nameEs:"Páprika", category:"vegetable", image:images.paprikaProduct, featured:true },
  { id:"kion", slug:"kion", name:"Ginger", nameEs:"Kión", category:"vegetable", image:images.kion, featured:true },
];
