import { ComponentProps, ReactNode } from 'react'

interface ButtonProps extends ComponentProps<'button'>{
    children: ReactNode;
    color: string;
    border: number
}

const ButtonMain = ({children, color, border} : ButtonProps) => {
  return (
    <div>
        <button className={`py-3 px-8 rounded-3xl font-semibold text-sm text-white bg-[${color}] border-white border-${border}`}>
            {children}
        </button>
    </div>
  )
}

export default ButtonMain