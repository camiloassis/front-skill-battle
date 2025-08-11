import { Component } from '@angular/core';
import { LucideAngularModule, Zap, Trophy, Users, Clock} from 'lucide-angular';
import { Button } from "../../../../shared/components/button/button";

@Component({
  selector: 'app-login',
  imports: [LucideAngularModule, Button],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  readonly zap = Zap;
  readonly trophy = Trophy;
  readonly users = Users;
  readonly clock = Clock;

  formType: 'login' | 'register' = 'login';


}
