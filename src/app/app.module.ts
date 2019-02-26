import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { GroupListComponent } from './group-list/group-list.component';
import { HttpClientModule } from '@angular/common/http';
import { GroupDetailsComponent } from './group-details/group-details.component';
import { GameListComponent } from './game-list/game-list.component';
import {GameDetailsComponent} from './game-details/game-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserAddComponent } from './user-add/user-add.component';
import { FormsModule } from '@angular/forms';
import { GroupAddComponent } from './group-add/group-add.component';
import { GameAddComponent } from './game-add/game-add.component';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './authguard';

@NgModule({
  declarations: [
    AppComponent,
    GroupListComponent,
    GroupDetailsComponent,
    GameListComponent,
    GameDetailsComponent,
    UserListComponent,
    UserDetailsComponent,
    UserAddComponent,
    GroupAddComponent,
    GameAddComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgbPaginationModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
