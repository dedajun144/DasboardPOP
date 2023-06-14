import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom";
/* import Cover from "./Cover"; */

const Progress = ({ location: { pathname } }) => {
  const isCover = pathname === "/cover/:id";
  const isFormPM = pathname === location.pathname;
  const isKwh = pathname === "/kwh";
  const isEnvirontment = pathname === "/environtment";

  const history = useHistory();
  /*  useEffect(() => {
    history.push(`/cover`);
  }, []); */
  return (
    <React.Fragment>
      <div className="steps">
        <div className={`${isFormPM ? "step active" : "step"}`}>
          <div>1</div>
          <div>{isFormPM ? <Link to="/cover/:id">Cover</Link> : "Cover 1"}</div>
        </div>

        <div className={`${isKwh ? "step active" : "step"}`}>
          <div>2</div>
          <div>{isEnvirontment ? <Link to="/kwh">KWH</Link> : "KWH"}</div>
        </div>

        <div className={`${pathname === "/environtment" ? "step active" : "step"}`}>
          <div>3</div>
          <div>Environtment</div>
        </div>
      </div>
      {/*  <Cover /> */}
    </React.Fragment>
  );
};

export default withRouter(Progress);
