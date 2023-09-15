import Link from "./Link"

function NavLinks() {

  return (
  <nav>
    <li><Link href={'#'} text={'Новости'}/></li>
    <li><Link href={'#'} text={'Картинки'}/></li>
    <li><Link href={'#'} text={'Видео'}/></li>
    <li><Link href={'#'} text={'Карты'}/></li>
    <li><Link href={'#'} text={'Маркет'}/></li>
    <li><Link href={'#'} text={'Ещё'}/></li>
  </nav>
  )
}

export default NavLinks
