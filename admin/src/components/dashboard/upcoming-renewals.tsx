'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, AlertCircle } from 'lucide-react'

const renewals = [
  {
    id: 1,
    customer: 'ETRAV Support',
    plan: 'Professional',
    amount: '₹29,999',
    renewalDate: '2026-06-25',
    daysLeft: 10,
  },
  {
    id: 2,
    customer: 'TravelCo Airlines',
    plan: 'Growth',
    amount: '₹14,999',
    renewalDate: '2026-06-28',
    daysLeft: 13,
  },
  {
    id: 3,
    customer: 'Booking.com Clone',
    plan: 'Starter',
    amount: '₹4,999',
    renewalDate: '2026-07-05',
    daysLeft: 20,
  },
]

export function UpcomingRenewals() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          Upcoming Renewals
        </CardTitle>
        <CardDescription>Next 30 days</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {renewals.map((renewal) => (
            <div key={renewal.id} className="p-3 rounded-lg bg-muted/30 border border-muted">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-semibold text-sm text-foreground">{renewal.customer}</p>
                  <p className="text-xs text-muted-foreground">{renewal.plan}</p>
                </div>
                <Badge variant="outline">{renewal.daysLeft}d</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-primary">{renewal.amount}</span>
                {renewal.daysLeft <= 7 && (
                  <AlertCircle className="w-4 h-4 text-orange-500" />
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
