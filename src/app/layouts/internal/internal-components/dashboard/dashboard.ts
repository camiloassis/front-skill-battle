import { Component, signal } from '@angular/core';
import { ResumeCard } from '../../../../shared/models/resumeCards';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {


  resumeCards = signal<ResumeCard[]>([])

}
