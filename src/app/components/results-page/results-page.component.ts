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
  results$: Observable<Business[]>;
  filter$: Observable<Business[]>;
  constructor(private _resultsService: ResultsService) {}

  ngOnInit(): void {
    this.populateQueriedResults();
  }

  populateResults(): void {
    this.results$ = this._resultsService.getAllResults();
  }

  populateQueriedResults(): void {
    this.results$ = this._resultsService.getResultsByMainQuery();
    this.results$.subscribe(res => {
      this._resultsService.assingResults([], [], [], [], res);
      this.filter$ = this._resultsService.resultsData;
    });
  }
}
