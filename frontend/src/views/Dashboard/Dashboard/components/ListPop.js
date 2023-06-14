// Chakra imports
import { Button, Flex, Icon, Spacer, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import React from "react";
// react icons
import { BsArrowRight } from "react-icons/bs";
import { GiServerRack } from "react-icons/gi";

import Tables from "../../Tables";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import { Link } from "@chakra-ui/react";

const listname = {
  sbackbone: "S-Backbone",
  backbone: "Backbone",
  distribusi: "Distribusi",
  akses: "Akses",
  gi: "GI",
  listpop: "LIST POP ",
};

const ListPop = ({ title, name, description, image, total }) => {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card p="1.2rem" width={{ lg: "400px" }}>
      <Flex w="100%">
        <Text fontSize="lg" color="gray.400" fontWeight="bold">
          {title}
        </Text>
      </Flex>
      <CardBody mx={{ lg: "2rem" }}>
        <Flex flexDirection="column">
          <Flex flexDirection="row" h="100%" width={{ lg: "100%" }} mx={{ lg: "5px" }}>
            <Link href={`${process.env.PUBLIC_URL}/#/admin/sbackbone`}>
              <Flex flexDirection="column" bg="green.300" justify="center" borderRadius="100%" height={{ lg: "89px", sm: "89px" }} width={{ lg: "89px", sm: "89px" }} my={{ sm: "1.5rem", lg: "10px" }}>
                <Flex justify="center">{image}</Flex>
                <Text fontSize="10px" color={textColor} fontWeight="bold" textAlign="center">
                  {listname.sbackbone}
                </Text>
              </Flex>{" "}
            </Link>
            <Spacer />

            <Link href={`${process.env.PUBLIC_URL}/#/admin/backbone`}>
              <Flex flexDirection="column" bg="yellow.200" justify="center" borderRadius="100%" height={{ lg: "89px", sm: "89px" }} width={{ lg: "89px", sm: "89px" }} my={{ sm: "1.5rem", lg: "10px" }}>
                <Flex justify="center">{image}</Flex>
                <Text fontSize="10px" color={textColor} fontWeight="bold" textAlign="center">
                  {listname.backbone}
                </Text>
              </Flex>
            </Link>
            <Spacer />

            <Link href={`${process.env.PUBLIC_URL}/#/admin/distribusi`}>
              <Flex flexDirection="column" bg="red.300" justify="center" borderRadius="100%" height={{ lg: "89px", sm: "89px" }} width={{ lg: "89px", sm: "89px" }} my={{ sm: "1.5rem", lg: "10px" }}>
                <Flex justify="center">{image}</Flex>
                <Text fontSize="10px" color={textColor} fontWeight="bold" textAlign="center">
                  {listname.distribusi}
                </Text>
              </Flex>
            </Link>
            {/* {" "} */}
          </Flex>

          <Flex flexDirection="row" h="100%" width={{ lg: "100%" }} mx={{ lg: "5px" }}>
            <Link href={`${process.env.PUBLIC_URL}/#/admin/akses`}>
              <Flex flexDirection="column" bg="green.300" justify="center" borderRadius="100%" height={{ lg: "89px", sm: "89px" }} width={{ lg: "89px", sm: "89px" }} my={{ sm: "1.5rem", lg: "10px" }}>
                <Flex justify="center">{image}</Flex>
                <Text fontSize="10px" color={textColor} fontWeight="bold" textAlign="center">
                  {listname.akses}
                </Text>
              </Flex>{" "}
            </Link>
            <Spacer />

            <Link href={`${process.env.PUBLIC_URL}/#/admin/gi`}>
              <Flex flexDirection="column" bg="yellow.200" justify="center" borderRadius="100%" height={{ lg: "89px", sm: "89px" }} width={{ lg: "89px", sm: "89px" }} my={{ sm: "1.5rem", lg: "10px" }}>
                <Flex justify="center">{image}</Flex>
                <Text fontSize="10px" color={textColor} fontWeight="bold" textAlign="center">
                  {listname.gi}
                </Text>
              </Flex>
            </Link>
            <Spacer />

            <Link href={`${process.env.PUBLIC_URL}/#/admin/backbone`}>
              <Flex flexDirection="column" bg="red.300" justify="center" borderRadius="100%" height={{ lg: "89px", sm: "89px" }} width={{ lg: "89px", sm: "89px" }} my={{ sm: "1.5rem", lg: "10px" }}>
                <Flex justify="center">{image}</Flex>
                <Text fontSize="10px" color={textColor} fontWeight="bold" textAlign="center">
                  {listname.listpop}
                </Text>
              </Flex>
            </Link>
          </Flex>

          <Flex>
            <Link my={{ lg: "1.5rem" }} bg="blue.100" borderRadius="20px" height={{ lg: "40px", sm: "30px" }} width={{ lg: "300px", sm: "200px" }} href="https://www.google.com/" isExternal>
              <Text fontSize="20px" color={textColor} fontWeight="bold" textAlign="center" justify="center">
                Jadwal PM POP <ExternalLinkIcon mx="2px" />
              </Text>
            </Link>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ListPop;
