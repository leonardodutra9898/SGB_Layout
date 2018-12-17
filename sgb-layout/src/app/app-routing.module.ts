import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { DatatableComponent } from './datatable/datatable.component';

const routes: Routes = [
  {
    path: 'dashboard', 
    component: DashboardComponent,
    data: {
      title: "SGB/UFC"
    }
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'datatable',
    component: DatatableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
