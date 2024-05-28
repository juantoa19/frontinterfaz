import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BotonesComponent } from './botones/botones.component';
import { MediaComponent } from './media/media.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { OrganizacionInformacionComponent } from './organizacion-informacion/organizacion-informacion.component';
import { OrganizacionTextoComponent } from './organizacion-texto/organizacion-texto.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: 'botones', component: BotonesComponent },
  { path: 'media', component: MediaComponent },
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
