import { Component } from '@angular/core';
import { Team } from '../../home/sections/team/team.component';
import { Testimonials } from '../../home/sections/testimonials/testimonials.component';
import { PageHeader } from '../../../shared/page-header/page-header.component';

@Component({
  selector: 'app-team-page',
  imports: [Team, Testimonials, PageHeader],
  templateUrl: './team-page.component.html',
  styleUrl: './team-page.component.css',
})
export class TeamPage {}
