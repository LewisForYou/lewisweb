import './MainPage.css'
import Logo from './index.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTelegram} from '@fortawesome/free-brands-svg-icons'

function MainPage() {
    return (
      <div className="MainBlock">
          <div className="Logo">
              <img src={Logo} alt="logo" className="Img" />
          </div>
          <div className="TextBlock">
            <h1 className="Header">Lewis<span className="Emoji">🌆</span></h1>
            <h3 className="ChangeText">Open a window 🌇</h3>
            <div className="Icons">
              <FontAwesomeIcon icon={faGithub} className="Github" />
              <FontAwesomeIcon icon={faTelegram} className="Telegram"/>
              <FontAwesomeIcon icon={faClipboard} className="Projects"/>
            </div>
          </div>
      </div>
    );
  }
  
  export default MainPage
  