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
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
import {
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  Search,
  Download,
  Filter,
} from 'lucide-react'

const ticketMetrics = [
  {
    title: 'Total Tickets',
    value: '287',
    change: '+12.5%',
    icon: '🎫',
    trend: 'up',
  },
  {
    title: 'Avg Response Time',
    value: '19 min',
    change: '-2.3 min',
    icon: '⏱️',
    trend: 'down',
  },
  {
    title: 'SLA Compliance',
    value: '94.2%',
    change: '+2.1%',
    icon: '✓',
    trend: 'up',
  },
  {
    title: 'Resolution Rate',
    value: '87%',
    change: '+5.2%',
    icon: '📊',
    trend: 'up',
  },
]

const responseTimeData = [
  { agent: 'Ashish', time: 52, count: 8 },
  { agent: 'Ayesha', time: 58, count: 6 },
  { agent: 'Lovesh', time: 5, count: 12 },
  { agent: 'Madhura', time: 6, count: 14 },
  { agent: 'Manoj', time: 58, count: 9 },
  { agent: 'Mohammad', time: 21, count: 15 },
  { agent: 'Pallavi', time: 11, count: 18 },
]

const categoryData = [
  { name: 'Unclassified', value: 11, color: '#3B82F6' },
  { name: 'Reissue', value: 8, color: '#8B5CF6' },
  { name: 'Offline Issuance', value: 7, color: '#EC4899' },
  { name: 'NA', value: 7, color: '#F59E0B' },
  { name: 'Refund', value: 3, color: '#10B981' },
]

const slaData = [
  { status: 'Within SLA', value: 65, color: '#10B981' },
  { status: 'Breached', value: 22, color: '#EF4444' },
]

const ticketsByTime = [
  { time: '00:00', count: 0 },
  { time: '02:00', count: 2 },
  { time: '04:00', count: 4 },
  { time: '06:00', count: 8 },
  { time: '08:00', count: 12 },
  { time: '10:00', count: 18 },
  { time: '12:00', count: 24 },
  { time: '14:00', count: 22 },
  { time: '16:00', count: 18 },
  { time: '18:00', count: 12 },
  { time: '20:00', count: 8 },
  { time: '22:00', count: 4 },
]

const recentTickets = [
  {
    id: 'ETR-00047',
    customer: 'postmaster@itb.com',
    subject: 'Advise fare',
    category: 'Unclassified',
    agent: 'Mohammad Raza',
    status: 'Awaiting first reply',
    priority: 'Medium',
    time: '11 Jun, 12:38 pm',
  },
  {
    id: 'ETR-00045',
    customer: 'SAMAD QURESHI',
    subject: 'Require Marine Fare DEL MCT 12 JUN',
    category: 'Reissue',
    agent: 'Ashish',
    status: 'Offline Issuance',
    priority: 'High',
    time: '11 Jun, 12:34 pm',
  },
  {
    id: 'ETR-00005',
    customer: 'rafik khan',
    subject: 'Paid: wheel chair',
    category: 'NA',
    agent: 'Lovesh',
    status: 'Closed',
    priority: 'Low',
    time: '11 Jun, 12:32 pm',
  },
]

const getPriorityColor = (priority: string) => {
  switch (priority.toLowerCase()) {
    case 'urgent':
      return 'bg-red-500/10 text-red-700'
    case 'high':
      return 'bg-orange-500/10 text-orange-700'
    case 'medium':
      return 'bg-yellow-500/10 text-yellow-700'
    case 'low':
      return 'bg-green-500/10 text-green-700'
    default:
      return 'bg-blue-500/10 text-blue-700'
  }
}

const getStatusColor = (status: string) => {
  if (status.includes('Awaiting')) return 'bg-blue-500/10 text-blue-700'
  if (status.includes('Closed')) return 'bg-green-500/10 text-green-700'
  if (status.includes('Offline')) return 'bg-purple-500/10 text-purple-700'
  return 'bg-gray-500/10 text-gray-700'
}

export default function AnalyticsPage() {
  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Analytics</h1>
        <p className="text-muted-foreground">Detailed insights into your support operations</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {ticketMetrics.map((metric, idx) => (
          <Card key={idx} className="hover:shadow-lg transition-all hover:border-primary/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {metric.title}
              </CardTitle>
              <span className="text-2xl">{metric.icon}</span>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-1">{metric.value}</div>
              <p
                className={`text-xs font-medium ${
                  metric.trend === 'up' ? 'text-green-600' : 'text-blue-600'
                }`}
              >
                {metric.trend === 'up' ? '↑' : '↓'} {metric.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Response Time by Agent */}
        <Card>
          <CardHeader>
            <CardTitle>Avg First Response Time by Agent</CardTitle>
            <CardDescription>Response time in minutes</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={responseTimeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="agent" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '0.5rem',
                  }}
                />
                <Bar dataKey="time" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Tickets by Category */}
        <Card>
          <CardHeader>
            <CardTitle>Tickets by Category</CardTitle>
            <CardDescription>Distribution across categories</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {categoryData.map((cat) => (
                <div key={cat.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: cat.color }}
                    />
                    <span>{cat.name}</span>
                  </div>
                  <span className="font-semibold">{cat.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* SLA Compliance */}
        <Card>
          <CardHeader>
            <CardTitle>SLA Compliance</CardTitle>
            <CardDescription>Overall SLA performance</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={slaData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {slaData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-3">
              {slaData.map((item) => (
                <div key={item.status} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm">{item.status}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">{item.value}</div>
                    <div className="text-xs text-muted-foreground">
                      {Math.round((item.value / (slaData[0].value + slaData[1].value)) * 100)}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tickets by Time */}
        <Card>
          <CardHeader>
            <CardTitle>Tickets by Time of Day</CardTitle>
            <CardDescription>Email volume distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={ticketsByTime}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '0.5rem',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="count"
                  stroke="hsl(var(--accent))"
                  strokeWidth={2}
                  dot={false}
                  fill="hsl(var(--accent))"
                  fillOpacity={0.1}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Tickets */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Recent Tickets</CardTitle>
            <CardDescription>Latest support tickets</CardDescription>
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
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search tickets..." className="pl-10" />
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ticket</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Agent</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Priority</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentTickets.map((ticket) => (
                <TableRow key={ticket.id} className="hover:bg-muted/50">
                  <TableCell>
                    <span className="font-mono text-sm font-semibold text-primary">
                      {ticket.id}
                    </span>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {ticket.customer}
                  </TableCell>
                  <TableCell className="max-w-xs truncate">{ticket.subject}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{ticket.category}</Badge>
                  </TableCell>
                  <TableCell className="text-sm">{ticket.agent}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={getStatusColor(ticket.status)}>
                      {ticket.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={getPriorityColor(ticket.priority)}>
                      {ticket.priority}
                    </Badge>
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
