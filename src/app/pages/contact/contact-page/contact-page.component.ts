import { Component } from '@angular/core';
import { Appointment } from '../../home/sections/contact/contact.component';
import { PageHeader } from '../../../shared/page-header/page-header.component';

@Component({
  selector: 'app-contact-page',
  imports: [Appointment, PageHeader],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css',
})
export class ContactPage {}
