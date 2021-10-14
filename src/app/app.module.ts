import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ModalCalidadVidaComponent } from './components/modal-calidad-vida/modal-calidad-vida.component';
import { FormularioPersonaComponent } from './components/formulario-persona/formulario-persona.component';
import { BiomarcadoresComponent } from './components/biomarcadores/biomarcadores.component';
import { HospitalizacionesComponent } from './components/hospitalizaciones/hospitalizaciones.component';
import { CalidadDeVidaComponent } from './components/calidad-de-vida/calidad-de-vida.component';

import { SexoPipe } from './pipes/sexo.pipe';
import { EncuestaTerminadaPipe } from './pipes/encuesta-terminada.pipe';
import { DatePipe } from '@angular/common';
import { HospitalizacionPipe } from './pipes/hospitalizacion.pipe';
import { EncuestaAttrComponent } from './components/encuesta-attr/encuesta-attr.component';
import { ComorbilidadesComponent } from './components/comorbilidades/comorbilidades.component';
import { ComorbilidadPipe } from './pipes/comorbilidad.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormularioComponent,
    FooterComponent,
    SexoPipe,
    LoadingComponent,
    EncuestaTerminadaPipe,
    ModalCalidadVidaComponent,
    HospitalizacionPipe,
    FormularioPersonaComponent,
    BiomarcadoresComponent,
    HospitalizacionesComponent,
    CalidadDeVidaComponent,
    EncuestaAttrComponent,
    ComorbilidadesComponent,
    ComorbilidadPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatMomentDateModule,
    NgbModule,
    NgSelectModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
