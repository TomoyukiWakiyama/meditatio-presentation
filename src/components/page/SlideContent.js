import { Box, Heading, Image, scaleFadeConfig } from "@chakra-ui/react";
import React from "react";

const SlideContent = ({ title, svg, imgWidth = "100%" }) => {
  return (
    <Box w="90%" height="100vh" mx="auto" scrollSnapAlign="start">
      <Heading
        h="200px"
        lineHeight="200px"
        textAlign="center"
        fontSize="5xl"
        fontWeight="normal"
        letterSpacing={2}
      >
        {title}
      </Heading>
      <Box w={imgWidth} mx="auto">
        <Image
          mx="auto"
          h="calc(100vh - 220px)"
          //   objectFit="cover"
          src={svg}
          alt=""
          style={{
            filter: "drop-shadow(0px -3px 16px rgba(0,0,0,0.3))",
          }}
        />
      </Box>
    </Box>
  );
};

export default SlideContent;
