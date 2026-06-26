export default function Contact() {
  return (
    <div className="section contact-section reveal" id="contact">
      <h2>📬 Get In Touch</h2>

      <p className="contact-description">
        I am a Software/Data Engineer with 3+ years of experience building reliable data platforms, modernizing legacy data systems, and delivering trusted datasets for business reporting and analytics. My work focuses on large-scale data migration, validation, reconciliation, and cloud-based data processing across enterprise and financial environments.  
        <br /><br />
        I enjoy solving complex data problems, improving data quality, and building scalable systems that help business teams access accurate, secure, and analytics-ready information for decision-making.
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