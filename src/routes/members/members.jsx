import Alison from "./alison";
import Cara from "./cara";
import Cole from "./cole";
import Joey from "./joey";
import Landon from "./landon";
import Liam from "./liam";
import Maria from "./maria";
import Michaela from "./michaela";


export default function Members () {
  return (
    <>
      <div className='center'>
        <div>
          <h3 className='subheading'>Camp Swampy Rat Attendees:</h3>
          <Joey />
          <Alison />
          <Cara />
          <Maria />
          <Cole />
          <Landon />
          <h3 className='subheading'>Others:</h3>
          <Michaela/>
          <Liam />
        </div>
      </div>
    </>
  )
}