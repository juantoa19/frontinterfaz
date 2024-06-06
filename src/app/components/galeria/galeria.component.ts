import { Component, OnInit } from '@angular/core';
import { GaleriaService } from '../../service/galeria/galeria.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {
  images: any[] = [];
  responsiveOptions: any[] = [


    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  constructor(private galeriaService: GaleriaService) { }

  ngOnInit() {
    this.galeriaService.getImages().then(data => {
      console.log('Datos cargados:', data);
      this.images = data;
    }).catch(error => {
      console.error('Error al cargar las imágenes:', error);
      this.images = []; // Asegura que images siempre es un array
    });
  }

  onImageError(event: any, item: any) {
    console.error('Error al cargar la imagen:', item);
    event.target.src = 'assets/placeholder.png'; // Ruta a una imagen de marcador de posición
  }
}