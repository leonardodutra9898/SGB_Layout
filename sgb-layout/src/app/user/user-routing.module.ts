import {Routes, RouterModule} from '@angular/router';
import { UserComponent } from './user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserAddComponent } from './user-add/user-add.component';

const userRoutes : Routes = [
    {
        path: 'users',
        component: UserComponent
    },
    {
        path: 'users/add',
        component: UserAddComponent
    },
    {
        path: 'users/:id',
        component: UserDetailComponent
    },
    {
        path: 'users/:id/edit',
        component: UserEditComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(userRoutes)],
    exports: [RouterModule]
})
export class UserRoutingModule {

}