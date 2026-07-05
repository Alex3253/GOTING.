import { Component, AfterViewInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header.component';
import { Footer } from './layout/footer/footer.component';
import { WhatsappButton } from './shared/whatsapp-button/whatsapp-button.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, WhatsappButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class App implements AfterViewInit {
  private observer!: IntersectionObserver;

  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in-view'); }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    this.observeAll();

    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => setTimeout(() => this.observeAll(), 100));
  }

  private observeAll() {
    document.querySelectorAll('.reveal, .reveal-left').forEach(el => {
      this.observer.observe(el);
    });
  }
}
