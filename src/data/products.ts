import { images } from "./images";

export type Product = { id: string; slug: string; name: string; category: "fruit" | "vegetable"; image: string; featured?: boolean; description?: string };

export const products: Product[] = [
  { id:"hass-avocado", slug:"hass-avocado", name:"Hass Avocado", category:"fruit", image:images.avocado, featured:true },
  { id:"dragon-fruit", slug:"dragon-fruit", name:"Dragon Fruit", category:"fruit", image:images.dragonFruit, featured:true },
  { id:"granadilla", slug:"granadilla", name:"Granadilla", category:"fruit", image:images.granadilla, featured:true },
  { id:"blueberries", slug:"blueberries", name:"Blueberries", category:"fruit", image:images.blueberries, featured:true },
  { id:"passion-fruit", slug:"passion-fruit", name:"Passion Fruit", category:"fruit", image:images.passionFruit, featured:true },
  { id:"strawberries", slug:"strawberries", name:"Strawberries", category:"fruit", image:images.strawberries, featured:true },
  { id:"selected-fruit-01", slug:"selected-fruit-01", name:"Selected Fruit", category:"fruit", image:images.passionFruit, description:"Product details pending confirmation." },
  { id:"selected-fruit-02", slug:"selected-fruit-02", name:"Selected Fruit", category:"fruit", image:images.granadilla, description:"Product details pending confirmation." },
  { id:"aji", slug:"aji", name:"Ají", category:"vegetable", image:images.aji, featured:true },
  { id:"garlic", slug:"garlic", name:"Garlic", category:"vegetable", image:images.garlic, featured:true },
  { id:"paprika", slug:"paprika", name:"Paprika", category:"vegetable", image:images.paprika, featured:true },
  { id:"peppers", slug:"peppers", name:"Peppers", category:"vegetable", image:images.peppers, featured:true },
  { id:"selected-vegetable-01", slug:"selected-vegetable-01", name:"Selected Vegetable", category:"vegetable", image:images.aji, description:"Product details pending confirmation." },
  { id:"selected-vegetable-02", slug:"selected-vegetable-02", name:"Selected Vegetable", category:"vegetable", image:images.garlic, description:"Product details pending confirmation." },
];
