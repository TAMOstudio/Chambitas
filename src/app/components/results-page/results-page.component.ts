import { Component, OnInit } from "@angular/core";
import { ResultsService } from "../shared/services/results.service";
import { Observable, Subscription } from "rxjs";
import { Business } from "../shared/models/bussiness.model";

@Component({
  selector: "app-results-page",
  templateUrl: "./results-page.component.html",
  styleUrls: ["./results-page.component.scss"]
})
export class ResultsPageComponent implements OnInit {
  results$: Business[];
  filter$: Observable<Business[]>;
  constructor(private _resultsService: ResultsService) {}

  ngOnInit(): void {
    this.populateQueriedResults();
  }

  populateResults(): void {
    //this.results$ = this._resultsService.getAllResults();
  }

  populateQueriedResults(): void {
    this._resultsService.getResultsByMainQueryS();
    setTimeout(() => {
      this.results$ = this._resultsService.getResults();
      this._resultsService.assingResults([], [], [], [], this.results$);
      this.filter$ = this._resultsService.resultsData;
    }, 5000);
  }
}
