import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom";

const Progress = ({ location: { pathname } }) => {
  const isCover = pathname === "/cover";
  const isFormPM = pathname === location.pathname;
  const isKwh = pathname === "/kwh";
  const isEnvirontment = pathname === "/environtment";

  const history = useHistory();
  useEffect(() => {
    history.push("/cover");
  }, []);
  return (
    <React.Fragment>
      <div className="steps">
        <div className={`${isFormPM ? "step active" : "step"}`}>
          <div>1</div>
          <div>{isFormPM ? <Link to="/cover">Cover</Link> : "Cover 1"}</div>
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
    </React.Fragment>
  );
};

export default withRouter(Progress);
