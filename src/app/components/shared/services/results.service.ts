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
    filterTime: string[],
    filterReviews: number[],
    filterCategories: string[],
    filterServices: string[],
    results: Business[]
  ) {
    const SEARCH_ARRAY = [
      ...filterTime,
      ...filterReviews,
      ...filterCategories,
      ...filterServices
    ];
    const BUSINESSES = results;

    // return BUSINESSES.filter(b => {
    //   return filterTime.includes(b.workType);
    // })
    //   .filter(b => {
    //     return filterReviews.includes(b.reviewsTotal);
    //   })
    //   .filter(b => {
    //     return filterCategories.includes(b.category);
    //   })
    //   .filter(b => {
    //     return filterServices.includes(b.service);
    //   });

    return BUSINESSES.filter(b => {
      return (
        filterTime.includes(b.workType) &&
        filterReviews.includes(b.reviewsTotal) &&
        filterCategories.includes(b.category) &&
        filterServices.includes(b.service)
      );
    });
  }
}
