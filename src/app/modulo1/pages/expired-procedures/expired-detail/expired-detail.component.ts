import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-expired-detail',
  imports: [RouterModule],
  templateUrl: './expired-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ExpiredDetailComponent {
  tramites = [
    {
      id: 1,
      nombre: 'Juan',
      apellido: 'Pérez',
      tipo: 'certificado',
      subtipo: 'secundaria',
      fecha: '2024-02-12',
    },
    {
      id: 2,
      nombre: 'Ana',
      apellido: 'López',
      tipo: 'título',
      subtipo: 'propiedad',
      fecha: '2024-03-10',
    }
  ];
  
 }
