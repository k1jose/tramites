import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-started-detail',
  imports: [FormsModule],
  templateUrl: './started-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StartedDetailComponent {
  constructor(private router: Router) {}
   // Datos simulados para mostrar requisitos
   requisitos: string[] = [
    'Requisito 1',
    'Requisito 2',
    'Requisito 3',
    'Requisito 4',
    'Requisito 5',
  ];

  observacion: string = '';

  guardar() {
    console.log('✅ Trámite guardado.');
    console.log('Observación:', this.observacion);
  }

  denegar() {
    console.log('❌ Trámite denegado.');
    console.log('Observación:', this.observacion);
  }

  cancelar() {
    console.log('🔙 Acción cancelada.');
  }
  goBack() {
    this.router.navigate(['/dashboard/started-procedures']);
  }
 }
