import { TestBed, inject } from '@angular/core/testing';

import { JobsSkillsService } from './jobs-skills.service';

describe('JobsSkillsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobsSkillsService]
    });
  });

  it('should be created', inject([JobsSkillsService], (service: JobsSkillsService) => {
    expect(service).toBeTruthy();
  }));
});
