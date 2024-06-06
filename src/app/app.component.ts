import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'front_angular';
  items: MenuItem[] = [];

  constructor() { }

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-home', routerLink: ['/home'] },
      { label: 'Botones', icon: 'pi pi-home', routerLink: ['/botones'] },
      { label: 'Media', icon: 'pi pi-chart-line', routerLink: ['/media'] },
      { label: 'Galeria', icon: 'pi pi-chart-line', routerLink: ['/galeria'] },
      { label: 'Carrusell', icon: 'pi pi-chart-line', routerLink: ['/carrusell'] },
      { label: 'Card', icon: 'pi pi-chart-line', routerLink: ['/card'] },
      { label: 'Mensajes', icon: 'pi pi-list', routerLink: ['/mensajes'] },
      { label: 'Organización Información', icon: 'pi pi-inbox', routerLink: ['/organizacionInfo'] },
      { label: 'Organización Texto', icon: 'pi pi-inbox', routerLink: ['/organizacionTexto'] }
    ];
  }

  save(action: string) {
    console.log(action);
  }
}


