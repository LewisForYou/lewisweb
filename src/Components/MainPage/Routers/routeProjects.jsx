import {
    Route,
    Link
  } from 'react-router-dom';
import './route.css'

import HomeIcon from '../SVGicons/HomeIcon.svg'

function routeProjects(){
    return(
        <Route>
            <Link to="/"><img src={HomeIcon} alt="homeicon" className="HomeIcon" /></Link>
        </Route>
    )
}
export default routeProjects