import profile from "../assets/profile.jpeg";

export default function Hero() {
  return (
    <div className="hero" id="hero">
      <img src={profile} alt="Profile" className="profile-img" />

      <div className="hero-text">
        <h1>Ram Sai Nimmagadda</h1>
        <h3>Software Developer</h3>

        <p>
          Backend Engineer | Building Scalable API  & Microservices
        </p>

        <div className="button-group">
  <a
    className="btn"
    href="https://www.linkedin.com/in/sainimmagadda0408/"
    target="_blank"
    rel="noopener noreferrer"
  >
    LinkedIn
  </a>

  <a
    className="btn"
    href="https://github.com/ramsai0408"
    target="_blank"
    rel="noopener noreferrer"
  >
    GitHub
  </a>

  <a
    className="btn"
    href="mailto:ramsai9999@zohomail.com"
  >
    Email
  </a>
</div>
      </div>
    </div>
  );
}