import Button from '@/components/Button'

export default function Landing() {
  return (
    <div className='flex flex-col pt-10 h-screen'>
      <span className='flex justify-center pt-10'>
        <Button to='/pokedex'>Pokedex</Button>
        <Button to='/pokedex'>Pokedex</Button>
        <Button to='/pokedex'>Pokedex</Button>
        <Button to='/pokedex'>Pokedex</Button>
      </span>
    </div>
  )
}
