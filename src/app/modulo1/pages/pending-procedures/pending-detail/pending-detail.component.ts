import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pending-detail',
  imports: [RouterModule],
  templateUrl: './pending-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<p>Detalle del trámite con ID: {{ id }}</p>`,
})
export default class PendingDetailComponent {
  id: string | null;

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  tramite = {
    id: 1,
    nombre: 'Juan Pérez',
    tipo: 'DNI',
    // otros campos...
  };
  
 }
