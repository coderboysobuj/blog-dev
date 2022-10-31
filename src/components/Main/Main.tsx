import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import Feed from "../Feed/Feed";
import TopBar from "./TopBar";

const Main: React.FC = () => {
  return (
    <Stack>
      <TopBar />
      {[0, 1, 2, 3, 4, 5].map((item) => (
        <Feed />
      ))}
    </Stack>
  );
};

export default Main;
