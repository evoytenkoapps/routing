import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppComponent } from "./app.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule
} from "@angular/material";
import { MatChipsModule } from "@angular/material/chips";
import { NgScrollbarModule } from "ngx-scrollbar";
import { TasksComponent } from "./components/tasks/tasks.component";
import { TaskComponent } from "./components/task/task.component";
import { MapComponent } from "./components/map/map.component";
import { RouterModule, Routes } from "@angular/router";
import { TasksListComponent } from "./components/tasks-list/tasks-list.component";

const desktopRoutes: Routes = [
  {
    path: "",
    component: TasksComponent
  },
  { path: ":id", component: TasksComponent },
  { path: ":id/map", component: TasksComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskComponent,
    MapComponent,
    TasksListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    NgScrollbarModule,
    RouterModule.forRoot(desktopRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
