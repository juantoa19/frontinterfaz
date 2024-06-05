import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Productos } from '../../models/carrusell/carrusell';

@Injectable({
  providedIn: 'root'
})
export class CarrusellService {


  /* Para llamar por json
  constructor(private http: HttpClient) { }

  getProductos(): Observable<any[]> {
    return this.http.get<any[]>('assets/config/carrusell.json').pipe(
      catchError(error => {
        console.error('Error al cargar el archivo JSON:', error);
        throw 'Error al cargar el archivo JSON: ' + error;
      })
    );
  }
}
  */
  private productos: Productos[] = [
    {
      id: '1',
      name: 'Producto 1',
      image: 'assets/images/producto1.jpg', // Ruta relativa desde la carpeta assets
      price: 100
    },
    {
      id: '2',
      name: 'Producto 2',
      image: 'assets/images/producto2.jpg',
      price: 200
    },

    {
      id: '3',
      name: 'Producto 3',
      image: 'assets/images/producto3.jpg',
      price: 200
    },
    {
      id: '4',
      name: 'Producto 4',
      image: 'assets/images/producto4.jpg',
      price: 200
    },
    {
      id: '5',
      name: 'Producto 5',
      image: 'assets/images/producto5.jpg',
      price: 200
    },
    {
      id: '6',
      name: 'Producto 6',
      image: 'assets/images/producto6.jpg',
      price: 200
    },
    {
      id: '7',
      name: 'Producto 7',
      image: 'assets/images/producto7.jpg',
      price: 200
    },
    // Aquí se agrega productos
  ];

  constructor(private http: HttpClient) { }

  getProductos(): Observable<Productos[]> {
    return new Observable(observer => {
      observer.next(this.productos);
      observer.complete();
    });
  }
}