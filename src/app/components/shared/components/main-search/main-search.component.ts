import { Component, OnInit } from "@angular/core";
import { STATES } from "../../data/state";
import { ResultsService } from "../../services/results.service";

@Component({
  selector: "app-main-search",
  templateUrl: "./main-search.component.html",
  styleUrls: ["./main-search.component.scss"]
})
export class MainSearchComponent implements OnInit {
  states = STATES;
  searchWords: string;
  searchState: string;
  constructor(private _resultsService: ResultsService) {}

  ngOnInit() {}

  onSearch() {
    this._resultsService.getResultsByMainQuery(
      this.searchState,
      this.searchWords.toLowerCase()
    );
  }
}
