import { Box, Divider, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Help = () => {
  return (
    <Stack
      boxShadow="sm"
      bg="whiteAlpha.400"
      border="1px"
      borderColor="whiteAlpha.700"
      rounded={"sm"}
    >
      <Heading as="h3" fontSize="md" padding="8px 10px">
        #help
      </Heading>

      <Stack _hover={{ bg: "white" }}>
        <Text fontSize="sm" padding={4} cursor="pointer">
          How can I save the time , when the browser closed by the user in mvc
          identity
          <br />
          <Text
            fontSize="sm"
            bg="orange.300"
            width="max-content"
            px={1}
            py={0.5}
            rounded="md"
          >
            New
          </Text>
        </Text>
      </Stack>

      <Stack _hover={{ bg: "white" }}>
        <Text fontSize="sm" padding={4} cursor="pointer">
          How can I save the time , when the browser closed by the user in mvc
          identity
          <br />
          <Text
            fontSize="sm"
            bg="orange.300"
            width="max-content"
            px={1}
            py={0.5}
            rounded="md"
          >
            New
          </Text>
        </Text>
      </Stack>

      <Stack _hover={{ bg: "white" }}>
        <Text fontSize="sm" padding={4} cursor="pointer">
          How can I save the time , when the browser closed by the user in mvc
          identity
          <br />
          <Text
            fontSize="sm"
            bg="orange.300"
            width="max-content"
            px={1}
            py={0.5}
            rounded="md"
          >
            New
          </Text>
        </Text>
      </Stack>
    </Stack>
  );
};

export default Help;
