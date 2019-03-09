import { Injectable } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";
import { Business } from "../models/bussiness.model";
import { Observable, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ResultsService {
  private resultsSource = new BehaviorSubject<Business[]>([]);
  // filterTime = new BehaviorSubject<string[]>([]);
  // filterReviews = new BehaviorSubject<string[]>([]);
  // filterCategories = new BehaviorSubject<string[]>([]);
  // filterServices = new BehaviorSubject<string[]>([]);
  resultsData = this.resultsSource.asObservable();

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

  assingResults(
    filterTime: string[],
    filterReviews: number[],
    filterCategories: string[],
    filterServices: string[],
    results: Business[]
  ) {
    console.log("here");
    console.log(
      this.getResultsByQueries(
        filterTime,
        filterReviews,
        filterCategories,
        filterServices,
        results
      )
    );
    this.resultsSource.next(
      this.getResultsByQueries(
        filterTime,
        filterReviews,
        filterCategories,
        filterServices,
        results
      )
    );
  }

  getResultsByQueries(
    filterTime: string[],
    filterReviews: number[],
    filterCategories: string[],
    filterServices: string[],
    results: Business[]
  ) {
    return results.filter(b => {
      return (
        (!filterTime.length || filterTime.includes(b.workType)) &&
        (!filterReviews.length || filterReviews.includes(b.reviewsTotal)) &&
        (!filterCategories.length || filterCategories.includes(b.category)) &&
        (!filterServices.length || filterServices.includes(b.service))
      );
    });
  }
}
