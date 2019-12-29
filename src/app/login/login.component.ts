import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: ServiceapiService, private router: Router) { }
  username: string;
  password: string;
  message: any;
  ngOnInit() {
  }
  dologin() {
    const resp = this.service.login( this.username , this.password);
    resp.subscribe(date => {
      this.router.navigate(['home']);
    });
  }

}

