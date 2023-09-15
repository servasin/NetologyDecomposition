import LinksList from "./LinksList"

function LinksBlock() {
  const linksPopular = [
    { href: "#", text: "О сталинках" },
    { href: "#", text: "Рынок недвижимости" },
    { href: "#", text: "Реновация" },
  ]

  return (
  <div style={{border: 'solid 1px grey'}}>
    <h4>Посещаемое</h4>
    <LinksList links={linksPopular} />
  </div>
  )
}

export default Popular
