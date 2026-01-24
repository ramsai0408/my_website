export default function Experience() {
  return (
    <div className="section" id="experience">
      <h2>Experience</h2>

      <div className="card">
        <h3>Software Engineer – Backend Developer</h3>
        <p>Tautelary Inc. | jan 2025 – present</p>

        <ul>
          <li>Developed secure RESTful APIs using MVC architecture for transaction-driven backend systems, handling 5K to 10K daily calls with sub-second response times and improving reliability by 20% through enhanced validation and error handling.</li>
          <li>Implemented CI/CD pipelines using Git, Maven, Jenkins, and Docker to automate build, test, and deployment processes, reducing manual release effort by 40%.</li>
          <li>Worked extensively with PostgreSQL, writing complex SQL queries and optimizing indexes to improve query performance by 25 to 40% for critical application features.</li>
          <li>Implemented comprehensive unit tests using JUnit and Mockito, validating core business logic, API contracts, and edge cases, which increased test coverage by 30% and reduced post-release defects by 25%.</li>
        </ul>
      </div>

      <div className="card">
        <h3>Software Developer</h3>
        <p>Cognizant Technology Solutions, Hyderabad | Nov 2020 – May 2023</p>

        <ul>
          <li>Implemented RESTful web services to enable secure data exchange across 5+ internal systems spanning multiple business domains, improving system interoperability and reducing manual data reconciliation by 30%.</li>
          <li>Migrated on-prem Java services to AWS via CI/CD-driven S3-to-EC2 deployments, enabling scalable Spring Boot runtimes and reducing infrastructure overhead by 35%.</li>
          <li>Automated end-to-end functional validation using Selenium and BDD Cucumber, verifying UI text, user interactions, and backend API responses, reducing manual testing cycles by 40%.</li>
        </ul>
      </div>
    </div>
  );
}