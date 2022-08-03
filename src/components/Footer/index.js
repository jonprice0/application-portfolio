import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faLinkedin, faSpotify } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return(
        <footer>
            <a href="https://github.com/jonprice0" target="_blank"><FontAwesomeIcon icon={faSquareGithub} size="2xl"/></a>
            <a href="https://www.linkedin.com/in/jonathan-price-313829214/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2xl"/></a>
            <a href="https://open.spotify.com/user/jonprice0?si=8de1f4eb547d4858" target="_blank"><FontAwesomeIcon icon={faSpotify} size="2xl"/></a>
        </footer>
    );
}