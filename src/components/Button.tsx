import { NavLink } from 'react-router-dom'
type Props = {
  to: string;
  children : string
}
export default function Button({ to, children }: Props ) {
  return (
    <div className='flex font-bold bg-yellow-400 text-blue-400 max-w-20 rounded-full justify-center align-center'>
      <NavLink to={to}>{children}</NavLink>
    </div>
  )
}
