import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SheetComponent } from './modules/sheet/sheet.component';

import { AppRoutingModule }     from './app-routing.module';
import { LayoutModule } from './modules/layout/layout.module';
import { HttpClientModule }    from '@angular/common/http';
import {DataTableModule} from "angular-6-datatable";
import { DashboardService } from "./dashboard.service";
import { FormsModule } from '@angular/forms';

@NgModule({
   declarations: [
      AppComponent,
      DashboardComponent,
      SheetComponent

   ],
   imports: [
      BrowserModule,
      LayoutModule,
      AppRoutingModule,
      HttpClientModule,
      DataTableModule,
      FormsModule
   ],
   providers: [DashboardService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
