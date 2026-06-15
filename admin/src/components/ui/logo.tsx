import { Zap } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LogoProps {
  collapsed?: boolean
}

export function Logo({ collapsed = false }: LogoProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/60 rounded-lg flex items-center justify-center">
        <Zap className="w-5 h-5 text-white" />
      </div>
      {!collapsed && (
        <div className="flex flex-col">
          <span className="text-lg font-bold text-foreground">ETRAV</span>
          <span className="text-xs text-muted-foreground">Operations</span>
        </div>
      )}
    </div>
  )
}
