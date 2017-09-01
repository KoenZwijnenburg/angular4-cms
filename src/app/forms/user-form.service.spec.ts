import { TestBed, inject } from '@angular/core/testing';

import { UserFormService } from './user-form.service';

describe('UserFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserFormService]
    });
  });

  it('should ...', inject([UserFormService], (service: UserFormService) => {
    expect(service).toBeTruthy();
  }));
});
