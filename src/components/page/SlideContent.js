import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";

const SlideContent = ({ title, svg }) => {
  return (
    <Box w="80%" height="100vh" mx="auto" scrollSnapAlign="start">
      <Heading
        h="240px"
        lineHeight="240px"
        textAlign="center"
        fontWeight="normal"
        letterSpacing={2}
      >
        {title}
      </Heading>
      <Image
        mx="auto"
        h="calc(100vh - 300px)"
        objectFit="cover"
        src={svg}
        alt=""
        style={{
          filter: "drop-shadow(0px -3px 16px rgba(0,0,0,0.3))",
        }}
        // dropShadow="30px 10px 4px #4444dd"
      />
    </Box>
  );
};

export default SlideContent;
