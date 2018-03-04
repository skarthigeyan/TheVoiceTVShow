import { TestBed, inject } from '@angular/core/testing';

import { MentorGuardService } from './mentor-guard.service';

describe('MentorGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MentorGuardService]
    });
  });

  it('should be created', inject([MentorGuardService], (service: MentorGuardService) => {
    expect(service).toBeTruthy();
  }));
});
