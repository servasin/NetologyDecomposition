import Link from "./Link"

function SearchForm() {

    return (
      <form>
        <Link href={'#'} img={'https://icons-for-free.com/download-icon-Yandex+Logo-1331419557811444064_256.png'}/> 
        <input type="text" />
        <small>пример поиска</small>
        <button>найти</button>
      </form>
    )
  }
  
  export default SearchForm
  