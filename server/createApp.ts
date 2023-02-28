import express from 'express';
import { createMiddleware } from 'rakkasjs/node-adapter';
import { AppModule } from './modules/app.module';
import hattipHandler from '../src/entry-hattip';
import { hydrate, provide } from './common/Hydrate';

const DB = { start: new Date() };
export function createApp() {
  const app = express();

  app.use(provide({ DB }));

  const appModule = hydrate(AppModule);
  appModule.attachTo(app);

  app.use(createMiddleware(hattipHandler));

  return app;
}
