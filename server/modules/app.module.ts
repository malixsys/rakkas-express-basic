import { ControllerBase } from '../common/controllerBase';
import { HealthController } from './health/health.controller';

export class AppModule extends ControllerBase {
  static deps() {
    return [HealthController];
  }
  constructor(private healthController: HealthController) {
    super('/api');
    this.addControllers(healthController);
  }
}
