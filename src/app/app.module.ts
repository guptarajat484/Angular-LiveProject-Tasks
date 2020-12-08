import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ChartsComponent } from './charts/charts.component'
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartModule } from 'angular-highcharts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchPipe } from './search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NzFormModule } from 'ng-zorro-antd/form';
import { TableComponent } from './table/table.component';
import { LocalizationComponent } from './localization/localization.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { DummyJsonComponent } from './dummy-json/dummy-json.component';
import { SignupComponent } from './signup/signup.component';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { MatTableModule } from '@angular/material/table';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchPip } from './signup.pipe';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { MarkdownModule } from 'ngx-markdown';
import { ChartsModule } from 'ng2-charts';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DocumentationComponent } from './documentation/documentation.component';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    TableComponent,
    LocalizationComponent,
    DummyJsonComponent,
    SignupComponent,
    ChartsComponent,
    SearchPip,
    DocumentationComponent,


  ],
  imports: [
    NzMenuModule,
    ChartsModule,
    Ng2SearchPipeModule,
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    NzTableModule,
    NzDropDownModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NzFormModule,
    MatTableModule,
    MatSortModule,
    NzTreeSelectModule,
    NzTreeModule,
    MatPaginatorModule,
    MarkdownModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })

  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
