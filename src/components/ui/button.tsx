import React from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
          variant === 'default' &&
            'bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary',
          variant === 'outline' &&
            'border border-border bg-background text-foreground hover:bg-gray-50 focus-visible:ring-primary',
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button }
