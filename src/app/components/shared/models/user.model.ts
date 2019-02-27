import { Reviews } from "./reviews.model";
import { Business } from "./bussiness.model";

export interface User {
  uid: string;
  email: string;
  image: string;
  businessReviews: Reviews[];
  userReviews: Reviews[];
  contacts: Business[];
  bussinessUid: string;
}
