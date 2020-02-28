import { Component, HostBinding, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"]
})
export class MapComponent implements OnInit {
  public taskId: string;
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.getCurrentNavigation();
    this.taskId = this.router.url.split("/")[1];

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.taskId = this.router.url.split("/")[1];
      }
    });
  }
}
