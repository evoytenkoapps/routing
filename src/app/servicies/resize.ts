import { Injectable } from "@angular/core";
import { fromEvent } from "rxjs";
import {
  debounceTime,
  distinctUntilChanged,
  map,
  startWith,
  tap
} from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ResizeService {
  isMobile: boolean;

  constructor() {}

  public init() {
    fromEvent(window, "resize")
      .pipe(
        debounceTime(200),
        map(() => window.innerWidth), //Don't use mapTo!
        distinctUntilChanged(),
        startWith(window.innerWidth),
        tap(width => console.log("width", width))
      )
      .subscribe(width => (this.isMobile = width < 520));
  }
}
