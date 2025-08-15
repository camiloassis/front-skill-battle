import { Component, inject } from '@angular/core';
import { LucideAngularModule, Zap, Trophy, Users, Clock} from 'lucide-angular';
import { Button } from "../../../../shared/components/button/button";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../../core/auth/auth.service';
import { Router } from '@angular/router';
import { User } from '../../../../shared/models/User';
import { UserService } from '../../../../core/services/user.service';
import { warn } from 'node:console';

@Component({
  selector: 'app-login',
  imports: [LucideAngularModule, Button, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  private readonly userService = inject(UserService)
  private readonly authService = inject(AuthService)
  private readonly router = inject(Router)

  //icones
  readonly zap = Zap;
  readonly trophy = Trophy;
  readonly users = Users;
  readonly clock = Clock;

  formType: 'login' | 'register' = 'login';


  loginForm!: FormGroup
  signInForm!: FormGroup
  constructor(private readonly fb: FormBuilder){
    this.loginForm = fb.group(
      {
        email:[null, [Validators.required, Validators.email]],
        password:[null, [Validators.required]]
      }
    )

    this.signInForm = fb.group(
      {
        email:[null, [Validators.required, Validators.email]],
        password:[null, [Validators.required]],
        name:[null, [Validators.required]]
      }
    )
  }


  onSubmit(isLogin = false): void {
    
    if(isLogin){
       if (this.loginForm.invalid) {
          return
        }

      this.authService.login(this.loginForm.value).subscribe({
          next: (value: {message: string, user: User}) => {
            if(value.message === 'Login bem-sucedido'){
              sessionStorage.setItem('user', JSON.stringify(value.user))
              this.router.navigate(['/dashboard'])
            }
          }
        })
    }else{

      if (this.signInForm.invalid) {
          return
        }

        this.userService.registerUser(this.signInForm.value).subscribe({
          next: (value) => {
            console.log(value)
          }
        })

    }
   
  }
}
