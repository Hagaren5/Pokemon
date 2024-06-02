import Button from '@/components/Button'
import { useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()
  const isLandingPage = location.pathname === '/'

  return (
    <div className='flex items-center px-10 '>
      <div className='flex w-3/12'>
        {!isLandingPage && (
          <span className='mr-auto'>
            <Button to='/'>Home</Button>
          </span>
        )}
      </div>

      <h1 className={`text-4xl w-6/12 text-sky-800 text-center pt-10 ${isLandingPage ? 'mx-auto' : ''}`}>
        Welcome to your eternal journey!
      </h1>
      <span className={`flex ml-auto w-3/12 justify-end ${isLandingPage ? '' : 'ml-4'}`}>
        <Button to='/login'>Login</Button>
      </span>
    </div>
  )
}

export default Header
