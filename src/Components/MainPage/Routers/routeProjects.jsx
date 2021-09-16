import {
    Route,
    Link
  } from 'react-router-dom';
import './route.css'
function routeProjects(){
    return(
        <Route>
            <Link to="/"><span className="route">projects</span></Link>
        </Route>
    )
}
export default routeProjects