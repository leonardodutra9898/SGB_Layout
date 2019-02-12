import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { DatatableComponent } from './datatable/datatable.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';


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
    path: 'users',
    component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
