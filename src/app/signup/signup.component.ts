import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerUserData = {}
  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
  }

  registerUser() {
    console.log(this.registerUserData)
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res.data['token'])
        this._router.navigate(['/login'])
      },
      err => console.log(err)
    )      
  }

}
