import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JsonComponent } from './json/json.component';
import { ResultDisplayComponent } from './result-display/result-display.component';


const routes: Routes = [
  { path: ':keyword', component: ResultDisplayComponent },
  { path: 'json/:keyword',      component: JsonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
