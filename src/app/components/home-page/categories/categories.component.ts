import { Component, OnInit } from "@angular/core";
import { Category } from "../../shared/models/category.model";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"]
})
export class CategoriesComponent implements OnInit {
  categories: Category[];
  constructor() {
    this.categories = [
      {
        categoryUid: "",
        icon: "fas fa-hammer",
        name: "carpinteria",
        businesses: [],
        order: 1
      },
      {
        categoryUid: "",
        icon: "fas fa-tools",
        name: "carpinteria",
        businesses: [],
        order: 1
      },
      {
        categoryUid: "",
        icon: "fas fa-pen-fancy",
        name: "carpinteria",
        businesses: [],
        order: 1
      },
      {
        categoryUid: "",
        icon: "fas fa-user-md",
        name: "carpinteria",
        businesses: [],
        order: 1
      },
      {
        categoryUid: "",
        icon: "fas fa-balance-scale",
        name: "carpinteria",
        businesses: [],
        order: 1
      },
      {
        categoryUid: "",
        icon: "fas fa-landmark",
        name: "carpinteria",
        businesses: [],
        order: 1
      },
      {
        categoryUid: "",
        icon: "fas fa-plane-departure",
        name: "carpinteria",
        businesses: [],
        order: 1
      },
      {
        categoryUid: "",
        icon: "fas fa-headphones",
        name: "carpinteria",
        businesses: [],
        order: 1
      }
    ];
  }

  ngOnInit() {}
}
