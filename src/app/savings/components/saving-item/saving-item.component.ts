import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-saving-item',
  standalone: true,
  imports: [MatCardModule,MatButtonModule],
  templateUrl: './saving-item.component.html',
  styleUrl: './saving-item.component.css'
})
export class SavingItemComponent {

}
