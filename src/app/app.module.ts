import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BotonesComponent } from './botones/botones.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { MediaComponent } from './media/media.component';
import { OrganizacionInformacionComponent } from './organizacion-informacion/organizacion-informacion.component';
import { OrganizacionTextoComponent } from './organizacion-texto/organizacion-texto.component';

@NgModule({
  declarations: [
    AppComponent,
    BotonesComponent,
    MensajesComponent,
    MediaComponent,
    OrganizacionInformacionComponent,
    OrganizacionTextoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    SplitButtonModule,
    ToastModule,
    BrowserAnimationsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
