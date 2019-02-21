import { Component, OnInit } from '@angular/core';
import {GatewayService} from '../gateway.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  private usersData: any;

  constructor(private service: GatewayService) { }

  ngOnInit() {
    this.service.getUsers().subscribe(data => {
      this.usersData = data;
    })
  }

}
