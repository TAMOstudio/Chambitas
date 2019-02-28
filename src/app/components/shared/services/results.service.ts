import { Injectable } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";

@Injectable({
  providedIn: "root"
})
export class ResultsService {
  constructor(private db: AngularFirestore) {}

  getAllResults() {
    return this.db.collection("business").valueChanges();
  }

  getResultsByQuery() {
    return this.db
      .collection("business", ref => ref.orderBy("reviewsTotal", "desc"))
      .valueChanges();
  }
}
