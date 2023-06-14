// Chakra imports
import { Button, Flex, Icon, Spacer, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import React, { useEffect, useState } from "react";
// react icons
import { BsArrowRight } from "react-icons/bs";
import { GiServerRack } from "react-icons/gi";
import PieChart from "./charts/PieChart";
import { pieChartDataCharts1, pieChartOptionsCharts1 } from "./charts/chartData.js";
import axios from "axios";
import { BASE_API_URL } from "views/Dashboard/FormPM/utils/Constanst";
import { unstable_createMuiStrictModeTheme } from "@material-ui/core";
import { set } from "react-hook-form";

const SBackbone = ({ title }) => {
  const textColor = useColorModeValue("gray.700", "white");
  const [statusGood, setStatusGood] = useState();
  const [statusWarning, setStatusWarning] = useState();
  const [statusDanger, setStatusDanger] = useState([]);

  const [shouldRenderTwice, setShouldRenderTwice] = useState(false);
  const [dataChart, setDataChart] = useState([]);

  const dataSb = [];
  //const counts = [];

  /*  useEffect(() => {
    const getDataSbackbone = async () => {
      try {
        const good = await axios.get(`${BASE_API_URL}/pm/count/sbackbonegood`);
    
        setStatusGood(good.data);
        console.log(statusGood);
        const warning = await axios.get(`${BASE_API_URL}/pm/count/sbackbonewarning`);
        
        setStatusWarning(warning.data);
        const danger = await axios.get(`${BASE_API_URL}/pm/count/sbackbonedanger`);
     
        setStatusDanger(danger.data);
     
      } catch (error) {
        console.error("Error get count", error);
      }
    };
    getDataSbackbone();
   
  }, []); */

  /* const getDataSbackbone = async () => {
    try {
      const good = await axios.get(`${BASE_API_URL}/pm/count/sbackbonegood`);

      dataSb.push(good.data);

      const warning = await axios.get(`${BASE_API_URL}/pm/count/sbackbonewarning`);

      dataSb.push(warning.data);

      const danger = await axios.get(`${BASE_API_URL}/pm/count/sbackbonedanger`);

      dataSb.push(danger.data);

      setDataChart(dataSb);
      console.log(dataSb);
    } catch (error) {
      console.error("Error get count", error);
    }
  };*/

  useEffect(() => {
    const getDataSbackbone = async () => {
      try {
        const good = await axios.get(`${BASE_API_URL}/pm/count/sbackbonegood`);

        //dataSb.push(good.data);

        const warning = await axios.get(`${BASE_API_URL}/pm/count/sbackbonewarning`);

        // dataSb.push(warning.data);

        const danger = await axios.get(`${BASE_API_URL}/pm/count/sbackbonedanger`);

        dataSb.push(good.data, warning.data, danger.data);

        console.log(dataSb);
      } catch (error) {
        console.error("Error get count", error);
      }
    };
    getDataSbackbone();
  }, []);

  /*   useEffect(() => {
    console.log(statusGood);
  }, []); */

  return (
    <Card minHeight="290.5px" p="1.2rem" width={{ lg: "400px" }}>
      <Flex w="100%">
        <Text fontSize="lg" color="gray.400" fontWeight="bold">
          {title}
        </Text>
      </Flex>
      <CardBody>
        <Flex my={{ lg: "2rem" }} mx={{ lg: "-5rem" }}>
          <PieChart chartData={dataSb} chartOptions={pieChartOptionsCharts1} />
        </Flex>
      </CardBody>
    </Card>
  );
};

export default SBackbone;
