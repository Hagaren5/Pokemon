import Button from '@/components/Button'

export default function Landing() {
  return (
    <div className='flex flex-col pt-10 h-screen'>
      <h1 className='flex justify-center text-4xl text-sky-800'>Welcome to your eternal journey!</h1>
      <Button to='/login'>Login</Button>
      <span className='flex justify-center pt-10'>
        <Button to='/pokedex'>Pokedex</Button>
        <Button to='/pokedex'>Pokedex</Button>
        <Button to='/pokedex'>Pokedex</Button>
        <Button to='/pokedex'>Pokedex</Button>
      </span>
    </div>
  )
}
