import { Component, OnInit } from "@angular/core";
import { STATES } from "../../data/state";

@Component({
  selector: "app-main-search",
  templateUrl: "./main-search.component.html",
  styleUrls: ["./main-search.component.scss"]
})
export class MainSearchComponent implements OnInit {
  states = STATES;
  selectedState: string;
  constructor() {}

  ngOnInit() {}
}
