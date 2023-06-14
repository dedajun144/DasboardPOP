// Chakra imports
import { Flex, Grid, Image, SimpleGrid, Spacer, useColorModeValue, GridItem } from "@chakra-ui/react";

import React, { useState } from "react";
import logoPOP from "assets/img/pop.png";
/* import BuiltByDevelopers from "../Dashboard/components/BuiltByDevelopers"; */
/* import Header from "./components/Header";
import Cover from "./components/Cover";
/* import Header from "../Profile/components/Header"; */
import "./styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRouter from "./router/AppRouter.js";

import Second from "./components/SecondStep";
import { BrowserRouter as Router, Route, Routes, useParams, Switch } from "react-router-dom";
import Cover from "./components/Cover";
import Kwh from "./components/Kwh";
import Environtment from "./components/Environtment";
import Header from "./components/Header";
import { Button } from "react-bootstrap";
export default function Dashboard() {
  const iconBoxInside = useColorModeValue("white", "white");

  const DispalyComponent = ({ value }) => {
    switch (value) {
      case 1:
        return <Cover />;
      case 2:
        return <Kwh />;
      case 3:
        return <Environtment />;
      default:
        return false;
    }
  };

  const { id } = useParams();

  const isFormPM = 1;
  const isKwh = 2;
  const isEnvirontment = 3;
  const [count, setCount] = useState(1);
  const handleClickCover = () => {
    setCount(1);
  };
  const handleClickKwh = () => {
    setCount(2);
  };
  const handleClickEnvr = () => {
    setCount(3);
  };

  return (
    <Grid pt={{ base: "120px", md: "75px" }} gap="20px">
      <Router>
        <div className="container">
          <Header />
          <div className="steps">
            <div className={`${isFormPM ? "step active" : "step"}`}>
              <div>1</div>
              <div>
                {isFormPM ? (
                  <button onClick={handleClickCover} type="submit">
                    Cover
                  </button>
                ) : (
                  "Cover "
                )}
              </div>
            </div>

            <div className={`${isKwh ? "step active" : "step"}`}>
              <div>2</div>
              <div>
                {isKwh ? (
                  <button onClick={handleClickKwh} type="submit">
                    KWH
                  </button>
                ) : (
                  "KWH"
                )}
              </div>
            </div>

            <div className={`${isEnvirontment ? "step active" : "step"}`}>
              <div>3</div>
              <div>
                {isEnvirontment ? (
                  <button onClick={handleClickEnvr} type="submit">
                    Environtment
                  </button>
                ) : (
                  "Environtment"
                )}
              </div>
            </div>
          </div>
        </div>
      </Router>

      <DispalyComponent value={count} />
    </Grid>
  );
}
