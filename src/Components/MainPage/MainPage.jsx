import React from 'react'
import {
  // BrowserRouter as Router,
  // Switch,
  Route,
  Link
} from 'react-router-dom';
import './MainPage.css'

import Logo from './index.png'
import GithubSVG from './SVGicons/GithubIcon.svg'
import TelegramSVG from './SVGicons/TelegramIcon.svg'
import ProjectsSVG from './SVGicons/ProjectsIcon.svg'
class MainPage extends React.Component {
  state = {
    showGithub: false,
    showTelegram: false,
    showProjects: false
  }
  handleGithub = () => this.setState({ showGithub: true });
  handleTelegram = () => this.setState({ showTelegram: true });
  handleProjects = () => this.setState({ showProjects: true });

  handleBoxToggleV2 = () => this.setState({ showGithub: false, showTelegram: false, showProjects: false, });
  render(){
    const seeGithub = this.state.showGithub
    const seeTelegram = this.state.showTelegram
    const seeProjects = this.state.showProjects
    function NotificateGithub(params) {
      if(seeGithub){
        return <span className="NotifyGithub">github.com/lewisforyou</span>
      }
      else {
        return <span></span>
        }
    }
    function NotificateTelegram(params) {
      if(seeTelegram){
        return <span className="NotifyTelegram">t.me/lewisdev</span>
      }
      else {
        return <span></span>
      }
    }
      function NotificateProjects(params) {
        if(seeProjects){
        return <span className="NotifyProjects">projects</span>
        } else {
          return <span></span>
        }
      }
    
    return (
      <Route>
      <div className="MainBlock">
          <div className="Logo">
              <img src={Logo} alt="logo" className="Img" />
          </div>
          <div className="TextBlock">
            <h1 className="Header">Lewis<span className="Emoji">🌆</span></h1>
            <h3 className="ChangeText">Open a window 🌇</h3>
            <div className="Icons">
              <img src={GithubSVG} alt="github" fill="red" className="Github"
              onMouseEnter = {this.handleGithub}
              onMouseOut = {this.handleBoxToggleV2} />
              <img src={TelegramSVG} alt="telegram" fill="red" className="Telegram"
              onMouseEnter = {this.handleTelegram}
              onMouseOut = {this.handleBoxToggleV2} />
              <Link to="/projects"><img src={ProjectsSVG} alt="projects" style={{ textColor: 'blue' }} className="Projects"
              onMouseEnter = {this.handleProjects}
              onMouseOut = {this.handleBoxToggleV2} /></Link>
            </div>
          </div>
          <div className="Notify">
            <NotificateGithub />
            <NotificateTelegram />
            <NotificateProjects />
          </div>
      </div>
     </Route>
    );
  }
}
  
  export default MainPage
  