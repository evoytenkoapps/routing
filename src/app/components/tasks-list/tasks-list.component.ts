import { Component, HostBinding, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-tasks-list",
  templateUrl: "./tasks-list.component.html",
  styleUrls: ["./tasks-list.component.css"]
})
export class TasksListComponent implements OnInit {
  @HostBinding("class") classes = "base";

  public tasks: number[] = [1, 2, 3, 4, 5];

  constructor(private router: Router) {}

  ngOnInit() {}

  public onClick(data: number) {
    this.router.navigate([data, "map"]);
  }
}
