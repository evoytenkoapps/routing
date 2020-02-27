import { Component, HostBinding, OnInit } from "@angular/core";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"]
})
export class MapComponent implements OnInit {
  @HostBinding("class") classes = "base";
  constructor() {}

  ngOnInit() {}
}
