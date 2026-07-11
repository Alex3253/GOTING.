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
      telefono: '942 678 678',
      email: 'consultas.goting@gmail.com',
      foto: 'equipo/Brayam.png',
      linkedin: 'https://pe.linkedin.com/in/brayamgonzalogomezzapana',
    },
    {
      name: 'Ing. Nohelia Vanessa Fernández Gavilán',
      role: 'Analista Comercial - Ing. Mecánica de Fluidos (UNMSM)',
      cip: null,
      telefono: '930 945 908',
      email: null,
      foto: 'equipo/Noelia.png',
      linkedin: 'https://pe.linkedin.com/in/nohelia-vanessa-fern%C3%A1ndez-gavil%C3%A1n',
    },
    {
      name: 'Lic. Jesús Ramos',
      role: 'Lic. en Geografía (UNMSM)',
      cip: null,
      telefono: '999 999 999',
      email: null,
      foto: 'equipo/Jesus.png',
      linkedin: null,
    },
    {
      name: 'Lic. Yermay Berrocal',
      role: 'Lic. en Geografía (UNMSM)',
      cip: null,
      telefono: '999 999 999',
      email: null,
      foto: 'equipo/YERMAY.png',
      linkedin: null,
    },
    {
      name: 'Ing. Jorge Astuhuaman',
      role: 'Ing. Mecánica de Fluidos (UNMSM)',
      cip: null,
      telefono: '999 999 999',
      email: null,
      foto: 'equipo/JORGE.png',
      linkedin: null,
    },
  ];
}
