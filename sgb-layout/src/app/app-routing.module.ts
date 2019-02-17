import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { DatatableComponent } from './datatable/datatable.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
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
  },
  {
    path: 'subscription',
    component: SubscriptionComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
