import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "~/lib/utils"

const neoClasses = "w-full rounded-md px-3.5 py-5 border relative z-10 text-lg font-semibold";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-neutral-700 bg-neutral-900 hover:bg-neutral-800 hover:text-subdued-foreground",
        secondary:
          "bg-background text-md font-lg text-subdued hover:text-primary hover:bg-muted py-4",
        ghost: "hover:bg-neutral-900 hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        neo: cn(neoClasses, "bg-[#16d7d6] hover:border-primary hover:bg-secondary text-primary-foreground hover:text-primary border-primary"),
        neoOutline: cn(neoClasses, "hover:bg-[#16d7d6] border-primary bg-secondary hover:text-primary-foreground text-primary hover:border-primary"),
        neoSuccess: cn(neoClasses, "bg-green-500 text-green-100 border-green-700"),
        neoDanger: cn(neoClasses, "bg-red-700 text-subdued border border-red-500")
      },
      size: {
        default: "h-14 px-4 py-5",
        sm: "h-9 rounded-md px-3",
        lg: "h-14 rounded-full px-3.5 py-5",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
