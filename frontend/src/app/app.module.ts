import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MaterialModule } from './material.module';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

import { AppComponent } from './app.component';
import { CarpoolComponent } from './carpool/carpool.component';
import { HomeComponent } from './home/home.component';
import { OrganizerComponent } from './organizer/organizer.component';
import { SummaryComponent } from './summary/summary.component';
import { CarpoolFormComponent } from './carpool-form/carpool-form.component';
import { CarComponent } from './car/car.component';
import { CarFormComponent } from './car-form/car-form.component';
import { InlineEditComponent } from './inline-edit/inline-edit.component';

import { AppRoutingModule } from './app-routing.module';

import { carpoolReducer } from './reducers/carpool.reducer';
import { AppEffects } from './app.effects';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
// import { reducers, metaReducers } from './reducers';

// Register french local
registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarpoolComponent,
    OrganizerComponent,
    SummaryComponent,
    CarpoolFormComponent,
    CarComponent,
    CarFormComponent,
    InlineEditComponent,
    SignupComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    StoreModule.forRoot({ carpool: carpoolReducer }),
    EffectsModule.forRoot([AppEffects]),
    // StoreModule.forRoot(reducers, { metaReducers }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
