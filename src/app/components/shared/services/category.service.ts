import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "angularfire2/firestore";
import { Category } from "../models/category.model";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class CategoryService {
  categories: Category[];
  constructor(private db: AngularFirestore) {}

  getCategoriesHomePage() {
    return this.db
      .collection("categories", ref => ref.limit(8).orderBy("name"))
      .valueChanges();
  }

  getAllCategories() {
    return this.db
      .collection("categories", ref => ref.orderBy("name"))
      .valueChanges();
  }
}
