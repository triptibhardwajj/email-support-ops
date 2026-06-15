import { DashboardMetrics } from '@/components/dashboard/metrics'
import { RevenueChart } from '@/components/dashboard/revenue-chart'
import { CustomersTable } from '@/components/dashboard/customers-table'
import { UpcomingRenewals } from '@/components/dashboard/upcoming-renewals'

export default function DashboardPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's an overview of your business.</p>
      </div>

      {/* Metrics Grid */}
      <DashboardMetrics />

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <div>
          <UpcomingRenewals />
        </div>
      </div>

      {/* Customers Table */}
      <CustomersTable />
    </div>
  )
}
