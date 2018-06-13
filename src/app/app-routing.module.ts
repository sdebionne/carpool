import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { OrganizerComponent } from './organizer/organizer.component';
import { AppTableComponent } from './app-table/app-table.component';
import { CarpoolFormComponent } from './carpool-form/carpool-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':id/organizer', component: OrganizerComponent },
  { path: ':id/table',      component: AppTableComponent },
  { path: 'new', component: CarpoolFormComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
