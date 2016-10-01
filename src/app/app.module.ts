import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgBetaDemoRoutingModule }  from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './theme/sidebar/sidebar.component';
import { UsersComponent } from './users/users.component';
import {AngularFireModule} from 'angularfire2';
import * as firebase from 'firebase';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import {InputTextModule,MenuModule,GrowlModule,ButtonModule} from 'primeng/primeng';

const firebaseConfig = {
  apiKey: 'AIzaSyAtI0Wu2AuFeTud1KQuDLH4Op2zNSRNUdo',
  authDomain: "angular2-24c95.firebaseapp.com",
  databaseURL: "https://angular2-24c95.firebaseio.com",
  storageBucket: ''
}
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    UsersComponent,
    DashboardComponent,
    CategoryComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    InputTextModule,
    InputTextModule,
    MenuModule,
    GrowlModule,
    ButtonModule,
    NgBetaDemoRoutingModule,
   AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
