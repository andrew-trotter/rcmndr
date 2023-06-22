import { Link } from 'react-router-dom'
import { HtmlHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonProps = HtmlHTMLAttributes<HTMLButtonElement>

function HomeButton({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      className={twMerge(
        'bg-white rounded-lg py-2 px-4 text-pink-500 w-20 hover:text-white hover:bg-pink-500 hover:shadow-[0px_0px_9px_2px_#FF17CE]',
        className
      )}
      {...rest}
    >
      {children}
      <Link className="font-bold" to="/">
        Home
      </Link>
    </button>
  )
}

export default HomeButton
