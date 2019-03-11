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
  mainResults = new BehaviorSubject<Business[]>([]);
  mainResultsData = this.mainResults.asObservable();

  constructor(private db: AngularFirestore) {}

  getAllResults(): Observable<Business[]> {
    return this.db.collection("business").valueChanges() as Observable<
      Business[]
    >;
  }

  getResultsByMainQuery(state: string, param: string) {
    let ms = [];
    return this.db
      .collection("business", ref =>
        ref.orderBy("reviewsTotal", "desc").where("state", "==", state)
      )
      .valueChanges()
      .subscribe(res => {
        ms = this.search(res, param);
        this.mainResults.next(ms);
      });
  }

  search(res: {}[], param: string) {
    return res.filter(r => {
      console.log(r["name"]);
      return (
        r["name"].toLowerCase() === param
        //  ||
        // r["servicesOffered"].some(s => s.toLowerCase() === param) ||
        // r["categories"].some(c => c.toLowerCase() === param)
      );
    });
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
    return results.filter(f => {
      return (
        (!filterTime.length || filterTime.includes(f.workType)) &&
        (!filterReviews.length || filterReviews.includes(f.reviewsTotal)) &&
        (!filterCategories.length ||
          f.categories.some(c => filterCategories.includes(c))) &&
        (!filterServices.length ||
          f.servicesOffered.some(s => filterServices.includes(s)))
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
