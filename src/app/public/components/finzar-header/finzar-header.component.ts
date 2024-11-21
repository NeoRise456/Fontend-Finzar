import {Component, inject} from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule, MatMenuTrigger} from "@angular/material/menu";
import {Router, RouterLink} from "@angular/router";


@Component({
  selector: 'app-finzar-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatMenuTrigger, MatMenuModule, RouterLink],
  templateUrl: './finzar-header.component.html',
  styleUrl: './finzar-header.component.css'
})
export class FinzarHeaderComponent {
  private _router = inject(Router)

  logOut() {
    // Temporary routing, implement correctly when authentication is implemented
    this._router.navigate(['/sign-in']);
  }
}
