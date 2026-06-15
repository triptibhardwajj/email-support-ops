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
import { MoreHorizontal, Plus, Search, Shield, Trash2, Edit } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const teamMembers = [
  {
    id: 1,
    name: 'Ashish Todkar',
    email: 'ashish@etrav.com',
    role: 'Admin',
    status: 'active',
    joinedDate: '2025-01-15',
    avatar: 'AT',
  },
  {
    id: 2,
    name: 'Ayesha Shaikh',
    email: 'ayesha@etrav.com',
    role: 'Manager',
    status: 'active',
    joinedDate: '2025-02-10',
    avatar: 'AS',
  },
  {
    id: 3,
    name: 'Lovesh Jadhav',
    email: 'lovesh@etrav.com',
    role: 'Agent',
    status: 'active',
    joinedDate: '2025-03-05',
    avatar: 'LJ',
  },
  {
    id: 4,
    name: 'Madhura Kadam',
    email: 'madhura@etrav.com',
    role: 'Agent',
    status: 'active',
    joinedDate: '2025-01-20',
    avatar: 'MK',
  },
  {
    id: 5,
    name: 'Manoj Bhingarade',
    email: 'manoj@etrav.com',
    role: 'Agent',
    status: 'inactive',
    joinedDate: '2025-02-28',
    avatar: 'MB',
  },
]

const getRoleColor = (role: string) => {
  switch (role.toLowerCase()) {
    case 'admin':
      return 'bg-purple-500/10 text-purple-700'
    case 'manager':
      return 'bg-blue-500/10 text-blue-700'
    case 'agent':
      return 'bg-green-500/10 text-green-700'
    default:
      return 'bg-gray-500/10 text-gray-700'
  }
}

export default function TeamPage() {
  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Team Management</h1>
          <p className="text-muted-foreground">Manage team members and permissions</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Add Member
        </Button>
      </div>

      {/* Members Count */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Members
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">Active team members</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Admins
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">Full access</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Agents
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Support team</p>
          </CardContent>
        </Card>
      </div>

      {/* Team Members Table */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Team Members</CardTitle>
            <CardDescription>All team members and their roles</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search members..." className="pl-10" />
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Member</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Joined</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {teamMembers.map((member) => (
                <TableRow key={member.id} className="hover:bg-muted/50">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-xs font-semibold text-primary">
                          {member.avatar}
                        </span>
                      </div>
                      <span className="font-medium">{member.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{member.email}</TableCell>
                  <TableCell>
                    <Badge className={getRoleColor(member.role)}>
                      <Shield className="w-3 h-3 mr-1" />
                      {member.role}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        member.status === 'active'
                          ? 'bg-green-500/10 text-green-700'
                          : 'bg-gray-500/10 text-gray-700'
                      }
                    >
                      {member.status === 'active' ? '🟢' : '🔴'} {member.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {member.joinedDate}
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
                        <DropdownMenuItem className="gap-2">
                          <Edit className="w-4 h-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive gap-2">
                          <Trash2 className="w-4 h-4" />
                          Remove
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
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
