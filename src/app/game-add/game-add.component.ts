import { Component, OnInit } from '@angular/core';
import {Game} from '../game';
import {GatewayService} from '../gateway.service';

@Component({
  selector: 'app-game-add',
  templateUrl: './game-add.component.html',
  styleUrls: ['./game-add.component.css']
})
export class GameAddComponent implements OnInit {

  game: Game = new Game();

  constructor(private service: GatewayService) { }

  ngOnInit() {
  }

  private submit(game: Game) {
    console.log(game);
    this.service.addGame(game).subscribe(data => {
      console.log(data);
    });
    window.location.href = '/games';
  }
}
