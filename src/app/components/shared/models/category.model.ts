import { Business } from "./bussiness.model";

export interface Category {
  categoryUid: string;
  icon: string;
  name: string;
  businesses: Business[];
  order: number;
  subCategories: Category[];
}
