import pino from 'pino';
import { env } from '@/config/env';

const pinoInstance = pino({
  level: env.logLevel,
  transport: env.nodeEnv === 'development' ? {
    target: 'pino-pretty',
    options: {
      colorize: true,
      singleLine: false,
    },
  } : undefined,
});

export const logger = pinoInstance;
