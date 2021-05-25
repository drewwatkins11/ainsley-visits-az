import React, { useEffect, useState } from "react";
import { Button, Box, Stack, Heading, Text, HStack } from "@chakra-ui/react";
import content from "../../content";
import HighlightSlider from "./HighlightSlider";

const Highlights = () => {
  const { areas } = content;

  const [currentArea, setCurrentArea] = useState(0);

  return (
    <Box backgroundColor="#b7b7a4">
      <Stack p="12" pb="6">
        <Heading as="h1" size="2xl">
          Things to do, places to see
        </Heading>
        <Text>
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
      <HighlightSlider
        currentArea={currentArea}
        highlights={areas[currentArea].highlights}
      />
    </Box>
  );
};

export default Highlights;
