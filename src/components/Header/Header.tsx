import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Icon,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      width="100%"
      zIndex={9}
      bg="white"
      boxShadow="sm"
      borderBottom="1px"
      borderColor="whiteAlpha.600"
      height="45px"
      display="flex"
      alignItems="center"
    >
      <Container maxW={"container.lg"} py={2}>
        <Flex width="100%" align="center" justify="space-between" gap={5}>
          <Flex align="center" gap={{ base: 2, md: 3 }} flexGrow={1}>
            <IconButton
              aria-label="menu"
              variant="ghost"
              icon={<Icon as={HiMenu} fontSize="xl" />}
              display={{ base: "block", md: "none" }}
            />
            <Link href="/">
              <Image src="/images/LOGO.png" maxW={"100%"} w="42px" />
            </Link>

            <InputGroup
              display={{ base: "none", md: "flex" }}
              maxW={"500px"}
              height="35px"
            >
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
            <Link href="/login">
              <Button
                display={{ base: "none", md: "unset" }}
                height="35px"
                size="sm"
                variant={"ghost"}
              >
                Log in
              </Button>
            </Link>

            <IconButton
              variant="ghost"
              aria-label="search"
              display={{ base: "unset", md: "none" }}
              icon={<Icon as={FaSearch} />}
            />
            <Link href="/enter">
              <Button
                height="35px"
                size="sm"
                variant={"outline"}
                colorScheme="blue"
              >
                Create account
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
