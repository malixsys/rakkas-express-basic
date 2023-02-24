import { Router } from 'express';
import { ControllerBase } from '../../common/controllerBase';
import { HealthService } from './health.service';

export class HealthController extends ControllerBase {
  static deps() {
    return [HealthService];
  }
  constructor(private healthService: HealthService) {
    super('/health');
  }

  mapRoutes(r: Router) {
    r.get('/', (req, res) => {
      res.json(this.getBaseHealth());
    });
  }

  private getBaseHealth() {
    return { health: this.healthService.getStart() };
  }
}
