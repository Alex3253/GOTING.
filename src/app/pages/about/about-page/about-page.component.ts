import { Component } from '@angular/core';
import { About } from '../../home/sections/about/about.component';
import { PageHeader } from '../../../shared/page-header/page-header.component';

@Component({
  selector: 'app-about-page',
  imports: [About, PageHeader],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css',
})
export class AboutPage {}
