export type Product = {
  id: number;
  name: string;
  shortDescription: string;
  image: string;
  price: number;
  oldPrice?: number;
  tags: string[];
};
