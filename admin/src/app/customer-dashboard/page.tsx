'use client'

import { useState } from 'react'
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
  Search,
  Plus,
  Filter,
  Clock,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  MessageSquare,
  Archive,
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const ticketStats = [
  {
    title: 'Total Tickets',
    value: '287',
    change: '+12.5%',
    trend: 'up',
  },
  {
    title: 'Avg Response Time',
    value: '19 min',
    change: '-2.3 min',
    trend: 'down',
  },
  {
    title: 'SLA Compliance',
    value: '94.2%',
    change: '+2.1%',
    trend: 'up',
  },
  {
    title: 'Open Tickets',
    value: '23',
    change: '3 today',
    trend: 'neutral',
  },
]

const tickets = [
  {
    id: 'ETR-00047',
    from: 'postmaster@itb.com',
    subject: 'Advise fare',
    category: 'Unclassified',
    assignedTo: 'Mohammad Raza',
    status: 'awaiting_first_reply',
    priority: 'medium',
    receivedAt: '11 Jun, 12:38 pm',
    responseTime: '-',
  },
  {
    id: 'ETR-00045',
    from: 'SAMAD QURESHI',
    subject: 'Require Marine Fare DEL MCT 12 JUN',
    category: 'Reissue',
    assignedTo: 'Ashish',
    status: 'awaiting_agent_response',
    priority: 'high',
    receivedAt: '11 Jun, 12:34 pm',
    responseTime: '4 min',
  },
  {
    id: 'ETR-00005',
    from: 'rafik khan',
    subject: 'Paid: wheel chair',
    category: 'NA',
    assignedTo: 'Lovesh',
    status: 'resolved',
    priority: 'low',
    receivedAt: '11 Jun, 12:32 pm',
    responseTime: '2 min',
  },
  {
    id: 'ETR-00043',
    from: 'nisha@travel.com',
    subject: 'Re: Booking Confirmed - PNR 7B7BEO',
    category: 'Unclassified',
    assignedTo: 'Madhura',
    status: 'awaiting_customer_response',
    priority: 'medium',
    receivedAt: '11 Jun, 12:28 pm',
    responseTime: '6 min',
  },
  {
    id: 'ETR-00041',
    from: 'support@whitelabel.com',
    subject: 'ITRCO.COM - Advise fare',
    category: 'NA',
    assignedTo: 'Manoj',
    status: 'awaiting_agent_response',
    priority: 'high',
    receivedAt: '11 Jun, 12:23 pm',
    responseTime: '11 min',
  },
]

const categoryData = [
  { name: 'Unclassified', value: 42, color: '#3B82F6' },
  { name: 'Reissue', value: 28, color: '#8B5CF6' },
  { name: 'NA', value: 18, color: '#EC4899' },
  { name: 'Refund', value: 12, color: '#10B981' },
  { name: 'Other', value: 187, color: '#F59E0B' },
]

const agentPerformance = [
  { agent: 'Mohammad Raza', replies: 45, avgTime: 21, slaCompliance: 92 },
  { agent: 'Ashish Todkar', replies: 38, avgTime: 52, slaCompliance: 85 },
  { agent: 'Madhura Kadam', replies: 42, avgTime: 6, slaCompliance: 98 },
  { agent: 'Lovesh Jadhav', replies: 35, avgTime: 5, slaCompliance: 100 },
  { agent: 'Manoj B', replies: 28, avgTime: 58, slaCompliance: 79 },
]

const getPriorityColor = (priority: string) => {
  switch (priority) {
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

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'awaiting_first_reply':
      return <AlertCircle className="w-4 h-4 text-orange-500" />
    case 'awaiting_agent_response':
      return <Clock className="w-4 h-4 text-blue-500" />
    case 'awaiting_customer_response':
      return <MessageSquare className="w-4 h-4 text-purple-500" />
    case 'resolved':
      return <CheckCircle2 className="w-4 h-4 text-green-500" />
    default:
      return <Archive className="w-4 h-4 text-gray-500" />
  }
}

const getStatusLabel = (status: string) => {
  switch (status) {
    case 'awaiting_first_reply':
      return 'Awaiting First Reply'
    case 'awaiting_agent_response':
      return 'Awaiting Agent'
    case 'awaiting_customer_response':
      return 'Awaiting Customer'
    case 'resolved':
      return 'Resolved'
    default:
      return 'Closed'
  }
}

export default function CustomerDashboard() {
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredTickets = tickets.filter(
    (t) =>
      t.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.from.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/5">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Support Tickets</h1>
            <p className="text-sm text-muted-foreground">Manage and track all support requests</p>
          </div>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            New Ticket
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {ticketStats.map((stat, idx) => (
            <Card key={idx} className="hover:shadow-lg transition-all">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <p
                  className={`text-xs font-medium ${
                    stat.trend === 'up' ? 'text-green-600' : stat.trend === 'down' ? 'text-blue-600' : 'text-gray-600'
                  }`}
                >
                  {stat.trend === 'up' ? '↑' : stat.trend === 'down' ? '↓' : '→'} {stat.change}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Tickets List */}
          <div className="lg:col-span-2 space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Recent Tickets</CardTitle>
                    <CardDescription>{filteredTickets.length} tickets</CardDescription>
                  </div>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Filter className="w-4 h-4" />
                    Filter
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by ticket ID, subject, or email..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                {/* Ticket List */}
                <div className="space-y-2 max-h-[600px] overflow-y-auto">
                  {filteredTickets.map((ticket) => (
                    <div
                      key={ticket.id}
                      onClick={() => setSelectedTicket(ticket.id)}
                      className={`p-4 rounded-lg border cursor-pointer transition-all ${
                        selectedTicket === ticket.id
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50 hover:bg-muted/30'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="flex items-center gap-2">
                            {getStatusIcon(ticket.status)}
                            <span className="font-mono text-sm font-semibold text-primary">
                              {ticket.id}
                            </span>
                            <Badge variant="outline" className="text-xs">
                              {ticket.category}
                            </Badge>
                          </div>
                          <p className="font-medium text-foreground mt-1">{ticket.subject}</p>
                          <p className="text-sm text-muted-foreground">{ticket.from}</p>
                        </div>
                        <div className="text-right">
                          <Badge className={getPriorityColor(ticket.priority)}>
                            {ticket.priority.charAt(0).toUpperCase() + ticket.priority.slice(1)}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-4">
                          <span>Assigned: {ticket.assignedTo}</span>
                          <span>{ticket.receivedAt}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>{getStatusLabel(ticket.status)}</span>
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Category Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Category Breakdown</CardTitle>
                <CardDescription>Ticket distribution</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={220}>
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-4 space-y-2">
                  {categoryData.map((cat) => (
                    <div key={cat.name} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.color }} />
                        <span className="text-muted-foreground">{cat.name}</span>
                      </div>
                      <span className="font-semibold">{cat.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* SLA Status */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">SLA Status</CardTitle>
                <CardDescription>Current compliance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span>Within SLA</span>
                      <span className="font-semibold">94.2%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: '94.2%' }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span>Breached</span>
                      <span className="font-semibold">5.8%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{ width: '5.8%' }} />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Agent Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Agent Performance</CardTitle>
            <CardDescription>Team statistics and metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Agent Name</TableHead>
                    <TableHead className="text-right">Total Replies</TableHead>
                    <TableHead className="text-right">Avg Response Time</TableHead>
                    <TableHead className="text-right">SLA Compliance</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {agentPerformance.map((agent) => (
                    <TableRow key={agent.agent} className="hover:bg-muted/50">
                      <TableCell className="font-medium">{agent.agent}</TableCell>
                      <TableCell className="text-right">
                        <Badge variant="secondary">{agent.replies}</Badge>
                      </TableCell>
                      <TableCell className="text-right text-muted-foreground">
                        {agent.avgTime} min
                      </TableCell>
                      <TableCell className="text-right">
                        <Badge
                          className={
                            agent.slaCompliance >= 95
                              ? 'bg-green-500/10 text-green-700'
                              : agent.slaCompliance >= 90
                              ? 'bg-yellow-500/10 text-yellow-700'
                              : 'bg-red-500/10 text-red-700'
                          }
                        >
                          {agent.slaCompliance}%
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
