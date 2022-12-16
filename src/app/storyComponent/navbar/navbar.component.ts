import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogin:boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((val: any)=> {
      // console.log("value: ", val);
      if(val.url){
        // console.log("Local: ", val.url);
        if(localStorage.getItem('token') && val.url.includes('/')){
          // console.log("Value: ", val.url);
          // console.log('This is login area');
          this.isLogin = true;
        }else{
          // this.menuType = 'default';
          this.isLogin = false
        }
      }
      // console.log("menuType: ", this.menuType);
    });
  } 
  logout(){
    localStorage.removeItem('token');
    // console.log("logout")`
    this.router.navigate(['login'])
  }

}
