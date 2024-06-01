import { NavLink } from 'react-router-dom'

export default function Button({ to, children }) {
  return (
    <div className='flex font-bold bg-yellow-400 text-blue-400 max-w-20 rounded-full justify-center align-center'>
      <NavLink to={to}>{children}</NavLink>
    </div>
  )
}
