import { Component, OnInit } from "@angular/core";
import { ResultsService } from "../shared/services/results.service";
import { Observable } from "rxjs";
import { Business } from "../shared/models/bussiness.model";
import { take, finalize } from "rxjs/operators";

@Component({
  selector: "app-results-page",
  templateUrl: "./results-page.component.html",
  styleUrls: ["./results-page.component.scss"]
})
export class ResultsPageComponent implements OnInit {
  results$: Observable<Business[]>;
  filter$: Observable<Business[]>;
  constructor(private _resultsService: ResultsService) {}

  ngOnInit() {
    //this.populateResults();
    this.populateQueriedResults();
  }

  populateResults() {
    this.results$ = this._resultsService.getAllResults();
  }

  populateQueriedResults() {
    this.results$ = this._resultsService.getResultsByMainQuery();
    this.filter$ = this.results$;
    this.filter$.subscribe(r => {
      console.log(
        this._resultsService.getResultsByQueries(
          ["Tiempo Completo", "Flexible"],
          [5, 4, 3],
          ["legal"],
          ["nada"],
          r
        )
      );
    });
  }
}
