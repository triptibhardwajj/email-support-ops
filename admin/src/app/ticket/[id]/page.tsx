'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  MessageCircle,
  Clock,
  User,
  Mail,
  Calendar,
  Tag,
  AlertCircle,
  CheckCircle2,
  ReplyAll,
  Archive,
  Trash2,
} from 'lucide-react'

const ticketDetails = {
  id: 'ETR-00047',
  from: 'postmaster@itb.com',
  subject: 'Advise fare',
  category: 'Unclassified',
  priority: 'medium',
  status: 'awaiting_first_reply',
  assignedTo: 'Mohammad Raza',
  receivedAt: '11 Jun 2026, 12:38 PM',
  firstReplyAt: null,
  resolvedAt: null,
  slaStatus: 'on_track',
  responseTimeTarget: '60 minutes',
  responseTimeSince: '18 minutes',
  body: 'Hi,\n\nWe need a fare quote for the following route:\nDeparture: Delhi (DEL)\nArrival: Mumbai (BOM)\nDate: 15 June 2026\nPassengers: 2 Adults, 1 Child\n\nPlease provide competitive rates for economy and business class.\n\nRegards,\nITB Travel Services',
  replies: [
    {
      id: 1,
      from: 'Mohammad Raza',
      time: '11 Jun, 1:30 PM',
      body: 'Thank you for reaching out! I\'ll prepare the fare quotes for you shortly.',
      isAgent: true,
    },
  ],
}

export default function TicketDetailPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/5">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold text-foreground">{ticketDetails.id}</h1>
              <Badge
                className={
                  ticketDetails.priority === 'high'
                    ? 'bg-orange-500/10 text-orange-700'
                    : ticketDetails.priority === 'urgent'
                    ? 'bg-red-500/10 text-red-700'
                    : 'bg-yellow-500/10 text-yellow-700'
                }
              >
                {ticketDetails.priority.toUpperCase()}
              </Badge>
            </div>
            <p className="text-muted-foreground mt-2">{ticketDetails.subject}</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <ReplyAll className="w-4 h-4" />
              Reply
            </Button>
            <Button variant="outline" className="gap-2">
              <Archive className="w-4 h-4" />
              Archive
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8 space-y-6">
        {/* Ticket Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <User className="w-4 h-4" />
                From
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold text-foreground">{ticketDetails.from}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <User className="w-4 h-4" />
                Assigned To
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold text-foreground">{ticketDetails.assignedTo}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Received
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold text-foreground text-sm">{ticketDetails.receivedAt}</p>
            </CardContent>
          </Card>
        </div>

        {/* Status and SLA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-orange-500" />
                <span className="font-semibold">Awaiting First Reply</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                First response needed within {ticketDetails.responseTimeTarget}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">SLA Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="font-semibold">On Track</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                {ticketDetails.responseTimeSince} since received
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Ticket Metadata */}
        <Card>
          <CardHeader>
            <CardTitle>Ticket Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Category</p>
                <Badge variant="outline">{ticketDetails.category}</Badge>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Priority</p>
                <Badge className="bg-yellow-500/10 text-yellow-700">Medium</Badge>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Responses</p>
                <p className="font-semibold">{ticketDetails.replies.length}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Type</p>
                <Badge variant="secondary">Inquiry</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Email Body */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Original Message
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-muted/30 rounded-lg p-4 whitespace-pre-wrap text-sm text-foreground font-mono">
              {ticketDetails.body}
            </div>
          </CardContent>
        </Card>

        {/* Conversation */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Conversation ({ticketDetails.replies.length + 1})
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Original Message */}
            <div className="p-4 rounded-lg border border-border bg-background">
              <div className="flex items-center justify-between mb-2">
                <p className="font-semibold text-foreground">{ticketDetails.from}</p>
                <p className="text-xs text-muted-foreground">{ticketDetails.receivedAt}</p>
              </div>
              <p className="text-sm text-foreground whitespace-pre-wrap">{ticketDetails.body}</p>
            </div>

            <Separator />

            {/* Replies */}
            {ticketDetails.replies.map((reply) => (
              <div
                key={reply.id}
                className={`p-4 rounded-lg border ${
                  reply.isAgent
                    ? 'border-primary bg-primary/5'
                    : 'border-border bg-background'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-foreground">{reply.from}</p>
                    {reply.isAgent && (
                      <Badge className="bg-primary/10 text-primary">Agent</Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">{reply.time}</p>
                </div>
                <p className="text-sm text-foreground">{reply.body}</p>
              </div>
            ))}

            {/* Reply Box */}
            <Separator className="my-4" />
            <div className="space-y-3">
              <p className="text-sm font-semibold">Add Reply</p>
              <textarea
                placeholder="Type your response here..."
                className="w-full h-32 p-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <div className="flex gap-2 justify-end">
                <Button variant="outline">Cancel</Button>
                <Button>Send Reply</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
