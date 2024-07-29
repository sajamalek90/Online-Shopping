import { Component } from '@angular/core';
import { RouterOutlet,RouterLink} from '@angular/router';

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.css'
})
export class CollectionComponent {


}
