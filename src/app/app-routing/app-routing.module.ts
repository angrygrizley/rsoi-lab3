import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GroupListComponent} from '../group-list/group-list.component';
import {GroupDetailsComponent} from '../group-details/group-details.component';
import {GameListComponent} from '../game-list/game-list.component';
import {GameDetailsComponent} from '../game-details/game-details.component';
import {UserListComponent} from '../user-list/user-list.component';
import {UserDetailsComponent} from '../user-details/user-details.component';
import {UserAddComponent} from '../user-add/user-add.component';
import {GroupAddComponent} from '../group-add/group-add.component';
import {GameAddComponent} from '../game-add/game-add.component';
import {LoginComponent} from '../login/login.component';
import {AuthGuard} from '../authguard';

const appRoutes: Routes = [
  {
    path: 'groups',
    component: GroupListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: '/groups',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'group/:id',
    component: GroupDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'games',
    component: GameListComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'game/:id',
    component: GameDetailsComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'users',
    component: UserListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user/:id',
    component: UserDetailsComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'adduser',
    component: UserAddComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'addgroup',
    component: GroupAddComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'addgame',
    component: GameAddComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'unlog',
    component: LoginComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
