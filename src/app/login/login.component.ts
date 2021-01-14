import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    home = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    })
      constructor(private router: Router) { }
      onSubmitButton(): void {
        let navigationExtras: NavigationExtras = {
          queryParams: {
            email: this.home.value.email,
            password: this.home.value.password
          }
        }
        this.router.navigate(['/inbox'], navigationExtras)
    
      }
      
    }
    