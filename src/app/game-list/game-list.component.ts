import { Component, OnInit } from '@angular/core';
import {GatewayService} from '../gateway.service';
import {stringify} from 'querystring';
import {toNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';


@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  private gameData: any;
  public currentPage: number = 0;
  public totalItems: number;
  public itp: number = 5;
  public numPages: number;

  constructor(private service: GatewayService) { }

  ngOnInit() {
    this.getGamesList(this.currentPage, this.itp);
  }

  public pageChanged(page) {
    console.log('pageChanged: ', page);
    this.getGamesList(parseInt(page, 10) - 1, this.itp);
  }

  getGamesList(page: number, size: number) {
    this.service.getGames(page, size).subscribe(data => {
      this.gameData = data;
      this.totalItems = this.gameData.totalElements;
      this.numPages = this.gameData.totalPages;
      // this.currentPage = stringify(page);
    });
  }
}
