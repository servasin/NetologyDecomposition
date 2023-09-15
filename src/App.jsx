import './App.css'
import NavLinks from './components/NavLinks'
import SearchForm from './components/SearchForm'
import Banner from './components/Banner'
import InfoBlock from './components/InfoBlock'

function App() {

  const links = [
    { href: '#', text: 'Новости'},
    { href: '#', text: 'Картинки'},
    { href: '#', text: 'Видео'},
    { href: '#', text: 'Карты'},
    { href: '#', text: 'Маркет'},
    { href: '#', text: 'Ещё'},
  ]

  return (
    <div className='content'>
      <header>
        <NavLinks links={links}/>
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
