// Chakra imports
import { Flex, Grid, Image, SimpleGrid, Spacer, useColorModeValue, GridItem } from "@chakra-ui/react";

import React from "react";
import logoPOP from "assets/img/pop.png";
/* import BuiltByDevelopers from "../Dashboard/components/BuiltByDevelopers"; */
/* import Header from "./components/Header"; */
import Cover from "./components/Cover";
/* import Header from "../Profile/components/Header"; */
import "./styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRouter from "./router/AppRouter.js";

import Second from "./components/SecondStep";
export default function Dashboard() {
  const iconBoxInside = useColorModeValue("white", "white");

  return (
    <Grid pt={{ base: "120px", md: "75px" }} gap="20px">
      <AppRouter />
    </Grid>
  );
}
