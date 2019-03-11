import { Injectable } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";
import { Business } from "../models/bussiness.model";
import { Observable, BehaviorSubject, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ResultsService {
  private resultsSource = new BehaviorSubject<Business[]>([]);
  resultsData = this.resultsSource.asObservable();
  private results: Business[];

  constructor(private db: AngularFirestore) {}

  getAllResults(): Observable<Business[]> {
    return this.db.collection("business").valueChanges() as Observable<
      Business[]
    >;
  }

  getResultsByMainQuery(state: string) {
    return this.db
      .collection("business", ref => ref.orderBy("reviewsTotal", "desc"))
      .valueChanges() as Observable<Business[]>;
    // .where("state", "==", state)
  }

  getResultsByMainQueryS() {
    this.db
      .collection("business", ref => ref.orderBy("reviewsTotal", "desc"))
      .valueChanges()
      .subscribe(r => {
        this.setResults(r);
      });
  }

  setResults(res: any) {
    this.results = res;
  }

  getResults() {
    console.log("hey");
    console.log(this.results);
    return this.results;
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
        (!filterServices.length ||
          b.servicesOffered.some(s => filterServices.includes(s)))
      );
    });
  }

  getServices(results: Business[]): string[] {
    return Array.from(
      new Set(
        [].concat(...results.map(({ servicesOffered }) => servicesOffered))
      )
    );
  }

  getCategories(results: Business[]): string[] {
    return Array.from(
      new Set([].concat(...results.map(({ categories }) => categories)))
    );
  }
}
