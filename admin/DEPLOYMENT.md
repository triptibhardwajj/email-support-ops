# Admin Dashboard - Production Ready

## 🚀 Deployment Guide

### Prerequisites
- Node.js 18+
- npm/yarn
- Vercel account (for frontend)
- PostgreSQL database
- Backend API running

### Environment Variables

Create `.env.local`:

```env
# API Configuration
NEXT_PUBLIC_API_URL=https://api.yourdomain.com

# Authentication (Optional)
NEXTAUTH_URL=https://admin.yourdomain.com
NEXTAUTH_SECRET=your-secret-key

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=your-ga-id
```

### Local Development

```bash
cd admin
npm install
npm run dev
# Open http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

#### Option 1: Using Vercel CLI

```bash
npm i -g vercel
vercel
```

#### Option 2: GitHub Integration

1. Push to GitHub
2. Connect repo to Vercel
3. Set environment variables
4. Deploy automatically on push

### Deploy Backend

Your Express backend should be deployed to Railway or AWS.

```bash
cd ..
# Deploy to Railway
railway deploy

# Or AWS
aws deploy
```

### Production Checklist

- [ ] Set `NEXT_PUBLIC_API_URL` to production backend
- [ ] Enable authentication
- [ ] Setup SSL/TLS
- [ ] Enable CORS on backend
- [ ] Configure database backups
- [ ] Setup monitoring and logs
- [ ] Enable rate limiting
- [ ] Setup CDN for static assets
- [ ] Configure error tracking (Sentry)
- [ ] Setup analytics

## 📊 Features

### Pages Included

- ✅ Dashboard - Overview and KPIs
- ✅ Customers - Customer management
- ✅ Billing - Invoice tracking
- ✅ Analytics - Detailed metrics
- ✅ Team - Member management
- ✅ Settings - Configuration
- ✅ Customer Dashboard - Client-facing tickets
- ✅ Ticket Detail - Individual ticket view

### Architecture

```
admin/
├── src/
│   ├── app/              # Next.js App Router
│   ├── components/       # React components
│   ├── lib/              # Utilities & API
│   ├── hooks/            # Custom React hooks
│   ├── config/           # Configuration
│   └── styles/           # Global styles
├── public/               # Static assets
└── package.json
```

## 🔐 Security

- Use HTTPS in production
- Enable CORS properly
- Store secrets in environment variables
- Use JWT for authentication
- Implement rate limiting
- Validate all inputs
- Use security headers

## 📈 Performance

- Optimized images
- Code splitting
- Lazy loading
- Server-side rendering where needed
- Static generation for public pages

## 🐛 Debugging

Enable debug mode:

```bash
npm run dev -- --debug
```

## 📞 Support

For issues, check:
- Backend API logs
- Browser console
- Network tab
- Server logs

## 📝 License

MIT
