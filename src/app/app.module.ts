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
import { SearchComponent } from "./components/search/search.component";
import { BaseComponent } from "./components/base/base.component";
import { ParentComponent } from "./components/parent/parent.component";
import { ChildComponent } from "./components/child/child.component";
import { NgScrollbarModule } from "ngx-scrollbar";
import { TasksComponent } from "./components/tasks/tasks.component";
import { TaskComponent } from "./components/task/task.component";
import { MapComponent } from "./components/map/map.component";
import { RouterModule, Routes } from "@angular/router";
import { TasksListComponent } from "./components/tasks-list/tasks-list.component";

const appRoutes: Routes = [
  {
    path: "tasks",
    component: TasksComponent,
    children: [
      {
        path: "",
        component: TasksListComponent,
        children: [
          {
            path: ":id",
            component: TaskComponent,
            children: [{ path: "map", component: MapComponent }]
          }
        ]
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    BaseComponent,
    ParentComponent,
    ChildComponent,
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
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
