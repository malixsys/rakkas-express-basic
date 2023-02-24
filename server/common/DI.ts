export function DI(clazz: any): any {
  let params = [];
  if (typeof clazz.deps === 'function') {
    const deps = clazz.deps();
    params = deps.map((c: any) => DI(c));
  }
  return new clazz(...params);
}
