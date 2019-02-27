import { Component, OnInit } from "@angular/core";
import { CategoryService } from "../shared/services/category.service";

@Component({
  selector: "app-categories-page",
  templateUrl: "./categories-page.component.html",
  styleUrls: ["./categories-page.component.scss"]
})
export class CategoriesPageComponent implements OnInit {
  categories$: {}[];
  constructor(private _categoryServices: CategoryService) {}

  ngOnInit() {
    this.populateCategories();
  }

  populateCategories() {
    this._categoryServices.getAllCategories().subscribe(cs => {
      const CAT = cs.find(c => c["name"] === "nuevacategoria");
      this.categories$ = cs.filter(t => {
        return t != CAT;
      });
      this.categories$.push(CAT);
    });
  }
}
