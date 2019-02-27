import {
  Component,
  OnInit,
  ViewChild,
  EventEmitter,
  Output
} from "@angular/core";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"]
})
export class SidenavComponent implements OnInit {
  @Output()
  sidebarToggle = new EventEmitter<void>();
  constructor() {}

  ngOnInit() {}
  onToggleSidenav() {
    this.sidebarToggle.emit();
  }
}
