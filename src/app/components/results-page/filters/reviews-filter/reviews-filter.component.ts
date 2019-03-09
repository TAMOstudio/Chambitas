import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-reviews-filter",
  templateUrl: "./reviews-filter.component.html",
  styleUrls: ["./reviews-filter.component.scss"]
})
export class ReviewsFilterComponent implements OnInit {
  @Output()
  selectedStarsEmitter = new EventEmitter<number[]>();
  selectedStars: number[];
  constructor() {}

  ngOnInit() {}

  filterWorkTypes() {
    this.selectedStarsEmitter.emit(this.selectedStars);
  }
}
