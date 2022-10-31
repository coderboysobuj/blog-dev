import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

const SideBarTags = () => {
  return (
    <Stack>
      <Heading as="h3" fontSize={"md"} mb="3">
        Popular Tags
      </Heading>
      <Box h="300px" overflowY={"scroll"}>
        <Text
          cursor={"pointer"}
          _hover={{ bg: "blue.100", textDecoration: "underline" }}
          rounded="md"
          px="2"
          py="1"
          fontSize="sm"
        >
          #javaScript
        </Text>
        <Text
          cursor={"pointer"}
          _hover={{ bg: "blue.100", textDecoration: "underline" }}
          rounded="md"
          px="2"
          py="1"
          fontSize="sm"
        >
          #nodejs
        </Text>
        <Text
          cursor={"pointer"}
          _hover={{ bg: "blue.100", textDecoration: "underline" }}
          rounded="md"
          px="2"
          py="1"
          fontSize="sm"
        >
          #laravel
        </Text>
        <Text
          cursor={"pointer"}
          _hover={{ bg: "blue.100", textDecoration: "underline" }}
          rounded="md"
          px="2"
          py="1"
          fontSize="sm"
        >
          #php
        </Text>
        <Text
          cursor={"pointer"}
          _hover={{ bg: "blue.100", textDecoration: "underline" }}
          rounded="md"
          px="2"
          py="1"
          fontSize="sm"
        >
          #python
        </Text>
      </Box>
    </Stack>
  );
};

export default SideBarTags;
