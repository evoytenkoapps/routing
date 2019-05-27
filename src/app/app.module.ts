import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppComponent } from "./app.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatButtonModule, MatIconModule, MatInputModule} from "@angular/material";
import { MatChipsModule } from "@angular/material/chips";
import { SearchComponent } from "./components/search/search.component";
import { BaseComponent } from './components/base/base.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
@NgModule({
  declarations: [AppComponent, SearchComponent, BaseComponent, ParentComponent, ChildComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
