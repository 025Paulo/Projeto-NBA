import {Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';

/**
 * @title Card with media size
 */
@Component({
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css'],
  standalone: true,
  imports: [MatCardModule],
})
export class CardComponent {
}
