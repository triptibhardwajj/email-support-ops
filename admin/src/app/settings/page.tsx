'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Bell, Lock, Palette, Globe, Database, LogOut } from 'lucide-react'

const settingsSections = [
  {
    title: 'Account',
    description: 'Manage your account settings',
    icon: <LogOut className="w-5 h-5" />,
  },
  {
    title: 'Notifications',
    description: 'Email and alert preferences',
    icon: <Bell className="w-5 h-5" />,
  },
  {
    title: 'Security',
    description: 'Password and security settings',
    icon: <Lock className="w-5 h-5" />,
  },
  {
    title: 'Appearance',
    description: 'Customize the dashboard look',
    icon: <Palette className="w-5 h-5" />,
  },
  {
    title: 'Integration',
    description: 'Connect external services',
    icon: <Globe className="w-5 h-5" />,
  },
  {
    title: 'Data & Privacy',
    description: 'Data management and compliance',
    icon: <Database className="w-5 h-5" />,
  },
]

export default function SettingsPage() {
  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Settings</h1>
        <p className="text-muted-foreground">Manage your account and preferences</p>
      </div>

      {/* Account Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Account Settings</CardTitle>
          <CardDescription>Update your account information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">First Name</label>
              <Input placeholder="John" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Last Name</label>
              <Input placeholder="Doe" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <Input placeholder="john@etrav.com" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Company</label>
            <Input placeholder="ETRAV" />
          </div>
          <Button>Save Changes</Button>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
          <CardDescription>Choose what notifications you want to receive</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            {[
              { label: 'Email notifications', description: 'Receive email updates' },
              { label: 'SLA breaches', description: 'Alert when SLA is breached' },
              { label: 'New customers', description: 'Notify on new signups' },
              { label: 'Weekly summary', description: 'Get weekly analytics summary' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/50">
                <div>
                  <p className="font-medium">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                <input type="checkbox" defaultChecked className="w-4 h-4" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Workspace Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Workspace</CardTitle>
          <CardDescription>Workspace configuration and details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Workspace Name</label>
            <Input placeholder="ETRAV Support" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Timezone</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Asia/Kolkata" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asia/kolkata">Asia/Kolkata</SelectItem>
                <SelectItem value="asia/dubai">Asia/Dubai</SelectItem>
                <SelectItem value="america/newyork">America/New_York</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button>Save Changes</Button>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card className="border-red-200 dark:border-red-900">
        <CardHeader>
          <CardTitle className="text-red-600">Danger Zone</CardTitle>
          <CardDescription>Irreversible actions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button variant="destructive" className="w-full">
            Delete Account
          </Button>
          <p className="text-xs text-muted-foreground">
            Once you delete your account, there is no going back. Please be certain.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
