# ETRAV Support Operations Backend

A premium, production-ready backend for a support operations platform built with Express, TypeScript, and PostgreSQL.

## 🚀 Features

- **Workspace Management**: Multi-tenant architecture with workspaces and teams
- **Ticket Management**: Complete ticket lifecycle management with SLA tracking
- **Gmail Integration**: Sync and manage emails as tickets
- **Agent Performance**: Track agent metrics and SLA compliance
- **Advanced Analytics**: Real-time dashboards with comprehensive metrics
- **Automation**: Automated ticket routing and workflows
- **Billing**: Subscription management with invoicing
- **Security**: JWT authentication, rate limiting, input validation

## 📋 Prerequisites

- Node.js 18+
- PostgreSQL 14+
- npm or yarn

## 🛠️ Setup

### 1. Clone and Install

```bash
git clone https://github.com/triptibhardwajj/email-support-ops.git
cd email-support-ops
npm install
```

### 2. Environment Variables

```bash
cp .env.example .env
```

Fill in the required values in `.env`:
- `DATABASE_URL`: PostgreSQL connection string
- `JWT_SECRET`: Secret key for JWT tokens
- `GOOGLE_CLIENT_ID` & `GOOGLE_CLIENT_SECRET`: From Google Cloud Console
- Other optional services (Stripe, SendGrid)

### 3. Database Setup

```bash
# Push schema to database
npm run db:push

# Or run migrations
npm run db:migrate

# Open Prisma Studio
npm run db:studio
```

### 4. Start Development Server

```bash
npm run dev
```

Server will be running at `http://localhost:3000`

## 📚 API Documentation

### Health Check
```
GET /health
```

### Workspaces
```
POST /api/workspaces
GET /api/workspaces/:id
GET /api/workspaces/:id/stats
```

### Tickets
```
GET /api/tickets
GET /api/tickets/:id
PATCH /api/tickets/:id/assign
PATCH /api/tickets/:id/status
```

### Analytics
```
GET /api/analytics/metrics
GET /api/analytics/agent-performance
GET /api/analytics/category-breakdown
GET /api/analytics/status-distribution
```

## 🗄️ Database Schema

- **Workspace**: Organization and subscription management
- **Member**: Team members and agents
- **Ticket**: Support tickets with SLA tracking
- **GmailAccount**: Gmail integration and sync status
- **Agent**: Agent performance metrics
- **Invoice**: Billing and payments

## ��� Authentication

The API uses JWT tokens for authentication. Include the token in the Authorization header:

```
Authorization: Bearer <token>
```

## 🚀 Deployment

### Railway

1. Push to GitHub
2. Connect repository to Railway
3. Add environment variables
4. Deploy

### Docker

```bash
docker build -t etrav-backend .
docker run -p 3000:3000 --env-file .env etrav-backend
```

## 📝 Development

```bash
# Format code
npm run format

# Lint
npm run lint

# Build
npm run build

# Start production
npm run start
```

## 🤝 Contributing

Feel free to open issues and pull requests.

## 📄 License

MIT
