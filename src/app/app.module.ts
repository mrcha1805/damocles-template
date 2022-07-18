import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { CreateProjectNameComponent } from './modules/create-project-name/create-project-name.component';
import { KpiComponent } from './modules/kpi/kpi.component';
import { StepperComponent } from './step-process/stepper/stepper.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateProjectNameComponent,
    KpiComponent,
    StepperComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FlexLayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
