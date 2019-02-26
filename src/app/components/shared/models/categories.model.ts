import { Business } from "./bussiness.model";

export interface Categories {
  icon: string;
  name: string;
  businesses: Business[];
  order: number;
}
