import { NavLink } from 'react-router-dom'
type Props = {
  to: string
  children: string
}
export default function Button({ to, children }: Props) {
  return (
    <div className='flex font-bold bg-yellow-400 border-2 border-black text-blue-400 w-28 h-7 shadow-md shadow-blue-400/30 rounded-full justify-center align-center hover:text-black'>
      <NavLink to={to}>{children}</NavLink>
    </div>
  )
}
