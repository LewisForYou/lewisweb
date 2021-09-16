import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import MainPage from './Components/MainPage/MainPage.jsx'
import routeProjects from './Components/MainPage/Routers/routeProjects.jsx';
function App() {
  return (
    <Router>
    <div className="App"></div>
    <Switch>
    <Route path="/" exact component={MainPage} />
    <Route path="/projects" component={routeProjects} />
   </Switch>
  </Router>
  );
}

export default App;
