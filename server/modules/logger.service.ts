export class LoggerService {
  log<T>(msg: T): T {
    console.log('[LOG]', msg);
    return msg;
  }
}
