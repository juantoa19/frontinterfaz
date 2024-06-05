import { Component, OnInit } from '@angular/core';
import { CarrusellService } from '../../service/carrusell/carrusell.service';
import { Productos } from '../../models/carrusell/carrusell';

@Component({
  selector: 'app-carrusell',
  templateUrl: './carrusell.component.html',
})
export class CarrusellComponent implements OnInit {
  products: Productos[] = [];
  responsiveOptions: any; // Define responsiveOptions aquí

  constructor(private carrusellService: CarrusellService) {
    // Define tus opciones de responsividad aquí
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit() {
    this.carrusellService.getProductos().subscribe({
      next: (products) => {
        this.products = products;
      },
      error: (error) => {
        console.error('Error al obtener productos:', error);
        // Aquí puedes manejar el error de la forma que desees, por ejemplo, mostrar un mensaje de error al usuario.
      }
    });
  }
}