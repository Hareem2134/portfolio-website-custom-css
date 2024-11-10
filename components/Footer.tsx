import Link from "next/link";

export default function Footer(){
    return(
        
        <footer className="footer">
            <p>© 2024 Hareem. All Rights Reserved.</p>
            <p>Contact: hareemfarooqi2134@gmail.com</p>
            <p>
                <Link className="footer-link" href="https://www.linkedin.com/in/hareemfarooqi/">LinkedIn</Link> | 
                <Link className="footer-link" href="https://github.com/Hareem2134">GitHub</Link> |  
                <Link className="footer-link" href="https://www.instagram.com/HAREEM.FAROOQI">Instagram</Link>
                </p>
        </footer>
    );
}