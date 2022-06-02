import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Header = (props) => {
  const [page, setPage] = useState(0);
  const [incrementOrDecrement, setIncrementOrDecrement] = useState<
    "increment" | "decrement"
  >("increment");

  const pageContent = [
    {
      background: "#fd5252",
      subheader: "Timetables v3 is here",
      header: "Next level of Timetables",
      doubleImage: {
        first: "/icons/Timetables2.png",
        second: "/icons/Timetables1.png",
      },
      links: [
        {
          text: "Check out Timetables",
          href: "https://timetables.ssdevelopers.xyz/",
        },
      ],
    },
    // {
    //   background: `url("/icons/rainbow.jpg")`,
    //   subheader: "Celebrating",
    //   header: "Pride Month 2022",
    //   singleImage:
    //     "https://www.gaypride.fr/wp-content/uploads/2022/01/pride-2022.jpg",
    // },
    // {
    //   background: "#708DF2",
    //   subheader: "Todos open beta",
    //   header: "Simplify your workflow.",
    //   singleImage: "/icons/Timetables2.png",
    // },
  ];

  const pageControler = (event) => {
    if (event.code === "ArrowRight" && page + 1 < pageContent.length) {
      setPage(page + 1);
      setIncrementOrDecrement("increment");
    }

    if (event.code === "ArrowLeft" && page - 1 >= 0) {
      setPage(page - 1);
      setIncrementOrDecrement("decrement");
    }
  };

  return (
    <section
      className="header"
      style={{ background: pageContent[page]["background"] }}
      onKeyDown={(event) => pageControler(event)}
      tabIndex={0}
    >
      <nav
        className={`nav ${
          pageContent[page]["background"].charAt(0) === "#"
            ? ""
            : "nav__blurred"
        }`}
      >
        <img src="/icons/portal.png" alt="portals logo" />
        <i className="bx bx-menu"></i>
        <div className="nav__links">
          <a href="https://timetables.ssdevelopers.xyz">Timetables</a>
          <a href="https://github.com/SS-Developers">Github</a>
        </div>
      </nav>
      <i
        className={`bx bxs-chevron-left header__leftIcon ${
          page - 1 < 0 ? "header__inactiveIcon" : ""
        }`}
        onClick={() => {
          if (page - 1 >= 0) {
            setPage(page - 1);
            setIncrementOrDecrement("decrement");
          }
        }}
      ></i>
      <i
        className={`bx bxs-chevron-right header__rightIcon ${
          page + 1 > pageContent.length - 1 ? "header__inactiveIcon" : ""
        }`}
        onClick={() => {
          if (page + 1 < pageContent.length) {
            setPage(page + 1);
            setIncrementOrDecrement("increment");
          }
        }}
      ></i>
      <motion.div
        className="header__text"
        key={pageContent[page]["subheader"]}
        initial={{
          x: incrementOrDecrement === "increment" ? 50 : -50,
          y: "50%",
        }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "inertia",
          // timeConstant: 1000,
          velocity: 0,
          min: 0,
          max: 1,
          bounceDamping: 100,
        }}
      >
        <p>{pageContent[page]["subheader"]}</p>
        <h1>{pageContent[page]["header"]}</h1>
        <div className="header__text--links">
          {pageContent[page]["links"]?.map((link) => (
            <a href={link.href} target="_blank">
              <i className="bx bxs-chevrons-right"></i>
              {link.text}
            </a>
          ))}
        </div>
      </motion.div>
      <div className="header__imageGroup">
        {pageContent[page]["doubleImage"] && (
          <>
            <motion.img
              src={pageContent[page]?.doubleImage?.first ?? ""}
              alt=""
              className="header__imageGroup--img1"
            />
            <motion.img
              src={pageContent[page]?.doubleImage?.second ?? ""}
              alt=""
              className="header__imageGroup--img2"
            />
          </>
        )}
        {pageContent[page]["singleImage"] && (
          <>
            <motion.img
              src={pageContent[page]["singleImage"] ?? ""}
              alt=""
              className="header__imageGroup--singleImg"
            />
          </>
        )}
      </div>
    </section>
  );
};

export default Header;
