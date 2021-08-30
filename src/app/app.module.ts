import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TableViewComponent } from './table-view/table-view.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { GteValidatorDirective } from './validator/gte.validator';

@NgModule({
  declarations: [
    AppComponent,
    TableViewComponent,
    LineChartComponent,
    GteValidatorDirective
  ],
  imports: [
   BrowserModule,
   AppRoutingModule,
   FormsModule,
   ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
