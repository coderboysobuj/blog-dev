import { Flex } from "@chakra-ui/react";
import React from "react";
import TopBarItem from "./TopBarItem";

const TopBar: React.FC = () => {
  return (
    <Flex align="center" gap={2}>
      <TopBarItem text="Relevent" active link="/" />
      <TopBarItem text="Latest" link="/" />
      <TopBarItem text="Top" link="/" />
    </Flex>
  );
};

export default TopBar;
