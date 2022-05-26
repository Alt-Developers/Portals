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
    },
    {
      background: "#708DF2",
      subheader: "Azalea Design System",
      header: "The design behind our products.",
      singleImage: "/icons/azalea.png",
    },
    // {
    //   background: "#708DF2",
    //   subheader: "Todos open beta",
    //   header: "Simplify your workflow.",
    //   singleImage: "/icons/Timetables2.png",
    // },
  ];

  return (
    <section
      className="header"
      style={{ background: pageContent[page]["background"] }}
    >
      <nav
        className={`nav ${
          pageContent[page]["background"].charAt(0) === "#"
            ? ""
            : "nav__blurred"
        }`}
      >
        <img src="/icons/portal.png" alt="portals logo" />
        <div className="nav__links">
          <a href="#">Who we are</a>
          <a href="#">About Us</a>
          <a href="#">Testimonials</a>
          <a href="#">Github</a>
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
