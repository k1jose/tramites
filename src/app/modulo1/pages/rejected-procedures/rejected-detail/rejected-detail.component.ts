import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rejected-detail',
  imports: [FormsModule],
  templateUrl: './rejected-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RejectedDetailComponent { 

  title = 'Solicitud de Licencia';
  motivo = 'El documento adjunto no cumple con los requisitos.';
  observacion = '';

  constructor(private route: ActivatedRoute, private router: Router) {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('🧾 ID del trámite rechazado:', id);
  }

  volver() {
    this.router.navigate(['/dashboard/rejected-procedures']);
  }
}
