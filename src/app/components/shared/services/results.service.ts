import { Injectable } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";
import { Business } from "../models/bussiness.model";
import { Observable, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ResultsService {
  private resultsSource = new BehaviorSubject<Business[]>([]);
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
  ): Business[] {
    return results.filter(b => {
      return (
        (!filterTime.length || filterTime.includes(b.workType)) &&
        (!filterReviews.length || filterReviews.includes(b.reviewsTotal)) &&
        (!filterCategories.length || filterCategories.includes(b.category)) &&
        (!filterServices.length || filterServices.includes(b.service))
      );
    });
  }

  getServices(results: Business[]): string[] {
    return [].concat(...results.map(({ servicesOffered }) => servicesOffered));
  }
}
