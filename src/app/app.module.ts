import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatGridListModule, MatCardModule, MatTableModule, MatPaginatorModule, MatSortModule, MatButtonModule, MatMenuModule } from '@angular/material';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { OrganizerComponent } from './organizer/organizer.component';
import { AppTableComponent } from './app-table/app-table.component';

const appRoutes: Routes = [
  { path: ':id/organizer', component: OrganizerComponent },
  { path: 'table',      component: AppTableComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    OrganizerComponent,
    AppTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    LayoutModule,
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
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
