import React from "react";
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Image,
  Center,
} from "@chakra-ui/react";
import "./Hero.css";
import plLogo from "./premier-league-logo.png";
import { useNavigate } from "react-router-dom";


function Hero() {
  let navigate = useNavigate();
  return (
    <>

      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 20 }}
        >
          <Center>
            <Image src={plLogo} alt="premier league logo" boxSize="120px" />
          </Center>

          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Manage your team with <br />
            <Text as={"span"} color={"#37003c"}>
              CoachPro
            </Text>
          </Heading>
          <Text color={"gray.600"}>
            Monetize your content by charging your most loyal readers and reward
            them loyalty points. Give back to your loyal readers by granting
            them access to your pre-releases and sneak-peaks.
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Button
            onClick={() => navigate("/signup")}
              colorScheme={"green"}
              bg={"#37003c"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "green.500",
              }}
            >
              Get Started
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

export default Hero;
