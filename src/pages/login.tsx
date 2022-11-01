import {
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import Layout from "../components/Layout";

const Login = () => {
  return (
    <section style={{ marginTop: "60px" }}>
      <Layout>
        <Center>
          <Stack
            boxShadow="sm"
            bg="white"
            border="1px"
            borderColor="whiteAlpha.700"
            padding={5}
            rounded={"md"}
            spacing={7}
          >
            <Stack spacing={0} textAlign="center">
              <Heading fontSize="2xl">Welcome to DEV Community 👩‍💻👨‍💻</Heading>
              <Text fontSize="sm">
                DEV Community 👩‍💻👨‍💻 is a community of 946,235 amazing developers
              </Text>
            </Stack>
            <Stack>
              <Button
                colorScheme="blackAlpha"
                leftIcon={<Icon as={FaGithub} />}
              >
                Sign up with github
              </Button>
              <Button colorScheme="blue" leftIcon={<Icon as={FaGoogle} />}>
                Sign up with google
              </Button>
              <Button
                colorScheme="facebook"
                leftIcon={<Icon as={FaFacebook} />}
              >
                Sign up with facebook
              </Button>
              <Button colorScheme="twitter" leftIcon={<Icon as={FaTwitter} />}>
                Sign up with twitter
              </Button>
            </Stack>
            <Flex
              fontSize="sm"
              textAlign="center"
              justify="center"
              align="center"
              gap={2}
            >
              <Text>Already have account?</Text>{" "}
              <Text
                color="blue.400"
                cursor="pointer"
                _hover={{ textDecoration: "underline" }}
              >
                login
              </Text>
            </Flex>
          </Stack>
        </Center>
      </Layout>
    </section>
  );
};

export default Login;
