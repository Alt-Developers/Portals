const Landing = props => {
  return (
    <>
      <section className="header">
        <div className="header__text">
          <p>ssDevelopers = ["Jirat Chutrakul", "Prawich Thawansakdivudhi"]</p>
          <h1>
            A Tale of Two Developers <br />
            and a dream.
          </h1>
          <div className="header__ghost">
            <h1 style={{ color: "#FFFFFF80" }}>dream</h1>
            <h1 style={{ color: "#FFFFFF50" }}>dream</h1>
          </div>
        </div>

        <img
          className="header__image"
          src="https://cdn.mos.cms.futurecdn.net/sdSHp2akMYc4EoZAoRE77k-1200-80.jpg"
          alt=""
        />
      </section>
      <main>
        <section className="about">
          <h3>Who are we?</h3>
          <p>
            SS Developers is a group of 2 middle schoolers who are interested in
            web development and based in Bangkok , Thailand.
            <br />
            We have been developing actively since september of 2021.
          </p>
        </section>
        <section className="tech">
          <div className="tech__frontend">
            <i className="bx bxl-react" style={{ color: "#2a87eb" }}></i>
            <h3>Front-End</h3>
            <p>
              Experienced In <br />
              React JS
              <br />
              Sass
            </p>
          </div>
          <div className="tech__frontend">
            <i className="bx bxl-nodejs" style={{ color: "#19c219" }}></i>
            <h3>Backend</h3>
            <p>
              Experienced In <br />
              Node JS
              <br />
              Mongo DB
            </p>
          </div>
          <div className="tech__frontend">
            <i className="bx bxl-figma" style={{ color: "#8c00ff" }}></i>
            <h3>UI/UX</h3>
            <p>
              Experienced In <br />
              Figma
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Landing;
