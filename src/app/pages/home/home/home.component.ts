import { Component } from '@angular/core';
import { Portada } from '../sections/main/main.component';
import { CtaBanner } from '../sections/cta-banner/cta-banner.component';

@Component({
  selector: 'app-home',
  imports: [Portada, CtaBanner],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class Home {}
