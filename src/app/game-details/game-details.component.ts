import { Component, OnInit } from '@angular/core';
import {GatewayService} from '../gateway.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {

  private game: any;
  private groupList: any;

  constructor(private service: GatewayService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getGameDetails();
  }

  getGameDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.service.getGameInfo(id).subscribe(data => {
      this.game = data;
      this.service.getGroupsByGameId(this.game.id).subscribe(data2 => {
        this.groupList = data2;
        });
      });
    }
}
