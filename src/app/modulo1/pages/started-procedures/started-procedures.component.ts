import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-started-procedures',
  imports: [RouterModule],
  templateUrl: './started-procedures.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StartedProceduresComponent { 
  procedures = [
    { id: 1, nombre: 'Carlos', apellido: 'Rojas', tipo: 'Licencia de conducir' },
    { id: 2, nombre: 'Ana', apellido: 'Pérez', tipo: 'Título profesional' },
  ];
}
