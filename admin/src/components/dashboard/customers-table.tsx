'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { MoreHorizontal, ArrowUpRight, ArrowDownRight } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const customers = [
  {
    id: 1,
    name: 'ETRAV Support',
    email: 'support@etrav.com',
    plan: 'Professional',
    mrr: '₹29,999',
    agents: 50,
    status: 'active',
    growth: 12.5,
    joinedDate: '2025-01-15',
  },
  {
    id: 2,
    name: 'TravelCo Airlines',
    email: 'ops@travelco.com',
    plan: 'Growth',
    mrr: '₹14,999',
    agents: 25,
    status: 'active',
    growth: 8.2,
    joinedDate: '2025-02-10',
  },
  {
    id: 3,
    name: 'Booking.com Clone',
    email: 'admin@bookingclone.com',
    plan: 'Starter',
    mrr: '₹4,999',
    agents: 5,
    status: 'active',
    growth: 2.1,
    joinedDate: '2025-03-05',
  },
  {
    id: 4,
    name: 'Hotel Management Pro',
    email: 'support@hotelpro.com',
    plan: 'Growth',
    mrr: '₹14,999',
    agents: 20,
    status: 'active',
    growth: -3.5,
    joinedDate: '2025-01-20',
  },
  {
    id: 5,
    name: 'Flight Booking Co',
    email: 'hello@flightbooking.com',
    plan: 'Professional',
    mrr: '₹29,999',
    agents: 45,
    status: 'active',
    growth: 15.8,
    joinedDate: '2025-02-28',
  },
]

export function CustomersTable() {
  const [selectedCustomers, setSelectedCustomers] = useState<number[]>([])

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl">Customers</CardTitle>
            <CardDescription>Manage and monitor all your customers</CardDescription>
          </div>
          <Button>Add Customer</Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Plan</TableHead>
              <TableHead className="text-right">MRR</TableHead>
              <TableHead className="text-center">Agents</TableHead>
              <TableHead className="text-right">Growth</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-8"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.id} className="hover:bg-muted/50">
                <TableCell>
                  <div>
                    <p className="font-semibold text-foreground">{customer.name}</p>
                    <p className="text-sm text-muted-foreground">{customer.email}</p>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline">{customer.plan}</Badge>
                </TableCell>
                <TableCell className="text-right font-semibold text-primary">
                  {customer.mrr}
                </TableCell>
                <TableCell className="text-center">
                  <Badge variant="secondary">{customer.agents}</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-1">
                    {customer.growth >= 0 ? (
                      <ArrowUpRight className="w-4 h-4 text-green-600" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4 text-red-600" />
                    )}
                    <span
                      className={customer.growth >= 0 ? 'text-green-600' : 'text-red-600'}
                    >
                      {Math.abs(customer.growth)}%
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="default" className="bg-green-500/10 text-green-700">
                    Active
                  </Badge>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>View Analytics</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">Cancel</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
