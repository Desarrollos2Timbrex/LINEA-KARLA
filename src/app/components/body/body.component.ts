import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
    selector: 'app-body',
    imports: [CommonModule],
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.css']
})
export class BodyComponent implements AfterViewInit {
  images = [
    'assets/images/imagen1.jpg',
    'assets/images/imagen2.jpg',
    'assets/images/imagen3.jpg',
    'assets/images/imagen4.jpg',
    'assets/images/imagen5.jpg',
    'assets/images/imagen6.jpg',
    'assets/images/imagen7.jpg',
    'assets/images/imagen8.jpg',
    'assets/images/imagen11.jpg',
    'assets/images/imagen12.jpg',
    'assets/images/imagen13.jpg'
  ];

  @ViewChild('carousel', { static: false }) carousel!: ElementRef;

  scrollAmount = 815; // Ajusta según el tamaño de cada imagen

  ngAfterViewInit() {
    // Asegura que el componente esté completamente inicializado antes de acceder al carousel
    if (this.carousel) {
      const container = this.carousel.nativeElement;

    }
  }

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


