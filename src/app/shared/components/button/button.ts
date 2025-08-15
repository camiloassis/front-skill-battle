import { Component, Input, signal } from '@angular/core';


@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class Button {

 @Input() buttonClass: 'button-primary' | 'button-secondary' = 'button-primary'
 @Input() width: string = 'auto'
 @Input() height: string = 'auto'
 @Input() type: string = ''
 
}
