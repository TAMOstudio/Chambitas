import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  toggleSidenavBar = false;
  @Output()
  toggle = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit() {}

  toggleSidebar() {
    this.toggle.emit(null);
  }
}
