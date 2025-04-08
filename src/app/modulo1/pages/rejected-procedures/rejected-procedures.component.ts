import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-rejected-procedures',
  imports: [RouterModule],
  templateUrl: './rejected-procedures.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RejectedProceduresComponent { 
  procedures = [
    {
      id: 1,
      title: 'Solicitud de Constancia de Estudios',
      date: '2025-04-05',
      motivo: 'Falta de firma del director del área.',
    },
    {
      id: 2,
      title: 'Permiso Temporal de Trabajo',
      date: '2025-04-02',
      motivo: 'Documento ilegible.',
    },
    {
      id: 3,
      title: 'Autorización de Viaje',
      date: '2025-03-28',
      motivo: 'No se adjuntó copia del pasaporte.',
    },
  ];
}
