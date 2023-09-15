import Link from "./Link"

function LinksList({links}) {

  return (
  <ul>
    {links.map((link, i) => 
        <li><Link key={i} href={link.href} text={link.text}/></li>  )} 

    {/* <li><Link href={'#'} text={'Новости'}/></li>
    <li><Link href={'#'} text={'Картинки'}/></li>
    <li><Link href={'#'} text={'Видео'}/></li>
    <li><Link href={'#'} text={'Карты'}/></li>
    <li><Link href={'#'} text={'Маркет'}/></li>
    <li><Link href={'#'} text={'Ещё'}/></li> */}
  </ul>
  )
}

export default LinksList
