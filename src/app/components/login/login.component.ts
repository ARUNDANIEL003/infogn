import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from "@angular/forms";

import { AuthService } from './../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error:any;
  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.loginForm= this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }

  ngOnInit() { }
	//login submission
	//pass the login details to api
  loginUser() {
    this.authService.login(this.loginForm.value)
  }
}