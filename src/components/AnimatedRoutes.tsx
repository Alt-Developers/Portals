import Home from "../pages/Home";

import { Route } from "react-router";

const AnimatedRoutes = (props) => {
  return <Route path="/" element={<Home />} />;
};

export default AnimatedRoutes;
