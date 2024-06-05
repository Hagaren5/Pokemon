import Button from '@/components/Button'

export default function Landing() {
  return (
    <div className='flex flex-col pt-10 h-screen'>
      <span className="flex justify-center gap-2">
        <div className="flex flex-col gap-2">
          <Button to='/pokedex'>Pokedex</Button>
          <Button to='/pokedex'>Pokedex</Button>
        </div>
        <div className="flex flex-col gap-2">
          <Button to='/pokedex'>Pokedex</Button>
          <Button to='/pokedex'>Pokedex</Button>
        </div>
      </span>
    </div>
  )
}
