import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { User } from '../../model/user';
import { AuthStateService } from '../../service/auth-state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  public loginForm: FormGroup;
  public showErrorMessage = false;

  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
    private authService: AuthService,
    private authStateService: AuthStateService
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    let user = new User();

    this.authService.get(username)
    .subscribe({
      next: (data: any) => {
        user.username = data.id;
        user.password = data.password;
        user.roles = data.roles;
        user.token = data.token;

        if(user) {
          if(user.username == username && user.password == password) {
            this.authStateService.user = user;

            if(user.isHasRole('ADMIN')) {
              this.router.navigateByUrl('/admin');
            }
          }
          else
            this.showErrorMessage = true;
        }
      },
      error: err => {
        console.error(err);
        this.showErrorMessage = true;
      }
    });
    


  }
}
