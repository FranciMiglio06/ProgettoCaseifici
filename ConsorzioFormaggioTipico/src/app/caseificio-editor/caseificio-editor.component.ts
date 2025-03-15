import { Component } from '@angular/core';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'caseificio-editor',
  standalone: true,
  imports: [ButtonModule,FileUploadModule,ImageModule,CommonModule],
  templateUrl: './caseificio-editor.component.html',
  styleUrl: './caseificio-editor.component.scss'
})
export class CaseificioEditorComponent {
  images = [
    {
      itemImageSrc: "/assets/images/logo.png",
      thumbnailImageSrc: "/assets/images/logo.png",
      alt: "Logo",
      title: "Logo"
    }
  ]
}
