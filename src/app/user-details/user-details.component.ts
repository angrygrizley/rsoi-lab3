import { Component, OnInit } from '@angular/core';
import {GatewayService} from '../gateway.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  private user: any;

  constructor(private service: GatewayService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getUserDetails();
  }

  getUserDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.service.getUserInfo(id).subscribe(data => {
      this.user = data;
      console.log(data);
    });
  }

}
