export default function Contact() {
  return (
    <div className="section contact-section" id="contact">
      <h2>📬 Get In Touch</h2>

      <p className="contact-description">
        I am currently exploring Full Stack and Backend Engineering opportunities 
        where I can architect scalable microservices, design high-performance APIs, 
        and build distributed data platforms that operate reliably at scale.  
        <br /><br />
        My focus lies in production-grade backend systems, cloud-native infrastructure, 
        and performance-optimized data workflows. If you are building systems that demand 
        reliability, scalability, and clean architecture, I would welcome the opportunity to connect.
      </p>

      <div className="contact-buttons">
        <a
          href="mailto:ramsai9999@zohomail.com"
          className="contact-btn primary-btn"
        >
          ✉ Email Me
        </a>

        <a
          href="https://www.linkedin.com/in/sainimmagadda0408/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn secondary-btn"
        >
          🔗 Connect on LinkedIn
        </a>
      </div>
    </div>
  );
}