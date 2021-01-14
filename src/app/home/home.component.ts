import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
home = new FormGroup({
  email: new FormControl(null, [Validators.required]),
  firstName: new FormControl(null, [Validators.required]),
  lastName: new FormControl(null, [Validators.required]),
  password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
  birthyear: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.max(2000)])
})

  constructor(private router: Router) { }
  onSubmitButton(): void {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        email: this.home.value.email,
        first: this.home.value.firstName,
        last: this.home.value.lastName,
        password: this.home.value.password,
        birthyear: this.home.value.birthyear
      }
    }
    this.router.navigate(['/success'], navigationExtras)

  }
  
}
