import { TestBed } from '@angular/core/testing';

import { TeletijdmachineService } from './teletijdmachine.service';

describe('TeletijdmachineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeletijdmachineService = TestBed.get(TeletijdmachineService);
    expect(service).toBeTruthy();
  });
});
