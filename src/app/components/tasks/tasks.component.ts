import { Component, HostBinding, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { ResizeService } from "../../servicies/resize";
import { convertValueToOutputAst } from "@angular/compiler/src/output/value_util";

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.css"]
})
export class TasksComponent implements OnInit {
  isMobile: boolean;
  public splitRoutes: string[];

  constructor(private router: Router, private resizeService: ResizeService) {}

  ngOnInit() {
    this.isMobile = this.resizeService.isMobile;

    this.router.getCurrentNavigation();
    this.splitRoutes = this.router.url.split("/");

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.splitRoutes = this.router.url.split("/");
      }
    });

    this.resizeService.isMobile$.subscribe(data => (this.isMobile = data));

    console.log("splitRoutes", this.splitRoutes);
  }
}
