export default function Resume() {
  return (
    <>
      <main>
        <h1 className="page-title">Resume</h1>
        <a href="/resume.pdf" download>
          Download Resume
        </a>
        <div className="resume">
          <section className="section">
            <h2 className="section-title">Education</h2>
            <div className="entry">
              <h3 className="entry-title">
                Bachelor's degree in Computer Science at Cal Poly SLO
              </h3>
              <p className="entry-info"></p>
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">Experience</h2>
            <div className="entry">
              <h3 className="entry-title">Computer Science Tutor</h3>
              <p className="entry-info">
                Ohlone College | August 2024- May 2025
                <p className="entry-description">
                  {" "}
                  - Tutored students in all avaible courses at Ohlone College
                </p>
              </p>
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">Coursework</h2>
            <ul className="course-list">
              <li>Data Structures</li>
              <li>Discrete Structure</li>
              <li>Assembly</li>
            </ul>
          </section>

          <section className="section">
            <h2 className="section-title">Skills</h2>
            <ul className="skill-list">
              <li>C++</li>
              <li>Java</li>
            </ul>
          </section>

          <section className="section">
            <h2 className="section-title">Projects</h2>
            <div className="entry">
              <h3 className="entry-title">Personal Website</h3>
              <p className="entry-info">
                Made a website using HTML and CSS
                <p className="entry-description">
                  {" "}
                  - Used proper git procedures throughout the project build
                  process
                </p>
              </p>
            </div>
          </section>
        </div>
      </main>
      <footer className="footer">
        © 2023 Ethan's Website | All Rights Reserved
      </footer>
    </>
  );
}
