import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [RouterLink],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class Portada implements OnInit, OnDestroy {
  protected readonly stats = [
    { value: '15+', label: 'Años de experiencia' },
    { value: '8k+', label: 'Clientes satisfechos' },
    { value: '20+', label: 'Profesionales' },
    { value: '100%', label: 'Compromiso' },
  ];

  protected readonly heroImages = [
    { src: '/img-dr-1.jpeg', position: 'object-center max-sm:object-[100%_50%]' },
    { src: '/img-dr-3.png', position: 'object-[70%_25%]' },
    { src: '/img-dr-2.jpg', position: 'object-center max-sm:object-[42%_50%]' },
  ];
  protected readonly activeSlide = signal(0);
  private slideTimer?: ReturnType<typeof setInterval>;

  ngOnInit() {
    this.slideTimer = setInterval(() => {
      this.activeSlide.update((i) => (i + 1) % this.heroImages.length);
    }, 5000);
  }

  ngOnDestroy() {
    if (this.slideTimer) clearInterval(this.slideTimer);
  }

  protected goToSlide(i: number) {
    this.activeSlide.set(i);
  }

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
