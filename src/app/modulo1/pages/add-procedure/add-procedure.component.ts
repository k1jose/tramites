import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, FormControl, Validators, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-procedure',
  imports: [ReactiveFormsModule, RouterModule, FormsModule, CommonModule],
  templateUrl: './add-procedure.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AddProcedureComponent {
  form: FormGroup;
  isCheckboxesVisible: boolean = false;  // Controla la visibilidad de las casillas de verificación

  casillaVerificacion = [
    { nombre: 'tamaño de fotografia', seleccionado: true },
    { nombre: 'documento vigente', seleccionado: true },
    { nombre: 'documento de colores', seleccionado: false },
    { nombre: 'documento bueno', seleccionado: false },
    { nombre: 'documento nice', seleccionado: false },
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      fecha: ['', Validators.required],
      tipo: ['', Validators.required],
      subtipo: ['', Validators.required],
      checkboxes: this.fb.array([]),
    });

    this.inicializarCheckboxes();
  }

  // Getter para FormArray
  get checkboxesFormArray(): FormArray<FormControl<boolean>> {
    return this.form.get('checkboxes') as FormArray<FormControl<boolean>>;
  }

  inicializarCheckboxes(): void {
    const array = this.form.get('checkboxes') as FormArray;
    this.casillaVerificacion.forEach(item => {
      array.push(new FormControl(item.seleccionado));
    });
  }

  guardar(): void {
    if (this.form.valid) {
      const seleccionados = this.casillaVerificacion.map((item, index) => ({
        ...item,
        seleccionado: this.checkboxesFormArray.at(index).value
      }));

      console.log('Formulario enviado:', {
        ...this.form.value,
        seleccionados
      });
    } else {
      this.form.markAllAsTouched();
    }
  }

  // Método para cambiar la visibilidad de las casillas de verificación
  toggleCheckboxesVisibility(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    this.isCheckboxesVisible = checkbox.checked;
  }
}
