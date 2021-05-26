import React, { useEffect, useState } from "react";
import {
  Button,
  Box,
  Stack,
  Heading,
  Text,
  HStack,
  Flex,
} from "@chakra-ui/react";
import content from "../../content";
import HighlightSlider from "./HighlightSlider";
import { StaticImage } from "gatsby-plugin-image";

const Highlights = () => {
  const { areas } = content;

  const [currentArea, setCurrentArea] = useState(0);

  return (
    <Box backgroundColor="#b7b7a4">
      <Flex direction={["column", "column", "row"]} p="12" pb="6">
        <Box pr={["0", "0", "12"]} maxW={["60vw", "20vw"]} alignSelf="center">
          <StaticImage src="../images/logo.svg" alt="Ainsley visits Arizona" />
        </Box>
        <Stack
          pl={["6", "6", "12"]}
          pr={["6", "6", "12"]}
          mt={["6", "0"]}
          pt={["6", "6", "0"]}
          align={["center", "center", "start"]}
          textAlign={["center", "center", "left"]}
          borderLeft={["none", "none", "2px dotted black"]}
          borderTop={["2px dotted black", "2px dotted black", "none"]}
        >
          <Heading as="h1" size="2xl">
            Things to do, places to see
          </Heading>
          <Text maxW="600px">
            It's tough to pick just a few things to see in a state as wild and
            diverse as Arizona, but these are a few of my favorite highlights.
          </Text>
          <HStack>
            {areas.map((area, index) => {
              return (
                <Button
                  variant="ghost"
                  isActive={currentArea === index}
                  key={index}
                  onClick={() => setCurrentArea(index)}
                >
                  {area.name}
                </Button>
              );
            })}
          </HStack>
        </Stack>
      </Flex>
      <HighlightSlider
        currentArea={currentArea}
        highlights={areas[currentArea].highlights}
      />
    </Box>
  );
};

export default Highlights;
