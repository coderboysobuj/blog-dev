import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Box,
  Button,
  ButtonGroup,
  Avatar,
  Text,
  Flex,
  Stack,
} from "@chakra-ui/react";

interface IHoverViewProps {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  children: React.ReactNode;
}

const HoverView: React.FC<IHoverViewProps> = ({
  open,
  onOpen,
  onClose,
  children,
}) => {
  return (
    <Popover
      isOpen={open}
      onOpen={onOpen}
      onClose={onClose}
      placement="bottom"
      closeOnBlur={false}
    >
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent
        onMouseLeave={onClose}
        bg="white"
        borderColor="whiteAlpha.800"
        boxShadow="sm"
      >
        <PopoverHeader
          bg="blue.400"
          pt={6}
          fontWeight="bold"
          border="0"
        ></PopoverHeader>
        <PopoverArrow />

        <PopoverBody>
          <Stack spacing={4}>
            <Flex alignItems="center" gap={3}>
              <Avatar size="md" mt={-8} />
              <Text fontWeight="bold">Coderboy</Text>
            </Flex>
            <Button size="sm" colorScheme="blue">
              Follow
            </Button>
            <Text fontSize="sm" fontWeight="light">
              Latin designer, coder, product launcher, and whatever else I fee
              like doing
            </Text>
            <Text fontSize="sm">
              <Text fontWeight="bold">EMAIL</Text>
              ben@dev.to
            </Text>
            <Text fontSize="sm">
              <Text fontWeight="bold">WORK</Text>
              Co-founder at Forem
            </Text>
            <Text fontSize="sm">
              <Text fontWeight="bold">LOCATION</Text>
              NY
            </Text>
            <Text fontSize="sm">
              <Text fontWeight="bold">EDUCATION</Text>
              Mount Allison University
            </Text>
            <Text fontSize="sm">
              <Text fontWeight="bold">JOINED</Text>
              December 26, 2015
            </Text>
          </Stack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default HoverView;
