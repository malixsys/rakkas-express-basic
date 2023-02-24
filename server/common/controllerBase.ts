import { Router } from 'express';

export abstract class ControllerBase {
  private _router: Router;
  private _path: string;

  constructor(path: string) {
    this._path = path;
    this._router = Router();
    this.mapRoutes(this._router);
  }

  addControllers(...controllers: ControllerBase[]) {
    for (const controller of controllers) {
      controller?.attachTo(this._router);
    }
  }

  attachTo(parent: Router) {
    parent.use(this._path, this._router);
  }

  protected mapRoutes(r: Router) {}
}
