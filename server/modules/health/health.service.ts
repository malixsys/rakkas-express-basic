import { hydrate, Inject } from '../../common/Hydrate';

@Inject(['DB'])
export class HealthService {
  constructor(private getDB: any) {}
  getStart() {
    return this.getDB().start;
  }
}
