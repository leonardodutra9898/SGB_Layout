import {Routes, RouterModule} from '@angular/router';
import { UserComponent } from './user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { UserFormComponent } from './user-form/user-form.component';

const userRoutes : Routes = [
    {
        path: 'users',
        component: UserComponent
    },
    {
        path: 'users/add',
        component: UserFormComponent
    },
    {
        path: 'users/:id',
        component: UserDetailComponent
    },
    {
        path: 'users/:id/edit',
        component: UserFormComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(userRoutes)],
    exports: [RouterModule]
})
export class UserRoutingModule {

}