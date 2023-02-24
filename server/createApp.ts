import express from 'express';
import { createMiddleware } from 'rakkasjs/node-adapter';
import { AppModule } from './modules/app.module';
import hattipHandler from '../src/entry-hattip';
import { middleware } from './common/httpContext';

export function createApp() {
  const app = express();

  app.use(middleware);

  const appModule = AppModule.create();
  appModule.attachTo(app);

  app.use(createMiddleware(hattipHandler));

  return app;
}
