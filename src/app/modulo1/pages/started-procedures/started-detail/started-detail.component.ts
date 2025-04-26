import { ChangeDetectionStrategy, ChangeDetectorRef,Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-started-detail',
  imports: [ReactiveFormsModule, RouterModule, FormsModule, CommonModule],
  templateUrl: './started-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StartedDetailComponent {
  form: FormGroup;
  observacion: string = '';

  casillaVerificacion = [
    { nombre: 'tamaño de fotografia', seleccionado: true },
    { nombre: 'documento vigente', seleccionado: true },
    { nombre: 'documento de colores', seleccionado: false },
    { nombre: 'documento bueno', seleccionado: false },
    { nombre: 'documento nice', seleccionado: false },
  ];

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      fecha: ['', Validators.required],
      tipo: ['', Validators.required],
      subtipo: ['', Validators.required],
      observacion: [''], // 👈 aquí lo agregas
      checkboxes: this.fb.array([]),
    });

    this.inicializarCheckboxes();
  }

  get checkboxesFormArray(): FormArray {
    return this.form.get('checkboxes') as FormArray;
  }

  inicializarCheckboxes() {
    this.casillaVerificacion.forEach(item => {
      this.checkboxesFormArray.push(new FormControl(item.seleccionado));
    });
  }

  guardar() {
    console.log('✅ Trámite guardado.');
    console.log('Observación:', this.observacion);
    console.log('Checkboxes:', this.checkboxesFormArray.value);
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