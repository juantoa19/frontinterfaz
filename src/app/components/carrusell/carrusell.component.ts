import { Component } from '@angular/core';
import { Productos } from '../../models/carrusell/carrusell';
import { CarrusellService } from '../../service/carrusell/carrusell.service';

@Component({
  selector: 'app-carrusell',
  templateUrl: './carrusell.component.html',
})
export class CarrusellComponent {
  productos: Productos[] = [];

  constructor(private carruselService: CarrusellService) {

  }

  ngOnInit() {
    this.carruselService.getProducts().then(productos => { this.productos = productos })
  }

}
