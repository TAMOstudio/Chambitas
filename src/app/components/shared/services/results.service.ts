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
    filterTime.map(v => {
      RESULTS = BUSINESSES.filter(b => {
        return (
          b.workType === v

          // (b.reviewsTotal === v.reviewsTotal || v.reviewsTotal === undefined)
          // (b.categories.includes(v.category) || v.category === undefined) &&
          // (b.servicesOffered.includes(v.service) || b.service === undefined)
        );
      });
    });
    console.log(RESULTS);

    RESULTS = RESULTS.filter(b => {
      filterReviews.map(v => {
        console.log(v, b.reviewsTotal);
        return (
          b.reviewsTotal === v

          // (b.reviewsTotal === v.reviewsTotal || v.reviewsTotal === undefined)
          // (b.categories.includes(v.category) || v.category === undefined) &&
          // (b.servicesOffered.includes(v.service) || b.service === undefined)
        );
      });
    });

    return RESULTS;
  }
}
