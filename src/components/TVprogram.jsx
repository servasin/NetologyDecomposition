import Link from "./Link"

function TVprogram() {

  return (
  <div style={{border: 'solid 1px grey'}}>
    <h4>Телепрограмма</h4>
    <li><Link href={'#'} text={'Одна передача'}/></li>
    <li><Link href={'#'} text={'Другая передача'}/></li>
    <li><Link href={'#'} text={'Третья передача'}/></li>
  </div>
  )
}

export default TVprogram
