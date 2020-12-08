import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ChartsComponent} from "./charts/charts.component";
import{ DummyJsonComponent } from "./dummy-json/dummy-json.component";
import{TableComponent} from "./table/table.component";
import{LocalizationComponent} from "./localization/localization.component";
import {SignupComponent} from "./signup/signup.component";
import {DocumentationComponent} from  './documentation/documentation.component'

const routes: Routes = [

  { path: '', component:ChartsComponent  },
  { path: 'table', component:TableComponent },
  { path: 'localization',component:LocalizationComponent},
  { path:"dummy-json", component:DummyJsonComponent},
  { path:"signup", component:SignupComponent},
  { path:'document',component:DocumentationComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
