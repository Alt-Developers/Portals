import { useDispatch } from "react-redux";
import Header from "./components/Header";

function App() {
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <main>
        <section className="intro">
          <h3>Introduction</h3>

          <p>
            SS Developers is a duo developer group developing web-applications
            and cross platform applications, who started the coding journey back
            in september of 2021. We are only developing apps as a hobby not
            professionaly, with Prawich Thawansakdivudhi developing server-side
            related stuff with NodeJS and MongoDB and Jirat Chutrakul developing
            the frontend with frameworks like React and Flutter.
          </p>
          <div className="intro__images">
            <div className="intro__image">
              <h4>
                Jirat Chutrakul <br />{" "}
                <span>Lead Frontend Developer - UI/UX Designer</span>
              </h4>
              <div className="intro__imageButtons">
                <div>
                  <a href="https://github.com/SEN-SENSATION">
                    <i className="bx bxl-github"></i>
                  </a>
                </div>
              </div>
              <img src="/icons/jirat.jpg" alt="a" />
            </div>
            <div className="intro__image">
              <h4>
                Prawich Thawansakdivudhi <br />
                <span>Lead Backend Developer - Database Manager</span>
              </h4>
              <div className="intro__imageButtons">
                <div>
                  <a href="https://github.com/SEN-SENSATION">
                    <i className="bx bxl-github"></i>
                  </a>
                </div>
              </div>

              <img src="/icons/prawich.png" alt="a" />
            </div>
          </div>
        </section>

        <div className="separator">
          <p></p>
        </div>

        <section className="projects">
          <h3>Projects</h3>
          <div className="projects__list">
            <div className="projects__item">
              <img src="/icons/Timetables1.png" alt="" />
              <h4>Timetables</h4>
            </div>
          </div>
        </section>
        <div className="separator"></div>
      </main>
    </>
  );
}

export default App;
