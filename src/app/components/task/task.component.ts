import { Component, HostBinding, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"]
})
export class TaskComponent implements OnInit {
  @HostBinding("class") classes = "base";
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
