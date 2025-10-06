import { Component, inject, OnInit } from '@angular/core';
import { HttpService } from '../http-service';

@Component({
  selector: 'app-main-comp',
  standalone: true,
  styleUrl: './main-comp.css',
  templateUrl: './main-comp.html',
})
export class MainComp implements OnInit {

  injected = inject(HttpService);
  roles: any;

  constructor() {}
  ngOnInit() {
    this.fethchRoles();
   }

  fethchRoles() {
    this.injected.getRoles().subscribe((res:any) => {
      if(res) {
        this.roles = res.data;
        console.log(res);
      }
    });
  }
}
