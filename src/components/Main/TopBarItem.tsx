import { Button, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface ITopBarItemProps {
  active?: boolean;
  text: string;
  link: string;
}
const TopBarItem: React.FC<ITopBarItemProps> = ({ text, active, link }) => {
  return (
    <Link href={link}>
      <Text
        fontWeight={active ? "bold" : "normal"}
        _hover={{ color: "blue.300", bg: "white" }}
        px={2}
        py={1}
        fontSize="sm"
        rounded="md"
      >
        {text}
      </Text>
    </Link>
  );
};

export default TopBarItem;
