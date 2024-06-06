import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {

  private jsonUrl = 'assets/config/galeria.json';

  constructor(private http: HttpClient) { }

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonUrl).pipe(
      catchError(error => {
        console.error('Error al cargar el archivo JSON', error);
        return of([]); // Devuelve un array vacío en caso de error
      })
    );
  }

  getImages(): Promise<any[]> {
    return this.getData().toPromise().then(data => data || []); // Asegura que siempre se devuelva un array
  }
}