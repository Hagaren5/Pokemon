import Button from '../components/Button'

export default function Landing() {
  return (
    <div className="flex justify-center flex-col">
      <h1 className='text-4xl text-sky-300'>Welcome to your eternal journey!</h1>

      <div >
        <Button to='/pokedex'>Pokedex</Button>
      </div>
    </div>
  )
}
