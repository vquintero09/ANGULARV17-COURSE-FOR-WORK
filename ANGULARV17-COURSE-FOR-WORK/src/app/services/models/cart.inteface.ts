export interface IProduct {
  id: number;
  title: string;
  price: number;
  image: string
}

export interface IProductDetail {
  product: IProduct;
  count: number;
  total: number;
}