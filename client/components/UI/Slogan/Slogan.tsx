import { HtmlHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type DivProps = HtmlHTMLAttributes<HTMLDivElement>

function Slogan({ children, className, ...rest }: DivProps) {
  return (
    //testing color
    <div className={twMerge('bg-rose-800', className)} {...rest}>
      {children}
    </div>
  )
}

export default Slogan
