import { House } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <a href="#home" className="flex items-center gap-2" aria-label="HomeEase home">
      <span className="flex size-9 items-center justify-center rounded-lg bg-orange text-orange-foreground">
        <House className="size-5" aria-hidden="true" />
      </span>
      <span
        className={cn(
          'text-xl font-extrabold tracking-tight',
          inverted ? 'text-navy-foreground' : 'text-navy',
        )}
      >
        Home<span className="text-orange">Ease</span>
      </span>
    </a>
  )
}
