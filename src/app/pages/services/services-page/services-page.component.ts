import { Component } from '@angular/core';
import { Services } from '../../home/sections/services/services.component';
import { PageHeader } from '../../../shared/page-header/page-header.component';

@Component({
  selector: 'app-services-page',
  imports: [Services, PageHeader],
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.css',
})
export class ServicesPage {}
