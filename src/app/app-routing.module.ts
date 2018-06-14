import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CarpoolComponent } from './carpool/carpool.component';
import { OrganizerComponent } from './organizer/organizer.component';
import { AppTableComponent } from './app-table/app-table.component';
import { CarpoolFormComponent } from './carpool-form/carpool-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'new', component: CarpoolFormComponent },
  {
    path: 'carpool/:id',
    component: CarpoolComponent,
    children: [
      {path: '', redirectTo: 'organizer', pathMatch: 'full'}, 
      {path: 'organizer', component: OrganizerComponent},
      {path: 'table', component: AppTableComponent},
    ]
  },
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
