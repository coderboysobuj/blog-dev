import React from "react";
import type { IconType } from "react-icons";
import Link from "next/link";
import { Flex, Icon, Text } from "@chakra-ui/react";

interface ICategoryItemProps {
  text: string;
  icon: IconType;
  active?: boolean;
  link: string;
}

const CategoryItem: React.FC<ICategoryItemProps> = ({
  text,
  icon,
  link,
  active,
}) => {
  return (
    <Link href={link}>
      <Flex
        align={"center"}
        gap="2"
        _hover={{ bg: "blue.100" }}
        rounded="md"
        px="2"
        py="1"
      >
        <Icon _hover={{ color: "blue.400" }} as={icon} fontSize="md" />
        <Text
          fontSize="sm"
          color="blackAlpha.700"
          _hover={{ textDecoration: "underline" }}
        >
          {text}
        </Text>
      </Flex>
    </Link>
  );
};

export default CategoryItem;
