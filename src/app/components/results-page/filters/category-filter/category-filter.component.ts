import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";

@Component({
  selector: "app-category-filter",
  templateUrl: "./category-filter.component.html",
  styleUrls: ["./category-filter.component.scss"]
})
export class CategoryFilterComponent implements OnInit {
  @Input()
  categoryTags: any[];
  @Output()
  selectedCategoriesEmitter = new EventEmitter<string[]>();
  selectedCategories: string[];
  constructor() {}

  ngOnInit() {
    console.log(this.categoryTags[0].name);
  }

  filterTags() {
    this.selectedCategoriesEmitter.emit(this.selectedCategories);
  }
}
