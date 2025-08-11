import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from "./internal-components/nav-bar/nav-bar";

@Component({
  selector: 'app-internal',
  imports: [RouterOutlet, NavBar],
  templateUrl: './internal.html',
  styleUrl: './internal.scss'
})
export class Internal {

}
