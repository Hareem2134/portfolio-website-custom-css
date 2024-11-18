"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import "../../src/app/globals.css";
import AnimatedPopup from "../../components/AnimatedPopup";


const skills = [
  {
    title: "Programming Languages",
    items: ["C", "C#", "C++", "Java", "JavaScript", "TypeScript", "HTML", "CSS"]
  },
  {
    title: "Web Development",
    items: ["DreamWeaver", "Wordpress", "React.js", "Next.js"]
  },
  {
    title: "Social Media Management",
    items: ["Instagram", "Facebook", "TikTok", "YouTube", "Pinterest", "X"]
  },
  {
    title: "Design",
    items: ["Photoshop", "Illustrator", "Premiere Pro"]
  },
  {
    title: "3D Game Development",
    items: ["Unity3D", "Unreal Engine"]
  },
  {
    title: "Digital Marketing",
    items: ["SEO", "Content Marketing", "Social Media Marketing"]
  }
];


const experiences = [
  {
    company: "Dr. Quran (UK)",
    role: "Social Media Manager & Web Developer",
    description: "Led social media strategy and web development initiatives"
  },
  {
    company: "HSH Clothing (Canada)",
    role: "Social Media Manager & Web Developer",
    description: "Managed online presence and e-commerce development"
  },
  {
    company: "Sheraz Properties (Dubai)",
    role: "Social Media Manager",
    description: "Handled digital marketing and social media campaigns"
  },
  {
    company: "Ansaarullah (Pakistan)",
    role: "Web Developer",
    description: "Developed and maintained web applications"
  }
];


const PortfolioCard = [
  {
    image: "/1.png",
    title: "Multipage Website",
    description: "A beautiful Multipage Ecommerce Website",
    link: "https://multipage-website-custom-css.vercel.app/"
  },
  {
    image: "/2.png",
    title: "Figma to HTML website",
    description: "Converted Figma Design to HTML",
    link: "https://figma-to-html-assignment-class7-19thoct.vercel.app/"
  },
  {
    image: "/3.png",
    title: "Resume (Nextjs)",
    description: "My Resume in Nextjs",
    link: "https://personal-resume-assignment-12oct.vercel.app/"
  },
  {
    image: "/4.png",
    title: "Static Resume (HTML CSS)",
    description: "A stunning portfolio website",
    link: "https://static-resume-by-hareemfarooqi.vercel.app/"
  },
  {
    image: "/5.png",
    title: "Dynamic Resume (HTML CSS)",
    description: "Dynamic Resume in HTML CSS",
    link: "https://dynamic-resume-five-alpha.vercel.app/"
  },
  {
    image: "/6.png",
    title: "Simple Calculator",
    description: "A Simple Calculator in Typescript",
    link: "https://github.com/Hareem2134/simple-calculator"
  },
  {
    image: "/7.png",
    title: "Student Management System",
    description: "Student Management System in Typescript",
    link: "https://github.com/Hareem2134/Student-Management-System"
  },
  {
    image: "/8.png",
    title: "Currency Converter",
    description: "Currency Converter in Typescript",
    link: "https://github.com/Hareem2134/Currency-Converter"
  },
  {
    image: "/9.png",
    title: "ATM App",
    description: "ATM in Typescript",
    link: "https://github.com/Hareem2134/ATM"
  }
];


export default function Home() {

  return (
    <div id="home" className="home">

      <div className="content-container">

        <div className="hero-container">

          <AnimatedPopup animationType="popup">

            <Image src="/profile.jpg" alt="Profile Image" width={200} height={200} className="hero-image" priority={true} />

          </AnimatedPopup>

          <div className="text-content">

            <AnimatedPopup animationType="tracking">
              <div className="intro">
                <h1>Hello,</h1>
                <h1>I'm HAREEM FAROOQI</h1>
                <h2>Web Developer & Designer</h2>
              </div>
              </AnimatedPopup>

          <div className="description">

            <AnimatedPopup animationType="focus">
            <p>A passionate web developer and designer with expertise in creating
            beautiful, functional, and user-friendly websites. Specializing in
            modern web technologies and creative design solutions.</p>
            </AnimatedPopup>
          </div>

          <div className="flex-container">
            <a href="#contact" className="contact-button">
              Contact Me
            </a>
            <a href="#about" className="learn-more-button">
              Learn More
            </a>
          </div>

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
      </div>
    </div>
    
      <section id="about" className="about">

        <div className="about-container">

          <div className="about-header">
            <h2 className="about-title">About Me</h2>
            <div className="about-underline"></div>
          </div>

          <div className="about-content">

            <div className="about-text">
              <p>
                Alhamdulillah I am a dedicated professional with experience in social media management, graphic design, video editing, and web development. I have collaborated with global clients like Dr. Quran (UK), HSH Clothing (Canada), Sheraz Properties (Dubai), and Ansaarullah (Pakistan) to create visually compelling content and manage impactful digital strategies.
              </p>
              <p>
                Alhamdulillah With a solid foundation in programming languages like C, C#, C++, Java, JavaScript, TypeScript, HTML, and CSS. Currently, I am expanding my knowledge in generative AI and Cloud Computing to further enhance my skill set In Shaa Allah.
              </p>
              <p>
                Passionate about continuous learning, I aim to contribute my diverse expertise in web development, design, and social media management to deliver creative and effective solutions In Shaa Allah.
              </p>

            </div>
            <a href="#contact" className="about-contact-button">
              Contact Me
            </a>
          </div>

        </div>
      </section>
      
      <section id="skills" className="skills-section">
        <div className="skills-container">
          <div className="skills-header">
            <h2 className="skills-title">Skills</h2>
            <div className="skills-underline"></div>
          </div>
          <div className="skill-grid">
            {skills.map((skillGroup) => (
              <div key={skillGroup.title} className="skill-card">
                <h3 className="skill-title">{skillGroup.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <span key={item} className="skill-item">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section id="experience" className="experience-section">

        <div className="experience-container">
          <div className="experience-header">
            <h2 className="experience-title">Experience</h2>
            <div className="experience-underline"></div>
          </div>
          <div className="space-y-8">

            {experiences.map((exp) => (
              <div key={exp.company} className="experience-card">
                <h3 className="experience-company">{exp.company}</h3>
                <p className="experience-role">{exp.role}</p>
                <p className="experience-description">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="portfolio-section">
        <div className="portfolio-container">
          <div className="portfolio-header">
            <h2 className="portfolio-title">Portfolio</h2>
            <div className="portfolio-underline"></div>
          </div>
          <div className="portfolio-grid">
            {PortfolioCard.map((card) => (
              <div key={card.title} className="portfolio-card">

                <Link href={card.link} target="_blank">
                <Image src={card.image} alt={card.title} width={300} height={300} className="portfolio-image" />
                </Link>

                <div className="portfolio-content">
                  <h3 className="portfolio-title">{card.title}</h3>
                  <p className="portfolio-description">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-header">
            <h2 className="contact-title">Contact Me</h2>
            <div className="contact-underline"></div>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <h3 className="contact-subtitle">Get In Touch</h3>
              <p className="contact-text">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <a href="mailto:hareemfarooqi2134@gmail.com" className="contact-link">
                    hareemfarooqi2134@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <a href="tel:+923242762668" className="contact-link">
                    +92 324 2762668
                  </a>
                </div>
              </div>




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
            <div className="contact-form">

              <form className="space-y-6">

                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea className="form-textarea"></textarea>
                </div>
                <button type="submit" className="submit-button">
                  Send Message
                </button>

              </form>

            </div>
          </div>
        </div>
        
      </section>

      </div>

  );
}

