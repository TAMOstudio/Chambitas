import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-business-results",
  templateUrl: "./business-results.component.html",
  styleUrls: ["./business-results.component.scss"]
})
export class BusinessResultsComponent implements OnInit {
  @Input()
  results$: Observable<{}[]>;
  constructor() {}

  ngOnInit() {}

  createReviews(count: number): number[] {
    let stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(i);
    }
    return stars;
  }

  getWorkType(workType: string): string {
    if (workType === "Tiempo Completo") {
      return "full-time";
    } else if (workType === "Medio Tiempo") {
      return "part-time";
    } else if (workType === "Temporal") {
      return "temporal";
    } else {
      return "flexible";
    }
  }
}
