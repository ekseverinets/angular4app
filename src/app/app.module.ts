import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserCardListComponent } from './user-card-list/user-card-list.component';
import { UserCardItemComponent } from './user-card-list/user-card-item/user-card-item.component';

import { MatCardModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';

import { UserService } from './user/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserCardListComponent,
    UserCardItemComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [ UserService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
