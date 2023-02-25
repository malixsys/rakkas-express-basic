const DEPS = Symbol('DEPS');

export function Hydrate(clazz: any): any {
  const params = clazz[DEPS]?.().map(Hydrate) ?? [];
  return new clazz(...params);
}

export const Inject = (deps: any[]) => (constructor: any) => {
  constructor[DEPS] = () => deps;
};
