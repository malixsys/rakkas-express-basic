import { ControllerBase } from '../common/controllerBase';
import { HealthController } from './health/healthController';

export class AppModule extends ControllerBase {
  // poor man's dependency injection
  static create() {
    return new AppModule(HealthController.create());
  }
  constructor(private healthController: HealthController) {
    super('/api');
    this.addControllers(healthController);
  }
}
