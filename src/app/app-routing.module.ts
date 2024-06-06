import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BotonesComponent } from './components/botones/botones.component';
import { MediaComponent } from './components/media/media.component';
import { MensajesComponent } from './components/mensajes/mensajes.component';
import { OrganizacionInformacionComponent } from './components/organizacion-informacion/organizacion-informacion.component';
import { OrganizacionTextoComponent } from './components/organizacion-texto/organizacion-texto.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CarrusellComponent } from './components/carrusell/carrusell.component';
import { GaleriaComponent } from './components/galeria/galeria.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'botones', component: BotonesComponent },
  { path: 'media', component: MediaComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'carrusell', component: CarrusellComponent },
  { path: 'mensajes', component: MensajesComponent },
  { path: 'organizacionInfo', component: OrganizacionInformacionComponent },
  { path: 'organizacionTexto', component: OrganizacionTextoComponent },

  { path: '**', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
