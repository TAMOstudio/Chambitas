import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-tags-filter",
  templateUrl: "./tags-filter.component.html",
  styleUrls: ["./tags-filter.component.scss"]
})
export class TagsFilterComponent implements OnInit {
  @Input()
  servicesTags: string[];
  @Output()
  selectedTagsEmitter = new EventEmitter<string[]>();
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

  filterTags() {
    this.selectedTagsEmitter.emit(this.selectedTags);
  }
}
