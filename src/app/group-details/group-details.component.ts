import { Component, OnInit } from '@angular/core';
import {GatewayService} from '../gateway.service';
import {ActivatedRoute} from '@angular/router';
import {User} from '../user';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.css']
})
export class GroupDetailsComponent implements OnInit {
  private group: any;

  private userList: any;

  constructor(private service: GatewayService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getGroupDetails();
  }

  getGroupDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.service.getGroupInfo(id).subscribe(data => {
      this.group = data;
      console.log(data);


      this.service.getUsers().subscribe(data2 => {
        this.userList = data2;
        console.log(data2);
      });
    });
  }

  private submit(u: any) {
    this.service.inviteUser(u, this.group.group.id).subscribe(data => {
      console.log(data);
      if (data == null) {
        alert('Свободных мест нет!');
      }
    });
    window.location.href = '/group/' + this.group.group.id;
  }

  private removeUserFromGroup(u: any) {
    this.service.removeUserFromGroup(u, this.group.group.id).subscribe(data => {
      console.log(data);
    });
    window.location.href = '/group/' + this.group.group.id;
  }

  private delGroup() {
    console.log('del');
    this.service.deleteGroup(this.group.group.id).subscribe(data => {
      console.log(data);
    });
  }
}
