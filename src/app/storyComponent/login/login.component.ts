import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router, UrlSegment } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error!: String; 
  response!: String;

  constructor(private router: Router, private authService: AuthService ,private _http: HttpClient, private toast: NgToastService) { }

  ngOnInit(): void {
  } 

 loginForm = new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email]
  ),
  password: new FormControl('',  [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(15),])
 });
 errors:any = {email:'', password:''};


 loginSubmited(loginForm: FormGroup){
  this.authService.getloginData(loginForm.value.email, loginForm.value.password).subscribe((response:any) => {
    if(response){
      console.log(response)
      this.loginForm.reset();
    this.toast.success({detail:"Success Message",summary:"Login Successfully!!",duration:3000})
      //  localStorage.setItem('userData', JSON.stringify(response))
       this.authService.setToken(response.data.token);
      // call authentication service

    this.router.navigate(['/']);
    
  }else{
    this.toast.error({detail:"Error Message", summary:"User not Found!!",duration:3000})
  }
},({error})=>{
    this.toast.error({detail:"Error Message", summary:"Something went Wrong!!",duration:3000})
    console.log("EE: ", error.errors);
    this.errors = error.errors;
   })

 }


 get email(): FormControl {
  return this.loginForm.get('email') as FormControl; 
 }
  
 get password(): FormControl {
  return this.loginForm.get('password') as FormControl;
 }

 onKeyDown(field:string){
  this.errors[field] = '';
 }
}


function setToken() {
  throw new Error('Function not implemented.');
}

