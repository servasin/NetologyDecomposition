import Weather from "./Weather"
import Popular from "./Popular"
import TVprogram from "./TVprogram"

function InfoBlock() {

    return (
    <div style={{display: 'flex'}}>
        <Weather />
        <Popular />
        <TVprogram />
    </div>
    )
  }
  
  export default InfoBlock
  