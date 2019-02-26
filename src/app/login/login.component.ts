import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private service: AuthService) { }

  ngOnInit() {
    localStorage.setItem('token', '');
  }

  private submit(username: string, password: string) {
    this.service.login(username, password).subscribe(data => {
      console.log(data);
      localStorage.setItem('token', data.access_token);

      window.location.href = '/games';
    });
  }

}
