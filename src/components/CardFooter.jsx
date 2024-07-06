import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faTwitter,
  faInstagram,
  faGithub,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';

export default function CardFooter() {
  return (
    <div className="footer">
      <button className="twitter-icon">
        <FontAwesomeIcon icon={faTwitter} className="icon" />
      </button>
      <button className="facebook-icon">
        <FontAwesomeIcon icon={faFacebook} className="icon" />
      </button>
      <button className="instagram-icon">
        <FontAwesomeIcon icon={faInstagram} className="icon" />
      </button>
      <button className="linked-icon">
        <FontAwesomeIcon icon={faLinkedin} className="icon" />
      </button>
      <button className="github-icon">
        <FontAwesomeIcon icon={faGithub} className="icon" />
      </button>
    </div>
  );
}
