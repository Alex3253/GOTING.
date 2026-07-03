import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class Hero {
  protected readonly stats = [
    { value: '15+', label: 'Años de experiencia' },
    { value: '8k+', label: 'Clientes satisfechos' },
    { value: '20+', label: 'Profesionales' },
    { value: '100%', label: 'Compromiso' },
  ];

  private readonly clientLogos = [
    'client1.png',
    'client2.png',
    'client3.png',
    'client4.png',
    'client5.png',
    'client6.png',
  ];

  protected readonly clientLogosLoop = [...this.clientLogos, ...this.clientLogos];
}
