import { Component, OnInit } from "@angular/core";
import { ResizeService } from "./servicies/resize";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "test-flex";

  constructor(private resize: ResizeService) {
    resize.init();
  }
}
