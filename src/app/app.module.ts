import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatStepperModule, MatFormFieldModule, MatOptionModule, MatInputModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatGridListModule, MatCardModule, MatTableModule, MatPaginatorModule, MatSortModule, MatButtonModule, MatMenuModule } from '@angular/material';

import { AppComponent } from './app.component';
import { CarpoolComponent } from './carpool/carpool.component';
import { HomeComponent } from './home/home.component';
import { OrganizerComponent } from './organizer/organizer.component';
import { AppTableComponent } from './app-table/app-table.component';
import { CarpoolFormComponent } from './carpool-form/carpool-form.component';

import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarpoolComponent,    
    OrganizerComponent,
    AppTableComponent,
    CarpoolFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatOptionModule,
    MatInputModule,
    MatStepperModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
