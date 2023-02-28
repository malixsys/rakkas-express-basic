import { createNamespace } from 'cls-hooked';
import express from 'express';

const session = createNamespace('Session');

export const provide =
  (entries: Record<string, any>) => (req: express.Request, res: express.Response, next: express.NextFunction) => {
    session.run(() => {
      Object.entries(entries).forEach(([k, v]) => session.set(k, v));
      next();
    });
  };

const DEPS = Symbol('DEPS');

export function hydrate(clazz: any): any {
  if (typeof clazz === 'string') {
    return () => session.get(clazz);
  }
  const params = clazz[DEPS]?.().map(hydrate) ?? [];
  return new clazz(...params);
}

export const Inject = (deps: any[]) => (constructor: any) => {
  constructor[DEPS] = () => deps;
};
