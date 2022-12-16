import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  isLoggedIn(): boolean {
    let a =  localStorage.getItem('token') ? true : false;
   // console.log(a)
    if(a){
      this.router.navigate(['add-idea']);
    }else{
      this.router.navigate(['login'])
    }
    return a;
  }
 
}
