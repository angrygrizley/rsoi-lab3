import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import index from '@angular/cli/lib/cli';
import {User} from './user';
import {Group} from './group';
import {group} from '@angular/animations';
import {Game} from './game';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class GatewayService {

  constructor(private http: HttpClient) {}

  getGroups(): Observable<any> {
    return this.http.get('http://localhost:8088/groups');
  }

  getGroupsByGameId(id: string): Observable<any> {
    return this.http.get('http://localhost:8088/groups/game/' + id);
  }

  getGroupInfo(id: string): Observable<any> {
    return this.http.get('http://localhost:8088/groups/id/' + id);
  }

  getGames(): Observable<any> {
    return this.http.get('http://localhost:8088/games');
  }

  getGameInfo(id: string): Observable<any> {
    return this.http.get('http://localhost:8088/games/id/' + id);
  }

  getUsers(): Observable<any> {
    return this.http.get('http://localhost:8088/users');
  }

  getUserInfo(id: string): Observable<any> {
    return this.http.get('http://localhost:8088/users/id/' + id);
  }

  addUser(user: User): Observable<any> {
    const body = {name: user.name, login: user.login};
    return this.http.post('http://localhost:8088/users/', body);
  }

  addGroup(gr: Group): Observable<any> {
    const body = {groupName: gr.groupName, gameId: gr.gameId, freeSpace: gr.freeSpace};
    return this.http.post('http://localhost:8088/groups/', body);
  }

  addGame(game: Game): Observable<any> {
    const body = {title: game.title, genre: game.genre, minNum: game.minNum, maxNum: game.maxNum};
    return this.http.post('http://localhost:8088/games/', body);
  }


  inviteUser(userID: string, groupID: string): Observable<any> {
    const params = new HttpParams()
      .set('userid', userID)
      .set('groupid', groupID);
    let body = new HttpParams();
    body = body.set('userid', userID);
    body = body.set('groupid', groupID);
    return this.http.post('http://localhost:8088/groups/players/add', body);
  }

  removeUserFromGroup(userID: string, groupID: string): Observable<any> {
    let body = new HttpParams();
    body = body.set('userid', userID);
    body = body.set('groupid', groupID);
    return this.http.delete('http://localhost:8088/groups/players/remove', {body});
  }

  deleteGroup(groupID: string): Observable<any> {
    return this.http.delete(`http://localhost:8088/groups/delete/${groupID}`);
  }
}
