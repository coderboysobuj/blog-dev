import { Stack, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Discuss = () => {
  return (
    <Stack
      boxShadow="sm"
      bg="whiteAlpha.400"
      border="1px"
      borderColor="whiteAlpha.700"
      rounded={"sm"}
    >
      <Heading as="h3" fontSize="md" padding="8px 10px">
        #discuss
      </Heading>

      <Stack _hover={{ bg: "white" }}>
        <Text fontSize="sm" padding={4} cursor="pointer">
          When do you think is the best time to post on DEV? 🤔
          <br />
          <Text fontSize="x-small">20 comments</Text>
        </Text>
      </Stack>
      <Stack _hover={{ bg: "white" }}>
        <Text fontSize="sm" padding={4} cursor="pointer">
          When do you think is the best time to post on DEV? 🤔
          <br />
          <Text fontSize="x-small">20 comments</Text>
        </Text>
      </Stack>
      <Stack _hover={{ bg: "white" }}>
        <Text fontSize="sm" padding={4} cursor="pointer">
          When do you think is the best time to post on DEV? 🤔
          <br />
          <Text fontSize="x-small">20 comments</Text>
        </Text>
      </Stack>
      <Stack _hover={{ bg: "white" }}>
        <Text fontSize="sm" padding={4} cursor="pointer">
          When do you think is the best time to post on DEV? 🤔
          <br />
          <Text fontSize="x-small">20 comments</Text>
        </Text>
      </Stack>
      <Stack _hover={{ bg: "white" }}>
        <Text fontSize="sm" padding={4} cursor="pointer">
          When do you think is the best time to post on DEV? 🤔
          <br />
          <Text fontSize="x-small">20 comments</Text>
        </Text>
      </Stack>
    </Stack>
  );
};

export default Discuss;
