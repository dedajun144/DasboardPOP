// Chakra imports
import { Button, Flex, Icon, Spacer, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import React, { useEffect } from "react";
// react icons
import { BsArrowRight } from "react-icons/bs";
import { GiServerRack } from "react-icons/gi";
import PieChart from "./charts/PieChart";
import { pieChartDataCharts1, pieChartOptionsCharts1 } from "./charts/chartData.js";
import { BASE_API_URL } from "utils/Constanst";
import axios from "axios";

const Akses = ({ title }) => {
  const textColor = useColorModeValue("gray.700", "white");

  const dataA = [];

  useEffect(() => {
    const getAkses = async () => {
      try {
        const good = await axios.get(`${BASE_API_URL}/pm/count/aksesgood`);

        //dataA.push(good.data);

        const warning = await axios.get(`${BASE_API_URL}/pm/count/akseswarning`);

        //dataA.push(warning.data);

        const danger = await axios.get(`${BASE_API_URL}/pm/count/aksesdanger`);

        dataA.push(good.data, warning.data, danger.data);
        /*  console.log(dataC); */
      } catch (error) {
        console.error("Error get count", error);
      }
    };
    getAkses();
  }, []);

  return (
    <Card minHeight="290.5px" p="1.2rem" width={{ lg: "400px" }}>
      <Flex w="100%">
        <Text fontSize="lg" color="gray.400" fontWeight="bold">
          {title}
        </Text>
      </Flex>
      <CardBody>
        <Flex my={{ lg: "2rem" }} mx={{ lg: "-5rem" }}>
          <PieChart chartData={dataA} chartOptions={pieChartOptionsCharts1} />
        </Flex>
      </CardBody>
    </Card>
  );
};

export default Akses;
