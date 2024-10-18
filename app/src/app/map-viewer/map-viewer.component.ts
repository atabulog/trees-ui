import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Map, Marker} from "leaflet";
import * as L from 'leaflet';


@Component({
  selector: 'app-map-viewer',
  standalone: true,
  imports: [],
  templateUrl: './map-viewer.component.html',
  styleUrl: './map-viewer.component.scss'
})
export class MapViewerComponent implements OnInit, AfterViewInit{
  private map!: Map
  private markers: Marker[] = [
    new Marker([31.9539, 35.9106]), // Amman
    new Marker([32.5568, 35.8469]) // Irbid
  ];
  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initializeMap();
    this.addMarkers();
    this.centerMap();
  }

  private initializeMap() {
    const baseMapURl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    this.map = new Map('map');
    L.tileLayer(baseMapURl).addTo(this.map);
  }


  private addMarkers() {
    // Add your markers to the map
    this.markers.forEach(marker => marker.addTo(this.map));
  }

  private centerMap() {
    // Create a LatLngBounds object to encompass all the marker locations
    const bounds = L.latLngBounds(this.markers.map(marker => marker.getLatLng()));

    // Fit the map view to the bounds
    this.map.fitBounds(bounds);
  }
}
