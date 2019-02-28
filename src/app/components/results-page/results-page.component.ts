import { Component, OnInit } from "@angular/core";
import { Business } from "../shared/models/bussiness.model";

@Component({
  selector: "app-results-page",
  templateUrl: "./results-page.component.html",
  styleUrls: ["./results-page.component.scss"]
})
export class ResultsPageComponent implements OnInit {
  workTypes: string[];
  selectedWT: string[];
  selectedStars: number[];
  results: Business[];
  constructor() {}

  ngOnInit() {
    this.workTypes = [
      "Temporal",
      "Flexible",
      "Medio Tiempo",
      "Tiempo Completo"
    ];
  }

  onNgModelChange(event) {
    console.log(this.selectedStars);
  }
}
