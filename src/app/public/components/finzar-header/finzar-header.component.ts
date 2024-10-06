import { Component } from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule, MatMenuTrigger} from "@angular/material/menu";
import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-finzar-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatMenuTrigger, MatMenuModule, RouterLink],
  templateUrl: './finzar-header.component.html',
  styleUrl: './finzar-header.component.css'
})
export class FinzarHeaderComponent {

}
