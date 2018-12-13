import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatCommonModule, MatGridTile, MatGridListModule, MatIconModule, MatListModule, MatInputModule, MatSelectModule, MatRadioModule, MatCardModule, MatTableModule, MatPaginatorModule, MatSortModule} from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DatatableComponent } from './datatable/datatable.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ToolbarComponent,
    FormComponent,
    DatatableComponent
  ],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatGridListModule,
    MatIconModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatGridListModule,
    LayoutModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
