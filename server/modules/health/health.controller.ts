import { Router } from 'express';
import { ControllerBase } from '../../common/controllerBase';
import { HealthService } from './health.service';
import { Inject } from '../../common/Hydrate';
import { LoggerService } from '../logger.service';

@Inject([HealthService, LoggerService])
export class HealthController extends ControllerBase {
  constructor(private healthService: HealthService, private logger: LoggerService) {
    super('/health');
  }

  mapRoutes(r: Router) {
    r.get('/', (req, res) => {
      res.json(this.logger.log(this.getHealth()));
    });
  }

  private getHealth() {
    return { health: this.healthService.getStart() };
  }
}
