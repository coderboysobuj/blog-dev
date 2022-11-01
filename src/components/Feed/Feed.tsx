import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import { FaBookmark, FaComment, FaHeart } from "react-icons/fa";
import HoverView from "../Profile/HoverView";

const Feed = () => {
  const [open, setOpen] = useState<boolean>(false);
  const onClose = () => setOpen(false);
  const onOpen = () => setOpen(true);
  return (
    <Box rounded={"sm"} boxShadow="md" bg="white">
      <Image
        maxW="100%"
        src="https://res.cloudinary.com/practicaldev/image/fetch/s--i6K4hJEt--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gr6rvhda40l0b3h5v7v0.png"
        objectFit="cover"
        cursor="pointer"
      />

      <Stack padding="10px 13px">
        <Flex gap={3}>
          <Link href="/coderboysobuj">
            <Avatar size={"sm"} />
          </Link>
          <Stack flexGrow={1} spacing={4}>
            <Flex flexDir={"column"} lineHeight={1.5} justify="center">
              <HoverView open={open} onClose={onClose} onOpen={onOpen}>
                <Text
                  cursor="pointer"
                  _hover={{ bg: "blackAlpha.200" }}
                  width="max-content"
                  rounded="md"
                  px={1}
                  py={0.5}
                  onMouseEnter={onOpen}
                  fontSize={{ base: "md", md: "sm" }}
                  fontWeight="semibold"
                >
                  Jhone deo
                </Text>
              </HoverView>
              <Text px={1} fontWeight={"light"} fontSize="small">
                2 hours ago
              </Text>
            </Flex>
            <Stack>
              <Heading
                as="h1"
                fontSize={"2xl"}
                cursor="pointer"
                _hover={{ color: "blue.400" }}
              >
                My Divtober 2022 Drawings
              </Heading>
              <Flex flexWrap="wrap">
                <Text
                  cursor="pointer"
                  _hover={{ bg: "blackAlpha.200" }}
                  px={1}
                  py={0.5}
                  borderRadius="md"
                  fontSize={{ base: "md", md: "sm", lg: "sm" }}
                >
                  #typeScript
                </Text>
                <Text
                  cursor="pointer"
                  _hover={{ bg: "blackAlpha.200" }}
                  px={1}
                  py={0.5}
                  borderRadius="md"
                  fontSize={{ base: "md", md: "sm", lg: "sm" }}
                >
                  #reactjs
                </Text>
                <Text
                  cursor="pointer"
                  _hover={{ bg: "blackAlpha.200" }}
                  px={1}
                  py={0.5}
                  borderRadius="md"
                  fontSize={{ base: "md", md: "sm", lg: "sm" }}
                >
                  #showdev
                </Text>
              </Flex>
            </Stack>

            <Flex justify="space-between" align="center">
              <Flex>
                <Button leftIcon={<FaHeart />} variant="ghost" size="sm">
                  20 reactions
                </Button>
                <Button leftIcon={<FaComment />} variant="ghost" size="sm">
                  8 comments
                </Button>
              </Flex>
              <Flex align="center" gap={2}>
                <Text fontSize="sm">6 minute red</Text>
                <IconButton
                  size="sm"
                  variant="ghost"
                  icon={<FaBookmark />}
                  aria-label="save"
                />
              </Flex>
            </Flex>
          </Stack>
        </Flex>
      </Stack>
    </Box>
  );
};

export default Feed;
