import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserCardListComponent } from './user-card-list/user-card-list.component';
import { UserCardItemComponent } from './user-card-list/user-card-item/user-card-item.component';
import { MatCardModule } from '@angular/material';
import { MatListModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    UserCardListComponent,
    UserCardItemComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
