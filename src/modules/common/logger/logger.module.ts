import { transports, format } from 'winston';
import {
  WinstonModule,
  utilities as nestWinstonModuleUtilities,
} from 'nest-winston';

export const LoggerFactory = (appName: string) => {
  const DEBUG = process.env.DEBUG;

  const consoleFormat = format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD hh:mm:ss.SSS A'
    }),
    format.ms(),
    nestWinstonModuleUtilities.format.nestLike(appName, {
      colors: true,
      prettyPrint: true,
    }),
    format.metadata(),
    format.json(),
    format.align(),
    format.errors()
  );

  return WinstonModule.createLogger({
    level: DEBUG ? 'debug' : 'info',
    transports: [new transports.Console({ format: consoleFormat })],
    
  });
};
