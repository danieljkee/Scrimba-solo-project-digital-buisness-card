import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function InfoButtons() {
  return (
    <div className="info-buttons">
      <button className="primary-button button-email">
        <FontAwesomeIcon icon={faEnvelope} />
        Email
      </button>
      <button className="primary-button button-linkedin">
        <FontAwesomeIcon icon={faLinkedin} />
        LinkedIn
      </button>
    </div>
  );
}
