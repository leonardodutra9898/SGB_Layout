import { NgModule } from "@angular/core";
import { UserComponent } from "./user.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { UserEditComponent } from "./user-edit/user-edit.component";
import { UserAddComponent } from "./user-add/user-add.component";
import { UserService } from "./user-service";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { UserRoutingModule } from "./user-routing.module";

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
        UserEditComponent,
        UserAddComponent
    ],
    providers: [
        UserService
    ]
})
export class UserModule {

}