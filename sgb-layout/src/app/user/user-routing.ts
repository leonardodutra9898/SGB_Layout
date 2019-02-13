import {Routes, RouterModule} from '@angular/router';
import { UserComponent } from './user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ModuleWithProviders } from '@angular/core';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserAddComponent } from './user-add/user-add.component';

const USER_ROUTES : Routes = [
    {
        path: 'users',
        component: UserComponent
    },
    {
        path: 'users/:id',
        component: UserDetailComponent
    },
    {
        path: 'users/:id/edit',
        component: UserEditComponent
    },
    {
        path: 'users/add',
        component: UserAddComponent
    },
];

export const routing: ModuleWithProviders = RouterModule.forChild(USER_ROUTES);