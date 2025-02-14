import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Icard } from '../app.component.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() card: Icard ={} as Icard;
  @Output() titleEvent = new EventEmitter<string>();

  viewFunction(value: string) {
    this.titleEvent.emit(value);
  }
}
