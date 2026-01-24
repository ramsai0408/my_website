import projectImg from "../assets/fuel.jpg";

export default function Projects() {
  return (
    <div className="section" id="projects">
      <h2>Project</h2>

      <div className="project-card-modern single-project">
        <img src={projectImg} alt="Fuel Analytics Platform" />

        <div className="project-content">
          <h3>Agro-Food CO₂ Emissions Data Analysis & Interactive Visualization</h3>


          <ul className="project-highlights-modern">
            <li>Developed interactive D3.js visualizations to analyze agro-food CO₂ emissions using multi-chart analytical views.</li>
            <li>Implemented trend analysis through bar, line, and scatter plots with dynamic data interaction.</li>
          </ul>

          <div className="project-links-modern">
            <a
              href="https://github.com/JoeSunshine02/TeamFourFinal"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub →
            </a>

            <a
              href="https://public.tableau.com/app/profile/joe.sunshine/viz/shared/2N3HYPPWJ"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Tableau Dashboard →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}