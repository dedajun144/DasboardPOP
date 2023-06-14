// Chakra imports
import { Button, Flex, Icon, Spacer, Text, useColorModeValue, Grid, GridItem, Heading, Image, Stack, Input } from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import React from "react";

import CardHeader from "components/Card/CardHeader";
// react icons
import { BsArrowRight } from "react-icons/bs";
import { GiServerRack } from "react-icons/gi";

import logoPOP from "assets/img/pop.png";
import { useEffect, useState } from "react";

import PopThumnails from "./PopThumnails";
import "./index.css";

const Distribusi = () => {
  const textColor = useColorModeValue("gray.700", "white");

  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(`https://pokeapi.co/api/v2/pokemon?limit=30`);

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    //if (res.ok == false) return console.log("gagal");
    const data = await res.json();
    //console.log(data);
    setLoadMore(data.next);

    function cretePokemonObject(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        const data = await res.json();

        setAllPokemons((currentList) => [...currentList, data]);
        await allPokemons.sort((a, b) => a.id - b.id);
      });
    }
    cretePokemonObject(data.results);
    //await console.log(allPokemons);
  };
  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <Grid my={{ lg: "5rem", sm: "5rem" }}>
      <Flex w="100%" justify="center">
        <Heading>Distribusi</Heading>
      </Flex>
      <Flex>
        <Card p="1rem" my={{ sm: "24px", xl: "0px" }}>
          <CardHeader mb="12px">
            <Text fontSize="lg" color={textColor} fontWeight="bold">
              POP Distribusi
            </Text>
          </CardHeader>
          <CardBody p="0px 5px">
            <Flex flexDirection="row">
              <Button flexDirection="column" bg="green.300" justify="center" borderRadius="100%" height={{ lg: "89px", sm: "89px" }} width={{ lg: "89px", sm: "89px" }} my={{ sm: "1.5rem", lg: "10px" }}>
                <Flex justify="center">
                  <Stack>
                    <Image minWidth={{ md: "51px", lg: "auto" }} boxSize={{ lg: "51px", md: "51px" }} objectFit="cover" src={logoPOP} alt="Purity UI Dashboard" />
                  </Stack>
                </Flex>
                <Text fontSize="10px" color={textColor} fontWeight="bold" textAlign="center">
                  SUDAH PM
                </Text>
                <Text fontSize="10px" color={textColor} fontWeight="bold" textAlign="center">
                  10
                </Text>
              </Button>

              <Button flexDirection="column" bg="green.300" justify="center" borderRadius="100%" height={{ lg: "89px", sm: "89px" }} width={{ lg: "89px", sm: "89px" }} my={{ sm: "1.5rem", lg: "10px" }}>
                <Flex justify="center">
                  <Stack>
                    <Image minWidth={{ md: "51px", lg: "auto" }} boxSize={{ lg: "51px", md: "51px" }} objectFit="cover" src={logoPOP} alt="Purity UI Dashboard" />
                  </Stack>
                </Flex>
                <Text fontSize="10px" color={textColor} fontWeight="bold" textAlign="center">
                  BELUM PM
                </Text>
                <Text fontSize="10px" color={textColor} fontWeight="bold" textAlign="center">
                  10
                </Text>
              </Button>
            </Flex>
          </CardBody>
        </Card>
      </Flex>

      <Flex>
        <Card bg="#EDFDFD" p="1rem" my={{ sm: "24px", xl: "0px" }}>
          <CardHeader mb="12px">
            <Text fontSize="lg" color={textColor} fontWeight="bold">
              SUDAH PM
            </Text>
            <Spacer />
            <Input fontSize="xs" py="11px" width={{ lg: "250px" }} borderRadius="30px" placeholder="Type here..." />
          </CardHeader>
          <CardBody p="0px 5px">
            <div className="app-contaner">
              <h1>Pokemon Evolutions</h1>
              <div className="pokemon-container">
                <div className="all-container">
                  {allPokemons.map((pokemonStats, index) => (
                    <PopThumnails id={pokemonStats.id} name={pokemonStats.name} image={pokemonStats.sprites.other.dream_world.front_default} type={pokemonStats.types[0].type.name} key={index} />
                  ))}
                </div>
                <button className="load-more" onClick={() => getAllPokemons()}>
                  Load More
                </button>
              </div>
            </div>
          </CardBody>
        </Card>
      </Flex>
    </Grid>
  );
};

export default Distribusi;
