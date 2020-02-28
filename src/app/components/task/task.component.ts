import { Component, HostBinding, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { ResizeService } from "../../servicies/resize";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"]
})
export class TaskComponent implements OnInit {
  @HostBinding("class") classes = "base";
  public taskId: string;
  public isHide: boolean;

  constructor(private router: Router, private resizeService: ResizeService) {}

  ngOnInit() {
    this.router.getCurrentNavigation();
    this.taskId = this.router.url.split("/")[1];

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.taskId = this.router.url.split("/")[1];
      }
    });

    this.isHide =
      this.resizeService.isMobile && this.router.url.split("/")[2] === "map";

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isHide =
          this.resizeService.isMobile &&
          this.router.url.split("/")[2] === "map";
      }
    });
  }

  public onRoute() {
    this.router.navigate([this.taskId, "map"]);
  }
}
