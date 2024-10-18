import { Component } from '@angular/core';
import {MapViewerComponent} from "../map-viewer/map-viewer.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    MapViewerComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
