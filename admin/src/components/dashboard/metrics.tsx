'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { TrendingUp, Users, CreditCard, Zap } from 'lucide-react'

const metrics = [
  {
    title: 'Total Revenue',
    value: '₹3.28L',
    change: '+12.5%',
    icon: CreditCard,
    color: 'bg-blue-500/10 text-blue-600',
  },
  {
    title: 'Active Customers',
    value: '24',
    change: '+2 this month',
    icon: Users,
    color: 'bg-purple-500/10 text-purple-600',
  },
  {
    title: 'MRR Growth',
    value: '₹45K',
    change: '+8.2%',
    icon: TrendingUp,
    color: 'bg-green-500/10 text-green-600',
  },
  {
    title: 'Churn Rate',
    value: '2.1%',
    change: '-0.3% vs last month',
    icon: Zap,
    color: 'bg-orange-500/10 text-orange-600',
  },
]

export function DashboardMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {metrics.map((metric, idx) => {
        const Icon = metric.icon
        return (
          <Card key={idx} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {metric.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${metric.color}`}>
                <Icon className="w-4 h-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-1">{metric.value}</div>
              <p className="text-xs text-muted-foreground">{metric.change}</p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
