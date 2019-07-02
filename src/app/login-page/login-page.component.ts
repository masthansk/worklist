import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  constructor(private router: Router) { }
  
  ngOnInit() {
  }


  getErrorMessage() {
    return this.email.hasError('required') ? 'Please specify email ID' :
        this.email.hasError('email') ? 'Please enter a valid email' :
            '';
  }
  getpwdErrorMessage() {
    return this.password.hasError('required') ? 'Please specify Password' :
        this.password.hasError('password') ? 'Please enter Password' :
            '';
  }
  }
