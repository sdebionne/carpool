import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';

import { MatDatepickerModule, MatNativeDateModule, MatStepperModule, MatFormFieldModule, MatOptionModule, MatInputModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatGridListModule, MatCardModule, MatTableModule, MatPaginatorModule, MatSortModule, MatButtonModule, MatMenuModule } from '@angular/material';

import { AppComponent } from './app.component';
import { CarpoolComponent } from './carpool/carpool.component';
import { HomeComponent } from './home/home.component';
import { OrganizerComponent } from './organizer/organizer.component';
import { SummaryComponent } from './summary/summary.component';
import { CarpoolFormComponent } from './carpool-form/carpool-form.component';
import { CarComponent } from './car/car.component';

import { AppRoutingModule } from './/app-routing.module';

import { reducers, metaReducers } from './reducers';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarpoolComponent,    
    OrganizerComponent,
    SummaryComponent,
    CarpoolFormComponent,
    CarComponent,
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
    MatDatepickerModule,
    MatNativeDateModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
