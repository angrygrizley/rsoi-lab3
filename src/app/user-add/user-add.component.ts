import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {GatewayService} from '../gateway.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  user: User = new User();

  constructor(private service: GatewayService) { }

  ngOnInit() {
  }

  submit(user: User): void {
    this.service.addUser(user).subscribe(data => {
      console.log(data);
    });
    window.location.href = '/users';
  }

}
