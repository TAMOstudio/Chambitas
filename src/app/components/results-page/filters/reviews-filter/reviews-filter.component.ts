import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-reviews-filter",
  templateUrl: "./reviews-filter.component.html",
  styleUrls: ["./reviews-filter.component.scss"]
})
export class ReviewsFilterComponent implements OnInit {
  selectedStars: number[];
  constructor() {}

  ngOnInit() {}
}
