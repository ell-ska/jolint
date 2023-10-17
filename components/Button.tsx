import { VariantProps, cva } from 'class-variance-authority'

import { cn } from '@/utils/classnames'

export const buttonVariants = cva(
  'px-8 py-3 rounded-xl font-heading font-bold transition hover:scale-105 text-center',
  {
    variants: {
      variant: {
        primary: 'bg-blue-bright text-neutral-100',
        secondary: 'bg-orange text-neutral-100',
        outline: 'bg-none shadow-[inset_0_0_0_2px_#0015CE] text-neutral-900',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
)

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>

const Button = ({ children, variant, className, ...props }: ButtonProps) => {
  return (
    <button className={cn(buttonVariants({ variant, className }))} {...props}>
      {children}
    </button>
  )
}

export default Button
