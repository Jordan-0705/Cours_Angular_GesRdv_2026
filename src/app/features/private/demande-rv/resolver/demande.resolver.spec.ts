import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { demandeResolver } from './demande.resolver';

describe('demandeResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => demandeResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
