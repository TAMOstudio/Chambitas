import { Component, OnInit } from "@angular/core";
import { Worktype } from "src/app/components/shared/models/worktype.model";

@Component({
  selector: "app-work-type-filter",
  templateUrl: "./work-type-filter.component.html",
  styleUrls: ["./work-type-filter.component.scss"]
})
export class WorkTypeFilterComponent implements OnInit {
  workTypes: Worktype[];
  selectedWT: string[];
  constructor() {}

  ngOnInit() {
    this.workTypes = [
      {
        name: "Temporal",
        className: "temporary"
      },
      {
        name: "Flexible",
        className: "flexible"
      },
      {
        name: "Medio Tiempo",
        className: "part-time"
      },
      {
        name: "Tiempo Completo",
        className: "full-time"
      }
    ];
  }
}
