import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import Discuss from "./Discuss";
import Help from "./Help";

const Widgets: React.FC = () => {
  return (
    <Stack>
      <Help />
      <Discuss />
    </Stack>
  );
};

export default Widgets;
