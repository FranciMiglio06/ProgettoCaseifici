import { Component } from '@angular/core';
import { CaseificioComponent } from '../caseificio/caseificio.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { GalleriaModule} from 'primeng/galleria';
import { GooglemapsComponent } from '../googlemaps/googlemaps.component';

@Component({
  selector: 'consorzio',
  standalone: true,
  imports: [RouterOutlet, CommonModule,FormsModule,CaseificioComponent,HeaderComponent,GalleriaModule,GooglemapsComponent],
  templateUrl: './consorzio.component.html',
  styleUrl: './consorzio.component.scss'
})
export class ConsorzioComponent {
  images = [
    {
      itemImageSrc: "/assets/images/logo.png",
      thumbnailImageSrc: "/assets/images/logo.png",
      alt: "Logo",
      title: "Logo"
    },
    {
      itemImageSrc: "/assets/images/0.jpg",
      thumbnailImageSrc: "/assets/images/0.jpg",
      alt: "Logo1",
      title: "Logo1"
    }
  ];

  responsiveOptions = [
    { breakpoint: '1024px', numVisible: 3 },
    { breakpoint: '768px', numVisible: 2 },
    { breakpoint: '560px', numVisible: 1 }
  ];
}
