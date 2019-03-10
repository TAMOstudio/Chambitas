import { Component, OnInit, Input } from "@angular/core";
import { ResultsService } from "../../services/results.service";
import { Business } from "../../models/bussiness.model";
import { Observable, Subscription } from "rxjs";

@Component({
  selector: "app-category-filters",
  templateUrl: "./category-filters.component.html",
  styleUrls: ["./category-filters.component.scss"]
})
export class CategoryFiltersComponent implements OnInit {
  filterTime = [];
  filterReviews = [];
  filterCategories = [];
  filterServices = [];
  servicesTags = [];
  @Input()
  results$: Observable<Business[]>;
  resultsSubscriber$ = new Subscription();
  results: Business[];
  constructor(private _resultService: ResultsService) {}

  ngOnInit() {
    this.buildResults();
  }

  filterResults(event: string[], filter: string): void {
    console.log("parent filter");
    switch (filter) {
      case "time": {
        this.filterTime = event;
        this.callServiceToFilterResults();
        break;
      }
      case "reviews": {
        this.filterReviews = event;
        this.callServiceToFilterResults();
        break;
      }
      case "category": {
        this.filterCategories = event;
        this.callServiceToFilterResults();
        break;
      }
      case "services": {
        this.filterServices = event;
        this.callServiceToFilterResults();
        break;
      }
      default: {
        this.callServiceToFilterResults();
        break;
      }
    }
  }

  buildResults() {
    this.resultsSubscriber$ = this.results$.subscribe(res => {
      this.results = res;
      this.servicesTags = this._resultService.getServices(res);
      console.log(this.servicesTags);
    });
  }

  callServiceToFilterResults() {
    this._resultService.assingResults(
      this.filterTime,
      this.filterReviews,
      this.filterCategories,
      this.filterServices,
      this.results
    );
  }

  ngOnDestroy(): void {
    if (this.resultsSubscriber$) {
      this.resultsSubscriber$.unsubscribe();
    }
  }
}
