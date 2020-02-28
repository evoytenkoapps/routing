import { Component, HostBinding, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { ResizeService } from "../../servicies/resize";

@Component({
  selector: "app-tasks-list",
  templateUrl: "./tasks-list.component.html",
  styleUrls: ["./tasks-list.component.css"]
})
export class TasksListComponent implements OnInit {
  @HostBinding("class") classes = "base";
  public isHide: boolean;
  public tasks: number[] = [1, 2, 3, 4, 5];

  constructor(private router: Router, private resizeService: ResizeService) {}

  ngOnInit() {
    this.isHide =
      this.resizeService.isMobile && this.router.url.split("/")[1] !== "";

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isHide =
          this.resizeService.isMobile && this.router.url.split("/")[1] !== "";
      }
    });
  }

  public onRoute(data: number) {
    if (this.resizeService.isMobile === true) {
      this.router.navigate([data]);
    } else {
      this.router.navigate([data, "map"]);
    }
  }
}
