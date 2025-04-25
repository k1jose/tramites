import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-process',
  imports: [RouterLink, RouterModule],
  templateUrl: './process.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProcessComponent {
  mostrarFormulario = false;

  toggleFormulario() {
    this.mostrarFormulario = !this.mostrarFormulario;
  }
 }
