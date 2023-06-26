import { HtmlHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonProps = HtmlHTMLAttributes<HTMLButtonElement>

function AddSongButton({ children, className, ...rest }: ButtonProps) {
  return (
    <button onClick={() => goTo('/add-song')}
      className={twMerge(
        'w-auto text-4xl font-black py-1 px-3 bg-primary text-white  rounded-full hover:shadow-[0px_0px_9px_2px_#FF17CE]',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

export default AddSongButton
