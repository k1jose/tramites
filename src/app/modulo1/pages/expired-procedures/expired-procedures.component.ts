import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-expired-procedures',
  imports: [RouterModule],
  templateUrl: './expired-procedures.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ExpiredProceduresComponent { 
  procedures = [
    {
      id: 1,
      nombre: 'Luis',
      apellido: 'jose',
      tipo: 'certificado de estudios',
      fecha: '2024-02-02',
    },
    {
      id: 2,
      nombre: 'Ana',
      apellido: 'jose',
      tipo: 'registro de propiedad',
      fecha: '2024-01-20',
    }
  ];
}
