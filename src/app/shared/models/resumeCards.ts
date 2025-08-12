import { LucideIconData } from 'lucide-angular';

export interface ResumeCard {
    icon: LucideIconData;
    label: string;
    value: number | string;
    bgColor: string;
    color: string;
}