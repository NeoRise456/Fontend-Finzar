import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FinzarHeaderComponent} from "./public/components/finzar-header/finzar-header.component";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, FinzarHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'newFinzar';
}
