import { useDispatch } from "react-redux";
import Header from "./components/Header";
import Intro from "./components/Intro";

function App() {
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <main>
        <Intro />

        <hr className="separator" />

        <section className="projects" id="projects">
          <h3>Projects</h3>
          <div className="projects__list">
            <div className="projects__item">
              <div className="projects__image">
                {/* <img src="/icons/Timetables1.png" alt="" /> */}
                <img src="/icons/Timetables2.png" alt="" />
              </div>

              <div className="projects__content">
                <h4>
                  Timetables <span>Featured Project</span>
                </h4>
                <p>
                  School timetable web-app for a Simple, Customizable and
                  Practical experience.
                </p>
              </div>
            </div>

            <div className="projects__item">
              <div className="projects__image">
                <img src="/icons/Authentication.PNG" alt="" />
              </div>

              <div className="projects__content">
                <h4>Central Authentication</h4>
                <p>Central Authentication system for SS Developer products</p>
              </div>
            </div>
          </div>
        </section>
        <div className="separator"></div>
      </main>
    </>
  );
}

export default App;
