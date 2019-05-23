import { Component, OnInit } from "@angular/core";
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { MatChipInputEvent } from "@angular/material";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  public addOnBlur = true;
  public readonly separatorKeysCodes: number[] = [COMMA, ENTER];
  public data: string[] = [];
  public selectable = true;
  removable = true;
  constructor() {}

  ngOnInit() {}

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    // Add our fruit
    if ((value || "").trim()) {
      this.data.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = "";
    }
  }

  remove(tag: string): void {
    const index = this.data.indexOf(tag);

    if (index >= 0) {
      this.data.splice(index, 1);
    }
  }
}
