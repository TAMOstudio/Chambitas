import { Injectable } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";
import { Business } from "../models/bussiness.model";
import { Observable } from "rxjs";
import { balancePreviousStylesIntoKeyframes } from "@angular/animations/browser/src/util";

@Injectable({
  providedIn: "root"
})
export class ResultsService {
  constructor(private db: AngularFirestore) {}

  getAllResults(): Observable<Business[]> {
    return this.db.collection("business").valueChanges() as Observable<
      Business[]
    >;
  }

  getResultsByMainQuery() {
    return this.db
      .collection("business", ref => ref.orderBy("reviewsTotal", "desc"))
      .valueChanges() as Observable<Business[]>;
  }

  getResultsByQueries(
    filterTime: any[],
    filterReviews: any[],
    filtersCategories: any[],
    filterServices: any[],
    results: any[]
  ) {
    const SEARCH_ARRAY = [
      ...filterTime,
      ...filterReviews,
      ...filtersCategories,
      ...filterServices
    ];
    const BUSINESSES = results;

    let RESULTS = [];
    //console.log(SEARCH_ARRAY);

    return BUSINESSES.filter(b => {
      return SEARCH_ARRAY.map(v => {
        if (
          b.workType === v.workType ||
          v.workType === undefined ||
          (b.reviewsTotal === v.reviewsTotal || v.reviewsTotal === undefined)
          // (b.categories.includes(v.category) || v.category === undefined) &&
          // (b.servicesOffered.includes(v.service) || b.service === undefined)
        ) {
          b.filtered = true;
          return b;
        } else {
          b.filtered = false;
          return b;
        }
      });
    }).filter(b => {
      return b.filtered === true;
    });

    // return BUSINESSES
  }
}
