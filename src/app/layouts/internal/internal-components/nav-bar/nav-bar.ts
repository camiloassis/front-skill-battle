import { Component, inject } from '@angular/core';
import { LucideAngularModule, Settings, LogOut, Zap } from 'lucide-angular';
import { AuthService } from '../../../../core/auth/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../../../core/services/user.service';
import { User } from '../../../../shared/models/User';

@Component({
  selector: 'app-nav-bar',
  imports: [LucideAngularModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss'
})
export class NavBar {
  private readonly authService = inject(AuthService)
  private readonly router = inject(Router)

  private readonly userService = inject(UserService)

  readonly setting = Settings;
  readonly logout = LogOut
  readonly zap = Zap

  public readonly user: User | null = null 


  constructor(){
    const sessionUser = sessionStorage.getItem('user')
    if(!sessionUser){
      this.handleLogout()
    }else{
      this.user = JSON.parse(sessionUser) 
    }
  }


  handleLogout(){
    this.authService.logout().subscribe({
      next: (res) => {
        this.router.navigate(['auth/login'])
      }
    })
  }

  openSettings(){
    console.log('abrir opções')
  }

}
