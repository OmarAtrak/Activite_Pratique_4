import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})

export class NavBarComponent {
  public currentRoute = '';
  
  constructor(private router: Router) {}

  goto(url: string) {
    this.currentRoute = url;
    this.router.navigateByUrl(`/${url}`);
  }
}
