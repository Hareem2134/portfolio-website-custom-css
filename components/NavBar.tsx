import Link from "next/link";

export default function NavBar(){
    return(
        <div>
            <ul className="nav">
                <Link className="nav-links" href="#introduction">Introduction</Link>
                <Link className="nav-links" href="#contact">Contact</Link>
                <Link className="nav-links" href="#skills">Skills</Link>
                <Link className="nav-links" href="#education">Education</Link>
                <Link className="nav-links" href="#experience">Experience</Link>
                <Link className="nav-links" href="#portfolio">Porfolio</Link>
            </ul>
        </div>
        
    );
}




