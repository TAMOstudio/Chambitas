import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-work-type-filter",
  templateUrl: "./work-type-filter.component.html",
  styleUrls: ["./work-type-filter.component.scss"]
})
export class WorkTypeFilterComponent implements OnInit {
  workTypes: string[];
  selectedWT: string[];
  constructor() {}

  ngOnInit() {
    this.workTypes = [
      "Temporal",
      "Flexible",
      "Medio Tiempo",
      "Tiempo Completo"
    ];
  }
}
