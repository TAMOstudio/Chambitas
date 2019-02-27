import { User } from "./user.model";

export interface Reviews {
  title: string;
  description: string;
  stars: number;
  userUid: string;
  userName: string;
  businessUid: string;
}
