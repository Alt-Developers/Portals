import { useDispatch } from "react-redux";
import Header from "./components/Header";

function App() {
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <main>
        <section className="blocks">
          <div className="timetablesBlock">
            <div className="timetablesBlock__text">
              <h1>Timetables</h1>
              <p>
                Timetables is a web-based timetables program for a Simple,
                Customizable and Practical experience.
              </p>
            </div>
            <object data="/icons/timetables.svg"> </object>
            <div className="timetablesBlock__buttons">
              <button style={{ width: "20rem" }}>Let's go!</button>
              <button>
                <i className="bx bxl-github"></i>
              </button>
            </div>
          </div>

          <div className="prideBlock">
            <h1>
              Pride <br />
              Month <br />
              2022
            </h1>
            <p>Receive the Pride 2022 Theme for SS Developer products</p>

            <button>Receive</button>
          </div>

          <div className="githubBlock">
            <h1>Every line of code is Open Sourced</h1>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
