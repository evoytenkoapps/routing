import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "../base/base.component";
import { interval, of, timer } from "rxjs";

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.css"]
})
export class ParentComponent extends BaseComponent implements OnInit {
  protected data: number = 0;
  constructor() {
    super();
  }

  ngOnInit() {
    of(1, 2, 3).subscribe((data: number) => {
      this.data += data;
      console.log("this.data", this.data);
    });
  }

  protected print() {
    console.log(this.data);
  }
}
