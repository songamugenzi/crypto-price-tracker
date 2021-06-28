import SearchBar from '../components/SearchBar.js'

export default function Home() {
  return (
    <div className='homepage'>
      <h1>This is the homepage /pages/index.js</h1>

      <SearchBar type='text' placeholder='Search'/>
    </div>
  )
}
