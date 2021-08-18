import { Injectable } from '@angular/core';

@Injectable({
  providedIn:  'root'
})
export class FormularioMlfhService {

  private ForumlarioMLFH: any[] = [
    [{name: '¿La insuficiencia cardíaca le ha impedido vivir como quería durante el último mes: ',
      options: {
        option1: 0,
        option2: 1,
        option3: 2,
        option4: 3,
        option5: 4,
        option6: 5
      }
    },
    {name: '¿Causando hinchazón en los tobillos, las piernas, etc.',
      options: {
        option1: 0,
        option2: 1,
        option3: 2,
        option4: 3,
        option5: 4,
        option6: 5
      }
    },
    {name: '¿Haciendo que se siente o se acueste para descansar durante el día?',
      options: {
        option1: 0,
        option2: 1,
        option3: 2,
        option4: 3,
        option5: 4,
        option6: 5
      }
    }, ],
    [{name: '¿Haciendo que le resulte difícil caminar o subir escaleras?',
      options: {
        option1: 0,
        option2: 1,
        option3: 2,
        option4: 3,
        option5: 4,
        option6: 5
      }
    },
    {name: '¿Dificultando el trabajo en casa o en el jardín.',
      options: {
        option1: 0,
        option2: 1,
        option3: 2,
        option4: 3,
        option5: 4,
        option6: 5
      }
    },
    {name: '¿Dificultandole ir a lugares fuera de la  casa?',
      options: {
        option1: 0,
        option2: 1,
        option3: 2,
        option4: 3,
        option5: 4,
        option6: 5
      }
    }, ],
    [{name: '¿Dificultandole dormir bien por la noche?',
      options: {
        option1: 0,
        option2: 1,
        option3: 2,
        option4: 3,
        option5: 4,
        option6: 5
      }
    },
    {name: '¿Dificultando la relación o las actividades con sus amigos o su familia?',
      options: {
        option1: 0,
        option2: 1,
        option3: 2,
        option4: 3,
        option5: 4,
        option6: 5
      }
    },
    {name: '¿Dificulta su trabajo para ganarse la vida?',
      options: {
        option1: 0,
        option2: 1,
        option3: 2,
        option4: 3,
        option5: 4,
        option6: 5
      }
    }, ],
    [{name: '¿Dificultando sus pasatiempos, deportes o aficiones?',
      options: {
        option1: 0,
        option2: 1,
        option3: 2,
        option4: 3,
        option5: 4,
        option6: 5
      }
    },
    {name: '¿Dificultando sus actividades sexuales?',
      options: {
        option1: 0,
        option2: 1,
        option3: 2,
        option4: 3,
        option5: 4,
        option6: 5
      }
    },
    {name: '¿Le hace comer menos de los alimentos que le gustan?',
      options: {
        option1: 0,
        option2: 1,
        option3: 2,
        option4: 3,
        option5: 4,
        option6: 5
      }
    }, ],
    [{name: '¿Le hace perder la respiración?',
      options: {
        option1: 0,
        option2: 1,
        option3: 2,
        option4: 3,
        option5: 4,
        option6: 5
      }
    },
    {name: '¿Se siente cansado, fatigado o con poca energía?',
      options: {
        option1: 0,
        option2: 1,
        option3: 2,
        option4: 3,
        option5: 4,
        option6: 5
      }
    },
    {name: '¿Le hace permanecer en un hospital?',
      options: {
        option1: 0,
        option2: 1,
        option3: 2,
        option4: 3,
        option5: 4,
        option6: 5
      }
    }, ],
    [{name: '¿Le cuesta dinero la atención médica?',
      options: {
        option1: 0,
        option2: 1,
        option3: 2,
        option4: 3,
        option5: 4,
        option6: 5
      }
    },
    {name: '¿Producirle efectos secundarios de los medicamentos?',
      options: {
        option1: 0,
        option2: 1,
        option3: 2,
        option4: 3,
        option5: 4,
        option6: 5
      }
    },
    {name: '¿Le hace sentir que es una carga para su familia o amigos?',
      options: {
        option1: 0,
        option2: 1,
        option3: 2,
        option4: 3,
        option5: 4,
        option6: 5
      }
    }, ],
    [{name: '¿Le hace sentir una pérdida de autocontrol en su vida?',
      options: {
        option1: 0,
        option2: 1,
        option3: 2,
        option4: 3,
        option5: 4,
        option6: 5
      }
    },
    {name: '¿Le hace preocuparse? ',
      options: {
        option1: 0,
        option2: 1,
        option3: 2,
        option4: 3,
        option5: 4,
        option6: 5
      }
    },
    {name: 'Le hace difícil concentrarse o recordar cosas?',
      options: {
        option1: 0,
        option2: 1,
        option3: 2,
        option4: 3,
        option5: 4,
        option6: 5
      }
    }, ],
    [{name: '¿Le hace sentirse deprimido?',
      options: {
        option1: 0,
        option2: 1,
        option3: 2,
        option4: 3,
        option5: 4,
        option6: 5
      }
    }]
  ];

  constructor() { }

  // tslint:disable-next-line: typedef
  getforumlariomlfh(){
    return this.ForumlarioMLFH;
  }
}
