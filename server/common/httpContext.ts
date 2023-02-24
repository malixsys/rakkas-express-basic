import { createNamespace } from 'cls-hooked';
import express from 'express';

const session = createNamespace('Session');

export const context = {
  get(key: string): any {
    return session.get(key);
  },
  set<T>(key: string, value: T) {
    return session.set<T>(key, value);
  }
};

export function middleware(req: express.Request, res: express.Response, next: express.NextFunction) {
  session.run(() => {
    context.set('DB', { start: new Date() });
    next();
  });
}
