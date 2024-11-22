import {Component} from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule, MatMenuTrigger} from "@angular/material/menu";
import {RouterLink} from "@angular/router";
import {AuthenticationService} from "../../../iam/services/authentication.service";
import {NgIf} from "@angular/common";


@Component({
  selector: 'app-finzar-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatMenuTrigger, MatMenuModule, RouterLink, NgIf],
  templateUrl: './finzar-header.component.html',
  styleUrl: './finzar-header.component.css'
})
export class FinzarHeaderComponent {

  currentUserName: string = '';
  isSignedIn: boolean = false;

  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.currentUsername.subscribe(
        (username) => this.currentUserName = username
    )
    this.authenticationService.isSignedIn.subscribe(
        (isSignedIn) => this.isSignedIn = isSignedIn
    )
  }

  logOut() {
    this.authenticationService.signOut();
  }
}
