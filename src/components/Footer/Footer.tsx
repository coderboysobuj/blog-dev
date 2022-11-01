import { Container, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Footer: React.FC = () => {
  return (
    <Flex
      justify="center"
      align="center"
      bg="blackAlpha.200"
      mt={5}
      width="100%"
      padding={9}
    >
      <Container maxW="container.md">
        <Text fontSize="sm" textAlign="center">
          DEV Community 👩‍💻👨‍💻 — A constructive and inclusive social network for
          software developers. With you every step of your journey. Built on
          Forem — the open source software that powers DEV and other inclusive
          communities. Made with love and Ruby on Rails. DEV Community 👩‍💻👨‍💻 ©
          2016 - 2022.
        </Text>
      </Container>
    </Flex>
  );
};

export default Footer;
