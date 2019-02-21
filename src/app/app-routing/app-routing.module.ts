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

const appRoutes: Routes = [
  {
    path: 'groups',
    component: GroupListComponent
  },
  {
    path: '',
    redirectTo: '/groups',
    pathMatch: 'full'
  },
  {
    path: 'group/:id',
    component: GroupDetailsComponent
  },
  {
    path: 'games',
    component: GameListComponent
  },

  {
    path: 'game/:id',
    component: GameDetailsComponent
  },

  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: 'user/:id',
    component: UserDetailsComponent
  },

  {
    path: 'adduser',
    component: UserAddComponent
  },
  {
    path: 'addgroup',
    component: GroupAddComponent
  },
  {
    path: 'addgame',
    component: GameAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
