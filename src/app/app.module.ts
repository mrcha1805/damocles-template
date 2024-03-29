import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { CreateProjectNameComponent } from './modules/create-project-name/create-project-name.component';
import { KpiComponent } from './modules/kpi/kpi.component';
import { StepperComponent } from './step-process/stepper/stepper.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FilterSearchPipe } from 'src/pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { LetsStartComponent } from './modules/lets-start/lets-start.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TestProjectComponent } from './modules/test-project/test-project.component';
import { KpiByProductComponent } from './modules/kpi-by-product/kpi-by-product.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register/register.component';
import { VerifyComponent } from './register/verify/verify.component';
import { CreateKpiNameComponent } from './modules/create-kpi-name/create-kpi-name.component';
import { FilterKpiDropDownPipe } from 'src/pipes/dropdownKpi.pipe';
import {
  NgxPopperjsModule,
  NgxPopperjsOptions,
  NgxPopperjsTriggers,
} from 'ngx-popperjs';
import { ExampleComponent } from './modules/example/example.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FlexlayoutTemplateComponent } from './modules/example/flexlayout-themplate/flexlayout-template.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { SelectChannelComponent } from './modules/select-channel/select-channel.component';
import { HighchartsTemplateComponent } from './modules/example/charts-themplate/highcharts-js/highcharts/highcharts-template.component';
import { ColumnStackedChartComponent } from './charts/column-stacked-chart/column-stacked-chart.component';
import { ColumnDuoStackedChartComponent } from './charts/column-duo-stacked-chart/column-duo-stacked-chart.component';
import { MediaPlanComponent } from './modules/media-plan/media-plan.component';
import { KpiTestComponent } from './modules/kpi-test/kpi-test.component';
import { FilterAttributePipe } from 'src/pipes/search-attribute.pipe';
import { FilterKpiTestDropDownPipe } from 'src/pipes/dropdownKpiTest.pipe';
import { HomepageComponent } from './modules/homepage/homepage.component';
import { ProjectListComponent } from './modules/project-list/project-list.component';
import { ChartHomepageComponent } from './modules/homepage/chart/chart-homepage/chart-homepage.component';
import { ResizableModule } from 'angular-resizable-element';
import { ChartjsTemplateComponent } from './modules/example/charts-themplate/charts-js/chartjs-template/chartjs-template.component';
import { ChartsModule, ThemeService } from 'ng2-charts';

export const TOOLTIP_DEFAULT_OPTIONS: NgxPopperjsOptions = {
  trigger: NgxPopperjsTriggers.hover,
  showDelay: 500,
  ariaRole: 'tooltip',
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateProjectNameComponent,
    KpiComponent,
    StepperComponent,
    FilterSearchPipe,
    FilterKpiDropDownPipe,
    LetsStartComponent,
    TestProjectComponent,
    KpiByProductComponent,
    LoginComponent,
    RegisterComponent,
    VerifyComponent,
    CreateKpiNameComponent,
    ExampleComponent,
    DashboardComponent,
    NavbarComponent,
    FlexlayoutTemplateComponent,
    SelectChannelComponent,
    HighchartsTemplateComponent,
    ColumnStackedChartComponent,
    ColumnDuoStackedChartComponent,
    MediaPlanComponent,
    KpiTestComponent,
    FilterAttributePipe,
    FilterKpiTestDropDownPipe,
    HomepageComponent,
    ProjectListComponent,
    ChartHomepageComponent,
    ChartjsTemplateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatTooltipModule,
    NgxPopperjsModule.forRoot(TOOLTIP_DEFAULT_OPTIONS),
    NgApexchartsModule,
    NgxSliderModule,
    ResizableModule,
    ChartsModule,
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
