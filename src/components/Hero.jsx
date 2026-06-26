import profile from "../assets/profile.jpeg";

export default function Hero() {
  return (
    <div className="hero reveal" id="hero">
      <img src={profile} alt="Profile" className="profile-img" />

      <div className="hero-text">
        <h1>Ram Sai Nimmagadda</h1>
        <h3>Software/Data Engineer</h3>

        <p>
          Software/Data  Engineer | Spark-Driven Cloud Data Platforms | BigQuery, Snowflake & AWS Analytics Engineering
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
  <a
    className="btn"
    href="https://leetcode.com/u/ramsai1999/"
    target="_blank"
    rel="noopener noreferrer"
  >
    LeetCode
  </a>
</div>
      </div>
    </div>
  );
}