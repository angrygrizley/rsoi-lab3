import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
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
    let myheaders = new HttpHeaders();
    const token = localStorage.getItem('token');
    myheaders = myheaders.set('Authorization', 'Bearer ' + token);
    return this.http.get('http://localhost:8088/groups', {headers: myheaders});
  }

  getGroupsByGameId(id: string): Observable<any> {
    let myheaders = new HttpHeaders();
    const token = localStorage.getItem('token');
    myheaders = myheaders.set('Authorization', 'Bearer ' + token);
    return this.http.get('http://localhost:8088/groups/game/' + id, {headers: myheaders});
  }

  getGroupInfo(id: string): Observable<any> {
    let myheaders = new HttpHeaders();
    const token = localStorage.getItem('token');
    myheaders = myheaders.set('Authorization', 'Bearer ' + token);
    return this.http.get('http://localhost:8088/groups/id/' + id, {headers: myheaders});
  }

  getGames(page: number, size: number): Observable<any> {
    let myheaders = new HttpHeaders();
    const token = localStorage.getItem('token');
    myheaders = myheaders.set('Authorization', 'Bearer ' + token);

    return this.http.get('http://localhost:8088/games?page=' + page.toString() + '&size=' + size.toString(), {headers: myheaders});
  }

  getGameInfo(id: string): Observable<any> {
    let myheaders = new HttpHeaders();
    const token = localStorage.getItem('token');
    myheaders = myheaders.set('Authorization', 'Bearer ' + token);
    return this.http.get('http://localhost:8088/games/id/' + id, {headers: myheaders});
  }

  getUsers(): Observable<any> {
    let myheaders = new HttpHeaders();
    const token = localStorage.getItem('token');
    myheaders = myheaders.set('Authorization', 'Bearer ' + token);
    return this.http.get('http://localhost:8088/users', {headers: myheaders});
  }

  getUserInfo(id: string): Observable<any> {
    let myheaders = new HttpHeaders();
    const token = localStorage.getItem('token');
    myheaders = myheaders.set('Authorization', 'Bearer ' + token);
    return this.http.get('http://localhost:8088/users/id/' + id, {headers: myheaders});
  }

  addUser(user: User): Observable<any> {
    let myheaders = new HttpHeaders();
    const token = localStorage.getItem('token');
    myheaders = myheaders.set('Authorization', 'Bearer ' + token);
    const body = {name: user.name, login: user.login};
    return this.http.post('http://localhost:8088/users/', body, {headers: myheaders});
  }

  addGroup(gr: Group): Observable<any> {
    let myheaders = new HttpHeaders();
    const token = localStorage.getItem('token');
    myheaders = myheaders.set('Authorization', 'Bearer ' + token);
    const body = {groupName: gr.groupName, gameId: gr.gameId, freeSpace: gr.freeSpace};
    return this.http.post('http://localhost:8088/groups/', body, {headers: myheaders});
  }

  addGame(game: Game): Observable<any> {
    let myheaders = new HttpHeaders();
    const token = localStorage.getItem('token');
    myheaders = myheaders.set('Authorization', 'Bearer ' + token);
    const body = {title: game.title, genre: game.genre, minNum: game.minNum, maxNum: game.maxNum};
    return this.http.post('http://localhost:8088/games/', body, {headers: myheaders});
  }


  inviteUser(userID: string, groupID: string): Observable<any> {
    let myheaders = new HttpHeaders();
    const token = localStorage.getItem('token');
    myheaders = myheaders.set('Authorization', 'Bearer ' + token);
    const params = new HttpParams()
      .set('userid', userID)
      .set('groupid', groupID);
    let body = new HttpParams();
    body = body.set('userid', userID);
    body = body.set('groupid', groupID);
    return this.http.post('http://localhost:8088/groups/players/add', body, {headers: myheaders});
  }

  removeUserFromGroup(userID: string, groupID: string): Observable<any> {
    let myheaders = new HttpHeaders();
    const token = localStorage.getItem('token');
    myheaders = myheaders.set('Authorization', 'Bearer ' + token);
    let body = new HttpParams();
    body = body.set('userid', userID);
    body = body.set('groupid', groupID);
    // @ts-ignore
    return this.http.delete('http://localhost:8088/groups/players/remove',{headers: myheaders, params: body});
  }

  deleteGroup(groupID: string): Observable<any> {
    let myheaders = new HttpHeaders();
    const token = localStorage.getItem('token');
    myheaders = myheaders.set('Authorization', 'Bearer ' + token);
    return this.http.delete(`http://localhost:8088/groups/delete/${groupID}`, {headers: myheaders});
  }
}
