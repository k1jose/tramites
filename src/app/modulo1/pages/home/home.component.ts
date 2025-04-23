import {AfterViewInit, ChangeDetectionStrategy, Component, inject,} from '@angular/core';
import { Router } from '@angular/router';
import { ItemProcessComponent } from '../../components/process-list/item-process/item-process.component';
import { ChartService } from 'src/app/service/chart.service'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ItemProcessComponent],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent implements AfterViewInit {
  private router = inject(Router);
  private chartService = inject(ChartService);

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

  ngAfterViewInit(): void {
    setTimeout(() => this.renderChart(), 0);
  }

  renderChart(): void {
    const data = [
      this.countByStatus('pending'),
      this.countByStatus('in_progress'),
      this.countByStatus('completed'),
      this.countByStatus('rejected'),
    ];

    this.chartService.createChart('estadoChart', {
      type: 'bar',
      data: {
        labels: ['Pendiente', 'En proceso', 'Completado', 'Rechazado'],
        datasets: [{
          label: 'Trámites',
          data,
          backgroundColor: ['#fbbf24', '#60a5fa', '#34d399', '#f87171'],
          borderRadius: 6,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: { stepSize: 1 },
          },
        },
      }
    });
  }

  countByStatus(status: string): number {
    return this.recentProcesses.filter(p => p.status === status).length;
  }

  goToDetail(id: number): void {
    this.router.navigate(['/process', id]);
  }
}
