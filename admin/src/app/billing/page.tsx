import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { CreditCard, Download, Filter, Plus, AlertCircle, CheckCircle } from 'lucide-react'

const revenueData = [
  { month: 'Jan', amount: 245000, status: 'Paid' },
  { month: 'Feb', amount: 320000, status: 'Paid' },
  { month: 'Mar', amount: 245000, status: 'Paid' },
  { month: 'Apr', amount: 410000, status: 'Paid' },
  { month: 'May', amount: 370000, status: 'Paid' },
  { month: 'Jun', amount: 420000, status: 'Paid' },
]

const invoices = [
  {
    id: 'INV-001',
    customer: 'ETRAV Support',
    amount: '₹29,999',
    period: 'June 2026',
    dueDate: '2026-06-30',
    status: 'paid',
    date: '2026-06-01',
  },
  {
    id: 'INV-002',
    customer: 'TravelCo Airlines',
    amount: '₹14,999',
    period: 'June 2026',
    dueDate: '2026-06-30',
    status: 'paid',
    date: '2026-06-01',
  },
  {
    id: 'INV-003',
    customer: 'Booking.com Clone',
    amount: '₹4,999',
    period: 'June 2026',
    dueDate: '2026-06-30',
    status: 'pending',
    date: '2026-06-05',
  },
  {
    id: 'INV-004',
    customer: 'Hotel Management Pro',
    amount: '₹14,999',
    period: 'June 2026',
    dueDate: '2026-07-05',
    status: 'pending',
    date: '2026-06-10',
  },
  {
    id: 'INV-005',
    customer: 'Flight Booking Co',
    amount: '₹29,999',
    period: 'May 2026',
    dueDate: '2026-06-15',
    status: 'overdue',
    date: '2026-05-15',
  },
]

const billingMetrics = [
  {
    title: 'Total Revenue',
    value: '₹16.41L',
    change: '+12.5%',
    icon: '💰',
  },
  {
    title: 'Paid Invoices',
    value: '8',
    change: '+2 this month',
    icon: '✓',
  },
  {
    title: 'Pending',
    value: '2',
    change: '₹19,998',
    icon: '⏳',
  },
  {
    title: 'Overdue',
    value: '1',
    change: '₹29,999',
    icon: '⚠️',
  },
]

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'paid':
      return (
        <Badge className="bg-green-500/10 text-green-700 gap-1">
          <CheckCircle className="w-3 h-3" />
          Paid
        </Badge>
      )
    case 'pending':
      return (
        <Badge variant="outline" className="gap-1">
          <CreditCard className="w-3 h-3" />
          Pending
        </Badge>
      )
    case 'overdue':
      return (
        <Badge className="bg-red-500/10 text-red-700 gap-1">
          <AlertCircle className="w-3 h-3" />
          Overdue
        </Badge>
      )
    default:
      return <Badge variant="outline">{status}</Badge>
  }
}

export default function BillingPage() {
  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Billing & Invoices</h1>
          <p className="text-muted-foreground">Manage subscriptions and revenue tracking</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Create Invoice
        </Button>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {billingMetrics.map((metric, idx) => (
          <Card key={idx} className="hover:shadow-lg transition-all hover:border-primary/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {metric.title}
              </CardTitle>
              <span className="text-2xl">{metric.icon}</span>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-1">{metric.value}</div>
              <p className="text-xs text-muted-foreground">{metric.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Revenue Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Revenue Trend</CardTitle>
          <CardDescription>Monthly invoiced amount</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '0.5rem',
                }}
                formatter={(value) => `₹${value}`}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="amount"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                dot={{ fill: 'hsl(var(--primary))', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Invoices Table */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Invoices</CardTitle>
            <CardDescription>All billing records</CardDescription>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="w-4 h-4" />
              Export
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Input placeholder="Search invoices..." />
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Period</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.id} className="hover:bg-muted/50">
                  <TableCell>
                    <span className="font-mono text-sm font-semibold text-primary">
                      {invoice.id}
                    </span>
                  </TableCell>
                  <TableCell className="font-medium">{invoice.customer}</TableCell>
                  <TableCell className="text-muted-foreground">{invoice.period}</TableCell>
                  <TableCell>
                    <span className="font-semibold text-foreground">{invoice.amount}</span>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{invoice.dueDate}</TableCell>
                  <TableCell>{getStatusBadge(invoice.status)}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
