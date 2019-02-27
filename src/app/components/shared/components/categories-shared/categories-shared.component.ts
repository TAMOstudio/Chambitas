import { Component, OnInit, Input } from "@angular/core";
import { Category } from "../../models/category.model";

@Component({
  selector: "app-categories-shared",
  templateUrl: "./categories-shared.component.html",
  styleUrls: ["./categories-shared.component.scss"]
})
export class CategoriesSharedComponent implements OnInit {
  @Input()
  categories: Category[];
  constructor() {}

  ngOnInit() {}
}
