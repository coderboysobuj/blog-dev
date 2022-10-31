import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <Box
      as="header"
      bg="white"
      boxShadow="sm"
      borderBottom="1px"
      borderColor="whiteAlpha.600"
    >
      <Container maxW={"container.lg"} py={2}>
        <Flex width="100%" align="center" justify="space-between" gap={5}>
          <Flex align="center" gap={3} flexGrow={1}>
            <Image src="/images/LOGO.png" maxW={"100%"} w="42px" />
            <InputGroup maxW={"500px"} height="35px">
              <Input
                placeholder="Search..."
                width="100%"
                height="35px"
                outlineColor="whiteAlpha.100"
              />
              <InputRightElement cursor={"pointer"} height="35px">
                <Icon as={FaSearch} fontSize="xl" />
              </InputRightElement>
            </InputGroup>
          </Flex>
          <Flex gap={2} align="center">
            <Button height="35px" size="sm" variant={"ghost"}>
              Log in
            </Button>
            <Button
              height="35px"
              size="sm"
              variant={"outline"}
              colorScheme="blue"
            >
              Create account
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
