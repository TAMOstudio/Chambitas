import { Reviews } from "./reviews.model";

export interface Business {
  name: string;
  logo: string;
  imageGallery: string;
  numberOfEmployees: number;
  website: string;
  address: string;
  yearFounded: string;
  owner: string;
  phoneNumber: number;
  hours: Date[];
  servicesOffered: string[];
  businessReviews: Reviews[];
  userReviews: Reviews[];
  tags: string[];
  membershipPaid: boolean;
  membershipType: string;
}
