import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputdataComponent } from './inputdata/inputdata.component';

const routes: Routes = [
  { path: '', component: InputdataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
