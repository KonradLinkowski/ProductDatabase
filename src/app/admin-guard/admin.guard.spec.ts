import { TestBed, inject } from '@angular/core/testing';

import { AdminGuard } from './admin.guard';
import { AuthService } from '../auth/services/auth/auth.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

const authService: Partial<AuthService> = {
  isAuthenticated: () => of(true)
};

const router: Partial<Router> = {
  navigate: async () => true
};

describe('AdminGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AdminGuard,
        { provide: AuthService, useValue: authService },
        { provide: Router, useValue: router }
      ]
    });
  });

  it('should ...', inject([AdminGuard], (guard: AdminGuard) => {
    expect(guard).toBeTruthy();
  }));
});
