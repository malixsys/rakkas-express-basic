import { ControllerBase } from '../common/controllerBase';
import { HealthController } from './health/health.controller';
import { Inject } from '../common/Hydrate';

@Inject([HealthController])
export class AppModule extends ControllerBase {
  constructor(private healthController: HealthController) {
    super('/api');
    this.addControllers(healthController);
  }
}
