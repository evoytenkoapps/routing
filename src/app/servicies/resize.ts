import { Injectable } from "@angular/core";
import { fromEvent, Observable, Subject } from "rxjs";
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
  isMobile$: Observable<boolean>;

  constructor() {}

  public init() {
    this.isMobile$ = fromEvent(window, "resize").pipe(
      debounceTime(200),
      map(() => window.innerWidth), //Don't use mapTo!
      distinctUntilChanged(),
      startWith(window.innerWidth),
      tap(width => console.log("width", width)),
      map(width => (this.isMobile = width < 520))
    );

    this.isMobile$.subscribe(data => (this.isMobile = data));
  }
}
