import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import 'express-async-errors';

import { env } from '@/config/env';
import { logger } from '@/utils/logger';
import { setupErrorHandling } from '@/middleware/error';

// Routes
import healthRoutes from '@/routes/health';
import workspaceRoutes from '@/routes/workspace';
import ticketRoutes from '@/routes/tickets';
import analyticsRoutes from '@/routes/analytics';

const app: Express = express();

// Middleware
app.use(helmet());
app.use(cors({
  origin: env.clientUrl,
  credentials: true,
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Request logging
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.path}`);
  next();
});

// Routes
app.use('/health', healthRoutes);
app.use('/api/workspaces', workspaceRoutes);
app.use('/api/tickets', ticketRoutes);
app.use('/api/analytics', analyticsRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: {
      code: 'NOT_FOUND',
      message: 'Route not found',
    },
  });
});

// Error handling
setupErrorHandling(app);

// Start server
const port = env.port;
app.listen(port, () => {
  logger.info(`✅ Server running on http://localhost:${port}`);
  logger.info(`Environment: ${env.nodeEnv}`);
});

export default app;
