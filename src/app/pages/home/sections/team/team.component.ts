import { Component, input } from '@angular/core';

@Component({
  selector: 'app-team',
  imports: [],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css',
})
export class Team {
  showHeading = input(true);
  protected readonly team = [
    {
      name: 'Ing. Brayam Gómez Zapana',
      role: 'Gerente General',
      cip: 'CIP 304352',
      foto: null,
    },
    {
      name: 'Ing. Noelia Fernández Gavilán',
      role: 'Analista Comercial',
      cip: null,
      foto: 'imagen1.jpg',
    },
  ];
}
