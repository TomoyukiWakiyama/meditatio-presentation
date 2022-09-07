import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";

const SlideContent = ({ title, svg }) => {
  return (
    <Box w="80%" py="10%" height="100vh" mx="auto" scrollSnapAlign="start">
      <Heading textAlign="center" fontWeight="normal" letterSpacing={1}>
        {title}
      </Heading>
      <Image mx="auto" boxSize="600px" objectFit="cover" src={svg} alt="" />
    </Box>
  );
};

export default SlideContent;
