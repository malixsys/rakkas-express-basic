import { Router } from 'express';
import { ControllerBase } from '../../common/controllerBase';
import { HealthService } from './healthService';

export class HealthController extends ControllerBase {
  static create() {
    return new HealthController(HealthService.create());
  }
  constructor(private countService: HealthService) {
    super('/health');
  }
  mapRoutes(r: Router) {
    r.get('/', (req, res) => {
      res.json(this.getBaseHealth());
    });
  }

  private getBaseHealth() {
    return { health: this.countService.getStart() };
  }
}
