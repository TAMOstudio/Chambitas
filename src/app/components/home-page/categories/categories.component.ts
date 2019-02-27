import { Component, OnInit } from "@angular/core";
import { Category } from "../../shared/models/category.model";
import { CategoryService } from "../../shared/services/category.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"]
})
export class CategoriesComponent implements OnInit {
  categories: {}[];
  constructor(private _categoryServices: CategoryService) {}

  ngOnInit() {
    this.populateCategories();
  }

  populateCategories() {
    this._categoryServices.getCategoriesHomePage().subscribe(c => {
      this.categories = c;
    });
  }
}
