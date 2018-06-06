import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"]
})
export class NavigationComponent implements OnInit {
  show: boolean = false;

  constructor() {}

  ngOnInit() {}

  // Methods

  toggleCollapse() {
    this.show = !this.show;
  }
}
