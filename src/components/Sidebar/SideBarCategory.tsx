import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import CategoryItem from "./CategoryItem";
import { FaHome, FaLightbulb, FaList, FaPodcast, FaTags } from "react-icons/fa";

const SideBarCategory = () => {
  return (
    <Stack mt={6} spacing={0}>
      <CategoryItem text="Home" icon={FaHome} link="/" />
      <CategoryItem active text="Linsting" icon={FaList} link="/linsting" />
      <CategoryItem text="Podcast" icon={FaPodcast} link="/podcasts" />
      <CategoryItem text="Tags" icon={FaTags} link="/tags" />
      <CategoryItem text="FAQ" icon={FaLightbulb} link="/faq" />
    </Stack>
  );
};

export default SideBarCategory;
