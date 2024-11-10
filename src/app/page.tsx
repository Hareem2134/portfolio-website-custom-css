import Image from "next/image";


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
    title: "Design",
    items: ["Photoshop", "Illustrator", "Premiere Pro"]
  },
  {
    title: "Social Media Management",
    items: ["Instagram", "Facebook", "TikTok", "YouTube", "Pinterest", "X"]
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




export default function Home() {
  return (
    <div id="home" className="home">
      <div className="overlay" />

      <div className="content-container">
        <div className="hero-container">
          <Image
            src="/profile.jpg"
            alt="Profile Image"
            width={200}
            height={200}
            className="hero-image"
            priority={true}
          />
          <div className="text-content">
            <div className="intro">
              <h1>Hello, I'm</h1>
              <h1>HAREEM FAROOQI</h1>
              <h2>Web Developer & Designer</h2>
            </div>

            <p className="description">
              A passionate web developer and designer with expertise in creating
              beautiful, functional, and user-friendly websites. Specializing in
              modern web technologies and creative design solutions.
            </p>

            <div className="flex-container">
              <a href="#contact" className="contact-button">
                Contact Me
              </a>
              <a href="#about" className="learn-more-button">
                Learn More
              </a>
            </div>

            <div className="social-links">
              <a href="https://github.com" className="social-link">
                GitHub
              </a>
              <a href="https://linkedin.com" className="social-link">
                LinkedIn
              </a>
              <a href="https://instagram.com" className="social-link">
                Instagram
              </a>
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
        <div className="personal-info-grid">
          <div>
            <strong className="personal-info-label">Name:</strong> Hareem Farooqi
          </div>
          <div>
            <strong className="personal-info-label">Email:</strong>{" "}
            hareemfarooqi2134@gmail.com
          </div>
          <div>
            <strong className="personal-info-label">From:</strong> Pakistan
          </div>
          <div>
            <strong className="personal-info-label">Phone:</strong> +92 324
            2762668
          </div>
        </div>
        <a href="#contact" className="contact-button">
          Contact Me
        </a>
      </div>
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








      {/* Contact Section */}
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
          <a href="https://github.com" className="social-icon github">GH</a>
          <a href="https://linkedin.com" className="social-icon linkedin">IN</a>
          <a href="https://instagram.com" className="social-icon instagram">IG</a>
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
