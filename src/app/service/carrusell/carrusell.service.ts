import { Injectable } from '@angular/core';
import {Productos} from '../../models/carrusell/carrusell';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarrusellService {

 status:string[] = ['OUTOFSTOCK', 'INSTOCK', 'LOWSTOCK'];

 productNames: string[] = [
  'Bamboo Watch',
  'Black Watch',
  'Blue Band',
  'Blue T-Shirt',
  'Bamboo Watch',
  'Black Watch',
  'Blue Band',
  'Blue T-Shirt'

 ]

  getProducts(){
    return this.http
    .get<any>('assets/config/carrusel.json')
    .toPromise()
    .then(res => <Productos[]>res.data)
    .then(data => {
      return data;
    });
  }

  constructor(private http:HttpClient) { }
}
