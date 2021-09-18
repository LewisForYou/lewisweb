import React from 'react'
import {
  Route,
  Link
} from 'react-router-dom';
import './MainPage.css'

import GithubIcon from './SVGicons/GithubIcon.svg'
import TelegramIcon from './SVGicons/TelegramIcon.svg'
import CubeIcon from './SVGicons/CubeSVG.svg'

import Logo from './index.png'
class MainPage extends React.Component {
  state = {
    showGithub: false,
    showTelegram: false,
    showProjects: false,
    text: ''
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
      // let myArray = ['1', '2']
      // var rand = myArray[(Math.random() * myArray.length)];
      // setInterval(() => {
      //   console.log('Interval triggered');
      // }, 1000);
    return (
      <Route>
      <div className="MainBlock">
          <div className="Logo">
              <img src={Logo} alt="logo" className="Img" />
          </div>
          <div className="TextBlock">
            <h1 className="Header">Lewis<span className="Emoji">🌆</span></h1>
            <h3 className="ChangeText">Stop a python 🐍</h3>
            <div className="Icons" >
              <a href="https://github.com/LewisForYou" target="_blank" rel="noreferrer" >
              <img 
              src={GithubIcon} alt="githubicon"
              className="Github"
              onMouseEnter = {this.handleGithub}
              onMouseOut = {this.handleBoxToggleV2} /></a>
              <a href="https://t.me/LewisDev" target="_blank" rel="noreferrer"><img 
              src={TelegramIcon} alt="telegramicon"
              className="Telegram"  
              onMouseEnter = {this.handleTelegram}
              onMouseOut = {this.handleBoxToggleV2}/></a>
              <Link to="/projects">
                <img src={CubeIcon} alt="cubeicon"
                className="Projects" 
                onMouseEnter = {this.handleProjects}
                onMouseOut = {this.handleBoxToggleV2}/>
              </Link>
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
  