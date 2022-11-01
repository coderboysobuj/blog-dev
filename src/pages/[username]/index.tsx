import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Icon,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaDotCircle, FaGithub, FaTimes } from "react-icons/fa";
import Feed from "../../components/Feed/Feed";
import Layout from "../../components/Layout";

const Username = () => {
  return (
    <Layout>
      <Box minW="100%" height="100px" bg="blue.600" zIndex={-1}></Box>
      <Container maxW="container.md">
        <Stack
          boxShadow="md"
          rounded="md"
          mt={-9}
          bg="white"
          padding={4}
          zIndex={99}
        >
          <Flex align="flex-start" justify="center" position={"relative"}>
            <Avatar size="xl" mt="-70px" border="4px" />
            <Flex gap={3} position="absolute" top={1} right={1}>
              <Button size="sm" colorScheme="blue">
                Follow
              </Button>
              <IconButton
                size="sm"
                variant="ghost"
                aria-label="more"
                icon={<Icon as={FaDotCircle} />}
              />
            </Flex>
          </Flex>
          <Stack align="center">
            <Heading fontSize="2xl">Jisan Khan</Heading>
            <Text fontSize="sm" fontWeight="light">
              Latin designer, coder, product launcher, and whatever else I fee
              like doing
            </Text>
            <Flex gap={3} fontSize="sm">
              <Flex gap={1} align="center">
                <Icon as={FaTimes} />
                <Text>Joined on Oct 19, 2021</Text>
              </Flex>
              <Flex gap={1} align="center">
                <Text cursor="pointer">http://localhost:3000</Text>
                <Icon cursor="pointer" as={FaGithub} />
              </Flex>
            </Flex>
          </Stack>
          <Divider />
          <Text fontSize="sm" textAlign="center" padding={4}>
            Work
            <br />
            Founder of VOY Creative & PMM for Contrast Security
          </Text>
        </Stack>
        <Flex mt={2} gap={2}>
          <Stack flex={1}>
            <Stack boxShadow="md" rounded="md" bg="whiteAlpha.600" padding={4}>
              <Heading fontSize="lg">Skills</Heading>
              <Divider />
              <Text fontSize="sm">Java, python, c++</Text>
            </Stack>
            <Stack boxShadow="md" rounded="md" bg="whiteAlpha.600" padding={4}>
              <Heading fontSize="lg">Education</Heading>
              <Divider />
              <Text fontSize="sm">Univercity on Dhaka</Text>
            </Stack>
            <Stack boxShadow="md" rounded="md" bg="whiteAlpha.600" padding={4}>
              <Heading fontSize="lg">Languese</Heading>
              <Divider />
              <Text fontSize="sm">English, Bangla, Urdho</Text>
            </Stack>
          </Stack>

          <Stack flex={2}>
            {[0, 1, 2, 3].map((item) => (
              <Feed key={item} />
            ))}
          </Stack>
        </Flex>
      </Container>
    </Layout>
  );
};

export default Username;
