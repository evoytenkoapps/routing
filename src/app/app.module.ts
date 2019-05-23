import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppComponent } from "./app.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule, MatInputModule } from "@angular/material";
import { MatChipsModule } from "@angular/material/chips";
import { SearchComponent } from "./components/search/search.component";
@NgModule({
  declarations: [AppComponent, SearchComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
