import { context } from '../../common/httpContext';

export class HealthService {
  getStart() {
    return context.get('DB').start;
  }
}
