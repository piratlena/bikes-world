export interface Card {
  id?: number | null;
  isSoldOut: boolean;
  imgFlag?: string;
  imgProduct?: string;
  title?: string;
  price?: number;
  descr?: string;
}
