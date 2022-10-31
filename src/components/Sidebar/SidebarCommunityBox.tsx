import React from "react";
import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";

const SidebarCommunityBox = () => {
  return (
    <Box
      boxShadow="sm"
      bg="white"
      border="1px"
      borderColor="whiteAlpha.700"
      padding="8px 10px"
      rounded={"sm"}
    >
      <Stack spacing={5}>
        <Heading as="h2" fontSize={"lg"}>
          <Text color="brand.100">
            DEV Community 👩‍💻 <br />
            👨‍💻
          </Text>{" "}
          is a community of 942,190 amazing developers
        </Heading>
        <Text fontSize="sm">
          We're a place where coders share, stay up-to-date and grow their
          careers.
        </Text>
        <Stack>
          <Button variant="outline" size="sm" colorScheme="blue">
            Create account
          </Button>
          <Button size="sm" variant={"ghost"}>
            Log in
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SidebarCommunityBox;
