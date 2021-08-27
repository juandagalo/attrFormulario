import { Injectable } from '@angular/core';

@Injectable({
  providedIn:  'root'
})
export class FormularioMlfhService {

  private ForumlarioMLFH: any[] = [
    [
    {name: '¿La insuficiencia cardíaca le ha impedido vivir como quería durante el último mes: '},
    {name: '¿Causando hinchazón en los tobillos, las piernas, etc.'},
    {name: '¿Haciendo que se siente o se acueste para descansar durante el día?'}],

    [
    {name: '¿Haciendo que le resulte difícil caminar o subir escaleras?'},
    {name: '¿Dificultando el trabajo en casa o en el jardín.'},
    {name: '¿Dificultandole ir a lugares fuera de la  casa?'}],

    [
    {name: '¿Dificultandole dormir bien por la noche?'},
    {name: '¿Dificultando la relación o las actividades con sus amigos o su familia?'},
    {name: '¿Dificulta su trabajo para ganarse la vida?'}],
    
    [
    {name: '¿Dificultando sus pasatiempos, deportes o aficiones?'},
    {name: '¿Dificultando sus actividades sexuales?'},
    {name: '¿Le hace comer menos de los alimentos que le gustan?'}],

    [
    {name: '¿Le hace perder la respiración?'},
    {name: '¿Se siente cansado, fatigado o con poca energía?'},
    {name: '¿Le hace permanecer en un hospital?'}],

    [
    {name: '¿Le cuesta dinero la atención médica?'},
    {name: '¿Producirle efectos secundarios de los medicamentos?'},
    {name: '¿Le hace sentir que es una carga para su familia o amigos?'}],

    [
    {name: '¿Le hace sentir una pérdida de autocontrol en su vida?'},
    {name: '¿Le hace preocuparse? '},
    {name: 'Le hace difícil concentrarse o recordar cosas?'}],
    
    [
    {name: '¿Le hace sentirse deprimido?'}]
  ];

  constructor() { }

  // tslint:disable-next-line: typedef
  getforumlariomlfh(){
    return this.ForumlarioMLFH;
  }
}
