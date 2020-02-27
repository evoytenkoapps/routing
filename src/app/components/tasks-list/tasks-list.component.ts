import { Component, HostBinding, OnInit } from "@angular/core";

@Component({
  selector: "app-tasks-list",
  templateUrl: "./tasks-list.component.html",
  styleUrls: ["./tasks-list.component.css"]
})
export class TasksListComponent implements OnInit {
  @HostBinding("class") classes = "base";

  constructor() {}

  ngOnInit() {}
}
