import { context } from '../../common/httpContext';

export class HealthService {
  static create() {
    return new HealthService();
  }

  constructor() {}

  getStart() {
    return context.get('DB').start;
  }
}
