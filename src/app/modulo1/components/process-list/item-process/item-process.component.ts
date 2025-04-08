import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventEmitter } from '@angular/core';

type StatusType = 'pending' | 'in_progress' | 'completed' | 'rejected';

@Component({
  selector: 'app-item-process',
  imports: [CommonModule],
  templateUrl: './item-process.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export  class ItemProcessComponent {
  title = input<string>();
  createdAt = input<Date>();
  status = input<StatusType | undefined>(); // Puede ser undefined

  openDetails = output<void>();

  private readonly statusLabels: Record<StatusType, string> = {
    pending: 'Pendiente',
    in_progress: 'En progreso',
    completed: 'Completado',
    rejected: 'Rechazado',
  };

  private readonly statusClasses: Record<StatusType, string> = {
    pending: 'bg-yellow-100 text-yellow-800',
    in_progress: 'bg-blue-100 text-blue-800',
    completed: 'bg-green-100 text-green-800',
    rejected: 'bg-red-100 text-red-800',
  };

  get statusLabel(): string {
    const status = this.status();
    return status ? this.statusLabels[status] : 'Desconocido';
  }

  get statusClass(): string {
    const status = this.status();
    return status ? this.statusClasses[status] : 'bg-gray-100 text-gray-800';
  }

  onClick() {
    this.openDetails.emit();
  }
}
