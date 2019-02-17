import { NgModule } from "@angular/core";
import { UserComponent } from "./user.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { UserService } from "./user-service";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { UserRoutingModule } from "./user-routing.module";
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        UserRoutingModule
    ],
    exports: [],
    declarations: [
        UserComponent,
        UserDetailComponent,
        UserFormComponent
    ],
    providers: [
        UserService
    ]
})
export class UserModule {

}