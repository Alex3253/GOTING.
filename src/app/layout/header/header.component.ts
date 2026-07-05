import { Component, HostListener, computed, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class Header {
  protected readonly menuAbierto = signal(false);
  protected readonly scrolled = signal(false);
  protected readonly isHome = signal(false);
  protected readonly currentUrl = signal('/');

  protected readonly transparent = computed(
    () => this.isHome() && !this.scrolled() && !this.menuAbierto(),
  );

  protected readonly menuButtonClass = computed(() =>
    this.transparent()
      ? 'lg:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-white/30 text-white hover:border-teal-300 hover:text-teal-300 transition-colors'
      : 'lg:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:border-teal-400 hover:text-teal-600 transition-colors',
  );

  constructor(private router: Router) {
    this.currentUrl.set(this.router.url);
    this.isHome.set(this.router.url === '/');
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        this.currentUrl.set(this.router.url);
        this.isHome.set(this.router.url === '/');
      });
  }

  protected navLinkClass(path: string, exact = false) {
    const active = exact ? this.currentUrl() === path : this.currentUrl().startsWith(path);
    const base = 'px-4 py-2 rounded-lg transition-all duration-200';
    if (this.transparent()) {
      return active
        ? `${base} text-white bg-white/15`
        : `${base} text-white/90 hover:text-white hover:bg-white/10`;
    }
    return active
      ? `${base} text-teal-600 bg-teal-50`
      : `${base} text-slate-600 hover:text-teal-600 hover:bg-teal-50`;
  }

  @HostListener('window:scroll')
  protected onScroll() {
    this.scrolled.set(window.scrollY > 40);
  }

  protected toggleMenu() { this.menuAbierto.update(v => !v); }
  protected cerrarMenu() { this.menuAbierto.set(false); }
}
