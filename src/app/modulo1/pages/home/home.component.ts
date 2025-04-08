import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ItemProcessComponent } from '../../components/process-list/item-process/item-process.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ItemProcessComponent],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent { 
  private router = inject(Router);

  summaryCards = [
    { label: 'Total', value: 120 },
    { label: 'Pendientes', value: 34 },
    { label: 'En proceso', value: 50 },
    { label: 'Completados', value: 30 },
    { label: 'Rechazados', value: 6 },
  ];

  recentProcesses = [
    {
      id: 1,
      title: 'Solicitud de licencia',
      createdAt: new Date('2025-04-01'),
      status: 'pending' as const,
    },
    {
      id: 2,
      title: 'Reclamo por servicio',
      createdAt: new Date('2025-03-29'),
      status: 'in_progress' as const,
    },
    {
      id: 3,
      title: 'Petición de acceso a datos',
      createdAt: new Date('2025-03-27'),
      status: 'completed' as const,
    },
  ];

  goToDetail(id: number) {
    this.router.navigate(['/process', id]);
  }
}
