import { useDispatch } from "react-redux";
import Header from "./components/Header";

function App() {
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <main>
        <section className="intro">
          <h3>Who are we?</h3>
          <p>
            SS Developers is a duo developer group developing web-applications
            and cross platform applications, who started the coding journey back
            in september of 2021. We are only developing apps as a hobby not
            professionaly, with Prawich Thawansakdivudhi developing server-side
            related stuff with NodeJS and MongoDB and Jirat Chutrakul developing
            the frontend with frameworks like React and Flutter.
          </p>
          <div className="intro__images">
            <a className="intro__image" href="https://github.com/Jiraties">
              <h4>
                Jirat Chutrakul <span>Lead Frontend Developer</span>
              </h4>
              <img src="/icons/jirat.jpg" alt="a" />
            </a>
            <a className="intro__image" href="https://github.com/SEN-SENSATION">
              <h4>
                Prawich Thawansakdivudhi <span>Lead Backend Developer</span>
              </h4>
              <img src="/icons/prawich.png" alt="a" />
            </a>
          </div>
        </section>

        <section className="projects">
          <h3>Projects</h3>
        </section>
      </main>
    </>
  );
}

export default App;
