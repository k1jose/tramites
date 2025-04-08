import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-finished-procedures',
  imports: [RouterModule],
  templateUrl: './finished-procedures.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FinishedProceduresComponent { 
  procedures = [
    {
      id: 1,
      nombre: 'Ana',
      apellido: 'Torres',
      tipo: 'Certificado de estudios',
      subtipo: 'Primaria',
      fecha: '2024-11-10',
    },
    {
      id: 2,
      nombre: 'Luis',
      apellido: 'Reyes',
      tipo: 'Título de propiedad',
      subtipo: 'Casa urbana',
      fecha: '2024-10-22',
    },
  ];
}
