import './App.css'
import NavLinks from './components/NavLinks'
import SearchForm from './components/SearchForm'
import Banner from './components/Banner'
import InfoBlock from './components/InfoBlock'

function App() {

  return (
    <div className='content'>
      <header>
        <NavLinks />
        <SearchForm />
      </header>
      <main>
        <Banner />
        <InfoBlock />
      </main>
    </div>
  )
}

export default App
