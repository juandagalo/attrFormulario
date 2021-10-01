import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { SexoPipe } from './pipes/sexo.pipe';
import { LoadingComponent } from './components/loading/loading.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { EncuestaTerminadaPipe } from './pipes/encuesta-terminada.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalCalidadVidaComponent } from './components/modal-calidad-vida/modal-calidad-vida.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormularioComponent,
    FooterComponent,
    SexoPipe,
    LoadingComponent,
    EncuestaTerminadaPipe,
    ModalCalidadVidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    NgbModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
