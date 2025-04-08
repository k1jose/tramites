import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-pending-procedures',
  imports: [RouterModule],
  templateUrl: './pending-procedures.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PendingProceduresComponent {
  procedures = [
    {
      id: '01',
      nombre: 'Fresa',
      apellido: 'Fresita',
      tipo: 'Certificado de estudio',
      imagen: '👁️',
    },
    {
      id: '02',
      nombre: 'Pablo',
      apellido: 'Saco Clavito',
      tipo: 'Título de propiedad',
      imagen: '👁️',
    },
  ];
 }
