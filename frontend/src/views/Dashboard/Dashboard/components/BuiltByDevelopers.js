// Chakra imports
import { Flex, Spacer, Text, useColorModeValue } from "@chakra-ui/react";
import axios from "axios";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import React, { useState, useEffect } from "react";

import { BASE_API_URL } from "views/Dashboard/FormPM/utils/Constanst";
// react icons
/* import { BsArrowRight } from "react-icons/bs";
import { GiServerRack } from "react-icons/gi"; */

const status = {
  good: "GOOD",
  warning: "WARNING",
  danger: "DANGER",
};

const BuiltByDevelopers = ({ title, name, description, image, total }) => {
  const textColor = useColorModeValue("gray.700", "white");
  const [statusGood, setStatusGood] = useState(0);
  const [statusWarning, setStatusWarning] = useState(0);
  const [statusDanger, setStatusDanger] = useState(0);
  useEffect(() => {
    const getStatus = async () => {
      try {
        const good = await axios.get(`${BASE_API_URL}/pm/count/good`);
        setStatusGood(good.data);
        const warning = await axios.get(`${BASE_API_URL}/pm/count/warning`);
        setStatusWarning(warning.data);
        const danger = await axios.get(`${BASE_API_URL}/pm/count/danger`);
        setStatusDanger(danger.data);
      } catch (error) {
        console.error("Error get count", error);
      }
    };
    getStatus();
  }, []);
  return (
    <Card minHeight="290.5px" p="1.2rem" width={{ lg: "400px" }}>
      <Flex w="100%">
        <Text fontSize="lg" color="gray.400" fontWeight="bold">
          {title}
        </Text>
      </Flex>
      <CardBody>
        <Flex flexDirection="row" h="100%" width={{ lg: "100%" }} mx={{ lg: "5px" }} my={{ lg: "3rem" }}>
          <Flex flexDirection="column" bg="green.300" justify="center" borderRadius="100%" height={{ lg: "89px", sm: "89px" }} width={{ lg: "89px", sm: "89px" }} my={{ sm: "1.5rem", lg: "10px" }}>
            <Flex justify="center">{image}</Flex>
            <Text fontSize="10px" color={textColor} fontWeight="bold" textAlign="center">
              {status.good}
            </Text>
            <Text fontSize="12px" color={textColor} fontWeight="bold" textAlign="center">
              {statusGood}
            </Text>
          </Flex>
          <Spacer />
          <Flex flexDirection="column" bg="yellow.200" justify="center" borderRadius="100%" height={{ lg: "89px", sm: "89px" }} width={{ lg: "89px", sm: "89px" }} my={{ sm: "1.5rem", lg: "10px" }}>
            <Flex justify="center">{image}</Flex>
            <Text fontSize="10px" color={textColor} fontWeight="bold" textAlign="center">
              {status.warning}
            </Text>
            <Text fontSize="12px" color={textColor} fontWeight="bold" textAlign="center">
              {statusWarning}
            </Text>
          </Flex>
          <Spacer />
          <Flex flexDirection="column" bg="red.300" justify="center" borderRadius="100%" height={{ lg: "89px", sm: "89px" }} width={{ lg: "89px", sm: "89px" }} my={{ sm: "1.5rem", lg: "10px" }}>
            <Flex justify="center">{image}</Flex>
            <Text fontSize="10px" color={textColor} fontWeight="bold" textAlign="center">
              {status.danger}
            </Text>
            <Text fontSize="12px" color={textColor} fontWeight="bold" textAlign="center">
              {statusDanger}
            </Text>
          </Flex>

          {/* {" "} */}
        </Flex>
      </CardBody>
    </Card>
  );
};

export default BuiltByDevelopers;
