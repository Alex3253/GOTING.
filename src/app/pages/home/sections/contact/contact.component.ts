import { Component, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

emailjs.init({ publicKey: 'QgNgViSoAjj4JMx01' });

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class Appointment {
  showHeading = input(true);

  protected nombre   = '';
  protected telefono = '';
  protected email    = '';
  protected servicio = '';
  protected mensaje  = '';

  protected readonly estado = signal<'idle' | 'enviando' | 'ok' | 'error'>('idle');

  protected async enviar(e: Event) {
    e.preventDefault();
    this.estado.set('enviando');

    try {
      await emailjs.send('service_4ecyvvn', 'template_yvdna0u', {
        nombre:   this.nombre,
        telefono: this.telefono,
        email:    this.email,
        servicio: this.servicio,
        mensaje:  this.mensaje,
        name:     this.nombre,
      });
      this.estado.set('ok');
      this.nombre = this.telefono = this.email = this.servicio = this.mensaje = '';
    } catch {
      this.estado.set('error');
    }
  }
}
