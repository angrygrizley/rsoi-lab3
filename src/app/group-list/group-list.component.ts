import { Component, OnInit } from '@angular/core';
import {GatewayService} from '../gateway.service';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {

  private groupsData: any;

  freeGroups: any;

  constructor(private service: GatewayService) { }

  ngOnInit() {
    this.service.getGroups().subscribe(data => {
      this.groupsData = data;
    });
  }

}
