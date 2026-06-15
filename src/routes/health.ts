import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json({
    success: true,
    message: 'ETRAV Support Backend is running',
    timestamp: new Date().toISOString(),
  });
});

export default router;
