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

  constructor() {}

  ngOnInit() {}

  filterTags() {
    this.selectedTagsEmitter.emit(this.selectedTags);
  }
}
