import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
const routes: Routes = [
   { path: '', component: AppComponent },
   { path: 'categories', component: CategoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class NgBetaDemoRoutingModule {
  constructor() {
        console.log("NgBetaDemoRoutingModule called");
   }
 }
