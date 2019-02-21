import { Component, OnInit } from '@angular/core';
import {GatewayService} from '../gateway.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  private gameData: any;

  constructor(private service: GatewayService) { }

  ngOnInit() {
    this.service.getGames().subscribe(data => {
      this.gameData = data;
    });
  }
}
