'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts'

const data = [
  { month: 'Jan', revenue: 45000, customers: 12, tickets: 240 },
  { month: 'Feb', revenue: 52000, customers: 15, tickets: 289 },
  { month: 'Mar', revenue: 48000, customers: 14, tickets: 271 },
  { month: 'Apr', revenue: 61000, customers: 18, tickets: 345 },
  { month: 'May', revenue: 55000, customers: 16, tickets: 312 },
  { month: 'Jun', revenue: 67000, customers: 20, tickets: 378 },
]

export function RevenueChart() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle className="text-2xl">Revenue & Growth</CardTitle>
        <CardDescription>Monthly recurring revenue and customer growth</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '0.5rem',
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              dot={{ fill: 'hsl(var(--primary))', r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="customers"
              stroke="hsl(var(--accent))"
              strokeWidth={2}
              dot={{ fill: 'hsl(var(--accent))', r: 4 }}
              yAxisId="right"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
