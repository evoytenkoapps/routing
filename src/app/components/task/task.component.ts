import { Component, HostBinding, OnInit } from "@angular/core";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"]
})
export class TaskComponent implements OnInit {
  @HostBinding("class") classes = "base";

  constructor() {}

  ngOnInit() {}
}
