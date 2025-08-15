import {
  ChangeDetectorRef,
  Component,
  computed,
  effect,
  inject,
  signal,
  Signal,
} from '@angular/core';
import { DashboardService } from './service/dashboard-service';
import { map, Observable } from 'rxjs';
import { ResumeCard } from '../../../../shared/models/resumeCards';
import {
  Plus,
  Trophy,
  Clock,
  Users,
  Play,
  Settings,
  LogOut,
  Zap,
  LucideAngularModule,
} from 'lucide-angular';
import { AsyncPipe } from '@angular/common';
import { InternalService } from '../../internal.service';
import { User } from '../../../../shared/models/User';
import { Button } from "../../../../shared/components/button/button";

@Component({
  selector: 'app-dashboard',
  imports: [LucideAngularModule, Button, AsyncPipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  private internalService = inject(InternalService);


   public readonly resumeCards$: Observable<ResumeCard[]> = this.internalService.getLoggedUser().pipe(
    map(user => this.buildResumeCards(user, user?.quizzes?.length ?? 0))
  );


   buildResumeCards(user: User | null, quizzesCount: number): ResumeCard[] {
    if (!user) {
      return [];
    }
    return [
      {
        icon: Trophy,
        label: 'Pontuação Total',
        value: user.totalScore,
        bgColor: '#f0b0007a',
        color: 'orange',
      },
      {
        icon: Play,
        label: 'Partidas Jogadas',
        value: user.gamesPlayed,
        bgColor: '#3160f860',
        color: 'blue',
      },
      {
        icon: Users,
        label: 'Vitórias',
        value: user.wins,
        bgColor: '#08793ba8',
        color: 'green',
      },
      {
        icon: Clock,
        label: 'Meus Quizzes',
        value: quizzesCount,
        bgColor: '#dc00f06b',
        color: 'pink',
      },
    ];
  }
}
