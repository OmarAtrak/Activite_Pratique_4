import { Component } from '@angular/core';
import { ProductStateService } from '../../../product/service/product-state.service';
import { LoadingService } from '../../service/loading.service';
import { AuthStateService } from '../../../authentification/service/auth-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})

export class NavBarComponent {
  public currentRoute = '';
  public routes = [
    {title: 'Home', url: '/admin/home', icon: 'bi bi-house text-ligth'},
    {title: 'Products', url: '/admin/products', icon: 'bi bi-arrow-down-up text-ligth'},
    {title: 'New Product', url: '/admin/products/add', icon: 'bi bi-plus-circle text-ligth'},
  ];
  
  public isLoading = false;
  
  constructor(
    public productStateService: ProductStateService,
    public loadingService: LoadingService,
    public authStateService: AuthStateService,
    public router: Router,
  ) {
    this.loadingService.isLoading$
    .subscribe({
      next: value => {
        this.isLoading = value;
      }
    });
  }
  
  setCurrentRoute(url: string) {
    this.currentRoute = url;
  }

  logout() {
    this.authStateService.user = null;
    this.router.navigateByUrl('/login');
  }

  login() {
    this.router.navigateByUrl('/login');
  }
}
