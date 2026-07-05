import { Component, OnDestroy, OnInit, input, signal } from '@angular/core';

@Component({
  selector: 'app-page-header',
  imports: [],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.css',
})
export class PageHeader implements OnInit, OnDestroy {
  eyebrow = input<string>('');
  title = input.required<string>();
  description = input<string>('');
  images = input<string[]>(['/topografia.png']);

  protected readonly activeSlide = signal(0);
  private slideTimer?: ReturnType<typeof setInterval>;

  ngOnInit() {
    if (this.images().length > 1) {
      this.slideTimer = setInterval(() => {
        this.activeSlide.update((i) => (i + 1) % this.images().length);
      }, 5000);
    }
  }

  ngOnDestroy() {
    if (this.slideTimer) clearInterval(this.slideTimer);
  }

  protected goToSlide(i: number) {
    this.activeSlide.set(i);
  }
}
