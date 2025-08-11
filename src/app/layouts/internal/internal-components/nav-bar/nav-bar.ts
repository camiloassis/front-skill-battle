import { Component } from '@angular/core';
import { LucideAngularModule, Settings, LogOut } from 'lucide-angular';

@Component({
  selector: 'app-nav-bar',
  imports: [LucideAngularModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss'
})
export class NavBar {

  readonly setting = Settings;
  readonly logout = LogOut

}
