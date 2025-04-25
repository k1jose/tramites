import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-procedure',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './add-procedure.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AddProcedureComponent { 
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: [''],
      tipo: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: [''],
    });
  }

  guardar() {
    if (this.form.valid) {
      console.log('Formulario enviado:', this.form.value);
      // Aquí podrías enviar los datos a un servicio o backend
    } else {
      this.form.markAllAsTouched();
    }
  }
}
