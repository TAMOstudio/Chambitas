import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-tags-filter",
  templateUrl: "./tags-filter.component.html",
  styleUrls: ["./tags-filter.component.scss"]
})
export class TagsFilterComponent implements OnInit {
  @Input()
  servicesTags: string[];
  selectedTags: string[];
  mappedTags: any[];
  constructor() {}

  ngOnInit() {
    this.mapTags();
  }

  mapTags() {
    this.mappedTags = this.servicesTags.map(t => {
      return { name: t };
    });
  }
}
