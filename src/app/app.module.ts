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
import { MenubarModule } from 'primeng/menubar';
import { HomeComponent } from './home/home.component';
import { ImageModule } from 'primeng/image';
import { GalleriaModule } from 'primeng/galleria';

@NgModule({
  declarations: [
    AppComponent,
    BotonesComponent,
    MensajesComponent,
    MediaComponent,
    OrganizacionInformacionComponent,
    OrganizacionTextoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    SplitButtonModule,
    ToastModule,
    BrowserAnimationsModule,
    MenubarModule, 
    ImageModule,
    GalleriaModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
