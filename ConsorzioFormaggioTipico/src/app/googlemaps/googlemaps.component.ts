import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'googlemaps',
  standalone: true,
  imports: [GoogleMapsModule,RouterOutlet],
  templateUrl: './googlemaps.component.html',
  styleUrl: './googlemaps.component.scss'
})
export class GooglemapsComponent implements OnInit {
  // Default center location (Rome, Italy)
  center: google.maps.LatLngLiteral = {lat: 41.9028, lng: 12.4964};
  zoom = 10;
  markers: any[] = [];
  
  ngOnInit() {
    // Get current location if available
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        // Add a marker at user's location
        this.addUserLocationMarker();
      });
    }
  }
  
  addUserLocationMarker() {
    this.markers.push({
      position: {
        lat: this.center.lat,
        lng: this.center.lng
      },
      label: {
        color: 'white',
        text: 'Your Location'
      },
      title: 'Your Current Location'
    });
  }
  
  handleMapClick(event: google.maps.MapMouseEvent) {
    if (event.latLng) {
      this.center = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      };
    }
  }
  
  openInfoWindow(marker: any) {
    console.log('Marker clicked:', marker);
    // Here you could implement an info window or custom popup
  }
  
  addMarker() {
    // Add a new marker at current center position
    this.markers.push({
      position: {
        lat: this.center.lat,
        lng: this.center.lng
      },
      label: {
        color: 'white',
        text: 'M' + (this.markers.length + 1)
      },
      title: 'Marker ' + (this.markers.length + 1)
    });
  }
  
  zoomIn() {
    if (this.zoom < 20) this.zoom++;
  }
  
  zoomOut() {
    if (this.zoom > 1) this.zoom--;
  }}
