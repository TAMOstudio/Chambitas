import { Component, OnInit } from "@angular/core";
import { ResultsService } from "../shared/services/results.service";
import { Observable } from "rxjs";
import { Business } from "../shared/models/bussiness.model";

@Component({
  selector: "app-results-page",
  templateUrl: "./results-page.component.html",
  styleUrls: ["./results-page.component.scss"]
})
export class ResultsPageComponent implements OnInit {
  results$: Observable<{}[]>;
  constructor(private _resultsService: ResultsService) {}

  ngOnInit() {
    //this.populateResults();
    this.populateQueriedResults();
  }

  populateResults() {
    this.results$ = this._resultsService.getAllResults();
  }

  populateQueriedResults() {
    this.results$ = this._resultsService.getResultsByQuery();
  }
}
