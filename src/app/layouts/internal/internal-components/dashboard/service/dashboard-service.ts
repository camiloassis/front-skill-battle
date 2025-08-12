import { Injectable, signal } from '@angular/core';
import { ResumeCard } from '../../../../../shared/models/resumeCards';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private readonly http: HttpClient){

  }


  resumeCards = signal<ResumeCard[]>([])


  getResume(endpoint: string): Observable<ResumeCard[]>{
    return this.http.get<ResumeCard[]>(endpoint).pipe(res => res)
  }
  
  
}
