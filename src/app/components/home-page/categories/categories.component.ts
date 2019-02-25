import { Component, OnInit } from "@angular/core";
import { Categories } from "../../shared/models/categories.model";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"]
})
export class CategoriesComponent implements OnInit {
  categories: Categories[];
  constructor() {
    this.categories = [
      {
        icon: "fas fa-hammer",
        name: "carpinteria",
        businesses: [],
        order: 1
      },
      {
        icon: "fas fa-tools",
        name: "carpinteria",
        businesses: [],
        order: 1
      },
      {
        icon: "fas fa-pen-fancy",
        name: "carpinteria",
        businesses: [],
        order: 1
      },
      {
        icon: "fas fa-user-md",
        name: "carpinteria",
        businesses: [],
        order: 1
      },
      {
        icon: "fas fa-balance-scale",
        name: "carpinteria",
        businesses: [],
        order: 1
      },
      {
        icon: "fas fa-landmark",
        name: "carpinteria",
        businesses: [],
        order: 1
      },
      {
        icon: "fas fa-plane-departure",
        name: "carpinteria",
        businesses: [],
        order: 1
      },
      {
        icon: "fas fa-headphones",
        name: "carpinteria",
        businesses: [],
        order: 1
      }
    ];
  }

  ngOnInit() {}
}
