import "./about.css";
import Info from "./Info";
import GithubContribution from "./GithubContribution";
import CVModal from "./CVModal";
import AboutImage from "../../assets/profile.png";

const About = ({ isCVModalOpen, setIsCVModalOpen }) => {
  const cvUrl = "/Majeed_Mehmood_Resume.pdf";

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="text-center mb-16">
          <span className="section__label">A Glimpse Into My World</span>
          <h2 className="section__title">The Engineer Behind the Code</h2>
          <p className="section__subtitle">
            Blending technical rigor with creative vision to build the future of digital experiences.
          </p>
        </div>

        <div className="about__container">
          <div className="about__visual">
            <div className="about__img-container">
              <img src={AboutImage} alt="Profile" className="about__img" />
              <div className="about__img-overlay"></div>
            </div>
            <div className="about__experience-badge">
              <span className="badge__number">03+</span>
              <span className="badge__text">Years of<br />Experience</span>
            </div>
          </div>

          <div className="about__content">
            <div className="about__text-block">
              <p className="about__description">
                I'm a <strong>Software Engineer</strong> with expertise in backend development using C# and .NET Core, complemented by strong frontend skills in HTML and jQuery. Proficient in designing and developing RESTful APIs with ASP.NET Core and implementing efficient database solutions.
              </p>
              <p className="about__description">
                Experienced in delivering ERP solutions, including Human Resource Management (HRM), Time Management, Supply Chain Management, E-commerce, Inventory Management, and School Management systems. Adept at problem-solving, optimizing performance, and delivering high-quality, scalable software solutions.
              </p>
            </div>

            <Info />
            
            <GithubContribution />

            <div className="about__actions">
              <a
                href={cvUrl}
                download="Majeed_Mehmood_Resume.pdf"
                className="button button--large"
              >
                Download Resume
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="button__icon"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              </a>

              <button
                type="button"
                className="button button--secondary button--large"
                onClick={() => setIsCVModalOpen(true)}
              >
                Interactive CV
              </button>
            </div>
          </div>
        </div>
      </div>

      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
        cvUrl={cvUrl}
      />
    </section>
  );
};

export default About;