import { Reviews } from "./reviews.model";
import { Category } from "./category.model";

export interface Business {
  businessUid: string;
  name: string;
  logo: string;
  imageGallery: string[];
  numberOfEmployees: number;
  website: string;
  address: string;
  zipCode: number;
  state: string;
  city: string;
  country: string;
  latitude: number;
  longitute: number;
  yearFounded: string;
  ownerUid: string;
  phoneNumber: number;
  hours: Date[];
  servicesOffered: string[];
  businessReviews: Reviews[];
  userReviews: Reviews[];
  tags: string[];
  membershipPaid: boolean;
  membershipType: string;
  workType: string;
  categories: string[];
  categoriesInfo: Category[];
  reviewsTotal: number;
}
