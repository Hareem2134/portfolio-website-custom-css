import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer(){
    return(
        
        <footer className="footer">

            <p>© 2024 Hareem. All Rights Reserved.</p>
            <p>Contact: hareemfarooqi2134@gmail.com</p>

            <div className="footer-social-link">
                <div className="social-links">
                    <Link href="https://github.com" className="social-icon github">
                        <FontAwesomeIcon icon={faGithub} />
                    </Link>
                    <Link href="https://linkedin.com" className="social-icon linkedin">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </Link>
                    <Link href="https://instagram.com" className="social-icon instagram">
                        <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                </div>
            </div>

        </footer>
    );
}