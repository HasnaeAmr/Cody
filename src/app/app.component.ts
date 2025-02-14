import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { Icard } from './app.component.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular Core -';
  data = {
    title: 'Hasnae Amarmach'
  }
  onLogoClicked(): void {
    alert('Hello Hasnae !')
  }
  onkeyup(title: string) : void {
    this.data.title = title;
  }
  readonly cards: Array<Icard> = [
  {
    id: 1,
    title: "Ang 1",
    description: "dessc 1 dessc 1 desscdes scdess cdesscdesscdesscdesscdesscdesscdesscdesscdesscdesscdesscdessc"

  },
  {
    id: 2,
    title: "Ang 2",
    description: "dessc 2 dessc 2 desscdes scdess cdesscdesscdesscdesscdesscdesscdesscdesscdesscdesscdesscdessc"

  },
  {
    id: 3,
    title: "Ang 3",
    description: "dessc 2 dessc 2 desscdes scdess cdesscdesscdesscdesscdesscdesscdesscdesscdesscdesscdesscdessc"

  }
]

  changeTitle(newTitle: string){
    console.log("i have received the new title! dw , it s : ", newTitle)
  }
}
