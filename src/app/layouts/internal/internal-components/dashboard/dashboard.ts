import { Component, computed, inject, Signal,  } from '@angular/core';
import { DashboardService } from './service/dashboard-service';
import { Observable } from 'rxjs';
import { ResumeCard } from '../../../../shared/models/resumeCards';
import { Plus, Trophy, Clock, Users, Play, Settings, LogOut, Zap, LucideAngularModule } from "lucide-angular"
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [AsyncPipe, LucideAngularModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

  private readonly dashService = inject(DashboardService)

  public resumeCards: Signal<Observable<ResumeCard[]>>


  mock: ResumeCard[] = [
    {
      icon: Trophy,
      label: 'Pontuação Total',
      value: 3400,
      bgColor: '#f0b0007a',
      color: 'orange'
    },
     {
      icon: Play,
      label: 'Partidas Jogadas',
      value: 15,
      bgColor: '#3160f860',
      color: 'blue'
    },
    
     {
      icon: Users,
      label: 'Vitórias',
      value: 10,
      bgColor: '#08793ba8',
      color: 'green'
    },
    
     {
      icon: Clock,
      label: 'Meus Quizzes',
      value: 3,
      bgColor: '#dc00f06b',
      color: 'pink'
    },
    
    
  ]

  constructor(){
    this.resumeCards = computed( () => this.dashService.getResume(''))

  }

}
