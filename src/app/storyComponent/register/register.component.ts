import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  confirmPass: string = 'none';
  errors: any = { name: '', email: '', password: '', password2: '' };
  constructor(private _http: HttpClient, private router: Router, private toast: NgToastService, private authService: AuthService) { }

  ngOnInit(): void {

  }

  registerForm = new FormGroup({
    name: new FormControl("", [Validators.required,
    Validators.minLength(2),
    Validators.pattern("[a-zA-Z].*")]),

    email: new FormControl("", [Validators.required,
    Validators.email]),

    password: new FormControl("", [Validators.required,
    Validators.minLength(6),
    Validators.maxLength(15)]),

    password2: new FormControl("")
  });

  registerSubmited(registerForm: FormGroup) {
    const name = registerForm.value.name;
    const email = registerForm.value.email;
    const password = registerForm.value.password;
    const password2 = registerForm.value.password2

    if (this.password.value == this.password2.value) {
      this.confirmPass = 'none';
      this.authService.getregisterData(name, email, password, password2 )
        .subscribe((response) => {
          console.log(response)
          this.toast.success({ detail: "Success Message", summary: "Registration Successful!!", duration: 3000 })
          this.registerForm.reset();
          this.router.navigate(['login']);
        }, ({ error }) => {
          this.toast.error({ detail: "Error Message", summary: "An Error Occured!!", duration: 3000 })
          console.log(error.errors)
          this.errors = error.errors
        })
    } else {
      this.confirmPass = 'inline'
      this.toast.error({ detail: "Error Message", summary: "Something went wrong!!", duration: 3000 })
    }
  };


  get name(): FormControl {
    return this.registerForm.get("name") as FormControl;
  }

  get email(): FormControl {
    return this.registerForm.get("email") as FormControl;
  }

  get password(): FormControl {
    return this.registerForm.get("password") as FormControl;
  }

  get password2(): FormControl {
    return this.registerForm.get("password2") as FormControl;
  }

  onKeyDown(field: string) {
    this.errors[field] = '';
  }

}
