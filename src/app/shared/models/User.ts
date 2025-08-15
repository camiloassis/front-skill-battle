export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  totalScore: number;
  wins: number;
  losses: number;
  currentWinStreak: number;
  bestWinStreak: number;
  gamesPlayed: number;
  quizzes?: Quiz[];
  matchParticipants?: MatchParticipant[];
  matchResults?: MatchResult[];
}

export type UserSafe = Omit<User, 'password' | 'quizzes' | 'matchParticipants' | 'matchResults'>;

export interface Quiz {
  id: string;
  title: string;
  ownerId: string;
  timePerQuestion: number;
  questions?: Question[];
  matches?: Match[];
}

export interface Question {
  id: string;
  quizId: string;
  text: string;
  options: string[];
  correctIndex: number;
}

export interface Match {
  id: string;
  quizId: string;
  createdAt: string; 
  participants?: MatchParticipant[];
  results?: MatchResult[];
}

export interface MatchParticipant {
  id: string;
  matchId: string;
  userId: string;
  score: number;
  match?: Match;
  user?: UserSafe;
}

export interface MatchResult {
  id: string;
  matchId: string;
  userId: string;
  correctAnswers: number;
  totalTime: number; // em segundos, por exemplo
  match?: Match;
  user?: UserSafe;
}