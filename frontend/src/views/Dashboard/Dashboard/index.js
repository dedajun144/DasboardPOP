// Chakra imports
import { Flex, Grid, Image, SimpleGrid, Spacer, useColorModeValue, GridItem } from "@chakra-ui/react";
// assets
import peopleImage from "assets/img/people-image.png";
import logoPOP from "assets/img/pop.png";
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";
// Custom icons
import { CartIcon, DocumentIcon, GlobeIcon, WalletIcon } from "components/Icons/Icons.js";
import React from "react";
import { dashboardTableData, timelineData } from "variables/general";
import ActiveUsers from "./components/ActiveUsers";
import BuiltByDevelopers from "./components/BuiltByDevelopers";
import MiniStatistics from "./components/MiniStatistics";
import OrdersOverview from "./components/OrdersOverview";
import Projects from "./components/Projects";
import SalesOverview from "./components/SalesOverview";
import SBackbone from "./components/SBackbone";
import Backbone from "./components/Backbone";
import WorkWithTheRockets from "./components/WorkWithTheRockets";
import Distribusi from "./components/Distribusi";
import Akses from "./components/Akses";
import ListPop from "./components/ListPop";
import Gi from "./components/Gi";

export default function Dashboard() {
  const iconBoxInside = useColorModeValue("white", "white");

  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }} gap="20px">
      <Grid templateColumns={{ md: "1fr", lg: "repeat(3, 1fr) " }} templateRows={{ md: "1fr auto", lg: "1fr" }} gap="24px">
        <BuiltByDevelopers title={"Event Summary POP"} image={<Image src={logoPOP} alt="chakra image" minWidth={{ md: "51px", lg: "auto" }} boxSize={{ lg: "51px", md: "51px" }} />} />
        <SBackbone title={"POP S-BACKBONE"} />
        <Backbone title={"POP BACKBONE"} />
      </Grid>

      <Grid templateColumns={{ md: "1fr", lg: "repeat(3, 1fr) " }} templateRows={{ md: "1fr auto", lg: "1fr" }} gap="24px">
        <ListPop title={"Performance POP"} image={<Image src={logoPOP} alt="chakra image" minWidth={{ md: "51px", lg: "auto" }} boxSize={{ lg: "51px", md: "51px" }} />} name={"POP S-BACKBONE"} total={"300"} />
        <Distribusi title={"POP DISTRIBUSI"} /> <Akses title={"POP AKSES"} />
      </Grid>

      <Grid templateColumns={{ lg: "repeat(3, 1fr)" }} templateRows={{ lg: "1fr" }} gap="20px">
        <GridItem colSpan={2}>
          <SalesOverview title={"Progress PM POP"} percentage={5} chart={<LineChart />} />
        </GridItem>
        <GridItem colSpan={1}>
          <Gi title={"Lastmile CPE"} />
        </GridItem>
      </Grid>

      {/*  <Grid templateColumns={{ sm: "1fr", lg: "1.3fr 1.7fr" }} templateRows={{ sm: "repeat(2, 1fr)", lg: "1fr" }} gap="24px" mb={{ lg: "26px" }}>
        <ActiveUsers title={"Active Users"} percentage={23} chart={<BarChart />} />
        <SalesOverview title={"Sales Overview"} percentage={5} chart={<LineChart />} />
      </Grid>
      <Grid templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "2fr 1fr" }} templateRows={{ sm: "1fr auto", md: "1fr", lg: "1fr" }} gap="24px">
        <Projects title={"Projects"} amount={30} captions={["Companies", "Members", "Budget", "Completion"]} data={dashboardTableData} />
        <OrdersOverview title={"Orders Overview"} amount={30} data={timelineData} />
      </Grid> */}
    </Flex>
  );
}
