import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Link, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import Header from "../components/Header";
import Kwh from "../components/Kwh.js";
import Cover from "../components/Cover.js";
import SecondStep from "../components/SecondStep";
import Environtment from "../components/Environtment.js";
const AppRouter = () => {
  const location = useLocation();

  const [pm, setPM] = useState({});

  const updatePM = (data) => {
    setPM((prevPM) => ({ ...prevPM, ...data }));
  };

  const resetPM = () => {
    setPM({});
  };

  return (
    <BrowserRouter>
      <div className="container">
        <Header />

        <Switch>
          <Route render={(props) => <Cover {...props} pm={pm} updatePM={updatePM} />} path="/cover" />
          <Route render={(props) => <Kwh {...props} pm={pm} updatePM={updatePM} />} path="/kwh" />
          <Route render={(props) => <Environtment {...props} pm={pm} updatePM={updatePM} resetPM={resetPM} />} path="/environtment" />
        </Switch>

        {/* <Switch>
          <Route path="/detail/:id" element={<Cover />} />
        </Switch> */}
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
