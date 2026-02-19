import { Component, inject, NgZone, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '@angular/fire/auth';
import { AuthService } from '../Services/auth';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatMenuModule],
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class Nav implements OnInit, OnDestroy {
  user: User | null = null;
  private authService = inject(AuthService);
  private zone = inject(NgZone);
  private cdr = inject(ChangeDetectorRef);
  private userSub!: Subscription;

  ngOnInit() {
    this.userSub = this.authService.user$.subscribe((userData) => {
      this.zone.run(() => {
        this.user = userData;
        this.cdr.markForCheck();
        this.cdr.detectChanges();
      });
    });
  }

  async login() {
    try {
      await this.authService.loginWithGoogle();
    } catch (error) {
      console.error("Error en login:", error);
    }
  }

  async logout() {
    try {
      await this.authService.logout();
    } catch (error) {
      console.error("Error en logout:", error);
    }
  }

  ngOnDestroy() {
    if (this.userSub) this.userSub.unsubscribe();
  }
}