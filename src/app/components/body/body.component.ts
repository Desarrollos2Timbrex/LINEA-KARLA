import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  //esto no se debe de hacer pero funciona por ahora
  images = [
    'assets/images/imagen1.jpg',
    'assets/images/imagen2.jpg',
    'assets/images/imagen3.jpg',
    'assets/images/imagen4.jpg',
    'assets/images/imagen5.jpg',
    'assets/images/imagen6.jpg',
    'assets/images/imagen7.jpg',
    'assets/images/imagen8.jpg',
    'assets/images/imagen9.jpg',
    'assets/images/imagen10.jpg',
    'assets/images/imagen11.jpg',
    'assets/images/imagen12.jpg',
    'assets/images/imagen13.jpg'
  ];

  @ViewChild('carousel', { static: false }) carousel!: ElementRef;

  scrollAmount = 300; // Ajusta según el tamaño de cada imagen

  moveCarousel(direction: 'next' | 'prev') {
    if (this.carousel) {
      const container = this.carousel.nativeElement;
      if (direction === 'next') {
        container.scrollLeft += this.scrollAmount;
      } else {
        container.scrollLeft -= this.scrollAmount;
      }
    }
  }
}
