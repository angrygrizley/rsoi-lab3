import { Component, OnInit } from '@angular/core';
import {GatewayService} from '../gateway.service';
import {Group} from '../group';

@Component({
  selector: 'app-group-add',
  templateUrl: './group-add.component.html',
  styleUrls: ['./group-add.component.css']
})
export class GroupAddComponent implements OnInit {

  private gameList: any;
  group: Group = new Group();

  constructor(private service: GatewayService) { }

  ngOnInit() {
    this.updateGameList();
  }

  private updateGameList() {
    this.service.getGames().subscribe(data => {
      this.gameList = data.content;
      console.log(this.gameList);
    });
  }

  private submit(group: Group) {
    console.log(group);
    this.service.addGroup(group).subscribe(data => {
      console.log(data);
    });
    window.location.href = '/groups';
  }
}
