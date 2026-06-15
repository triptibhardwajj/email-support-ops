# ETRAV Admin Dashboard

## 🎨 Premium Admin Dashboard for Operations Management

A beautifully designed, production-ready admin dashboard built with Next.js, React, TypeScript, and Tailwind CSS.

## ✨ Features

- **Dashboard Overview** - Real-time metrics and key statistics
- **Customer Management** - View, manage, and monitor all customers
- **Revenue Analytics** - Track MRR, growth, and billing trends
- **Team Management** - Manage team members and permissions
- **Dark Mode** - Seamless dark/light theme switching
- **Responsive Design** - Mobile, tablet, and desktop optimized
- **Premium UI** - Shadcn UI components with custom styling

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
cd admin
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
admin/
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # React components
│   │   ├── dashboard/    # Dashboard components
│   │   ├── layout/       # Layout components
│   │   ├── ui/           # Reusable UI components
│   │   └── providers.tsx # App providers
│   ├── lib/              # Utilities
│   ├── styles/           # Global styles
│   └── middleware.ts     # Next.js middleware
├── public/               # Static assets
└── package.json
```

## 🎨 Design System

- **Colors**: Primary blue, secondary dark, accent cyan
- **Typography**: Clean, modern sans-serif
- **Components**: Shadcn UI + custom additions
- **Animations**: Smooth transitions and micro-interactions

## 📊 Pages

- `/` - Dashboard with metrics and charts
- `/customers` - Customer management
- `/billing` - Billing and invoices
- `/analytics` - Detailed analytics
- `/settings` - Admin settings

## 🔗 API Integration

The dashboard connects to the backend API at `http://localhost:3000/api`

Environment variables:
```
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## 📝 License

MIT
