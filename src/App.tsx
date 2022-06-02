import { useDispatch } from "react-redux";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <main>
        <section className="blocks">
          <div className="timetablesBlock block">
            <div className="timetablesBlock__text">
              <h1>Timetables</h1>
              <p>
                Timetables is a web-based timetables program for a Simple,
                Customizable and Practical experience.
              </p>
            </div>
            <object data="/icons/timetables.svg"> </object>
            <div className="timetablesBlock__buttons">
              <a
                className="u-remove-a-eff"
                href="https://timetables.ssdevelopers.xyz"
                style={{ width: "20rem" }}
              >
                Let's go!
              </a>
              <button>
                <i className="bx bxl-github"></i>
              </button>
            </div>
          </div>

          <div className="prideBlock block">
            <h1>
              Pride <br />
              Month <br />
              2022
            </h1>
            <div className="prideBlock__bottom">
              <p>Claim the Pride 2022 Theme for SS Developer products</p>

              <button>Receive</button>
            </div>
          </div>

          <div className="githubBlock block">
            <h1>
              <span>Our projects are</span> Open Sourced
            </h1>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
