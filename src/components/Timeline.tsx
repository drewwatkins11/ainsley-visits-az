import React, { useEffect, useMemo, useRef, useState } from "react";
import { Box, Stack, Flex, Heading, Text } from "@chakra-ui/react";
import content from "../../content";
import Itinerary from "./Itinerary";

const Timeline = () => {
  const { options } = content;

  const [numOptions] = useState(options.length);
  const [numDays] = useState(3);
  const [heights, setHeights] = useState<number[]>(new Array(numDays + 1));
  const [heightChangeCount, setHeightChangeCount] = useState(0);

  const setHeightValue = (index: number, value: number) => {
    let existingHeights = heights;
    if (!existingHeights[index] || value > existingHeights[index]) {
      existingHeights[index] = value;
    }
    setHeights(existingHeights);
  };

  useEffect(() => {
    console.dir(heights);
    setHeightChangeCount(heightChangeCount + 1);
    console.log(heightChangeCount);
  }, [heights]);

  return (
    <Box backgroundColor="#feefe5" p="12">
      <Flex direction="column">
        <Stack>
          <Heading as="h1" size="2xl">
            The options
          </Heading>
          <Text>
            There are two main options that work with our schedule. One is
            centered around camping, the other is focused on a fun night up in
            Prescott and exploring in the Superstition Mountains.
          </Text>
        </Stack>
        <Stack
          pt="12"
          direction={["column", "column", "row"]}
          flexBasis={["100%", "100%", "50%"]}
          spacing="12"
        >
          {options.map((option, index) => {
            return (
              <Itinerary
                itinerary={option}
                key={`${index}${heightChangeCount}`}
                index={index}
                heights={heights}
                setHeightValue={setHeightValue}
              />
            );
          })}
        </Stack>
      </Flex>
    </Box>
  );
};

export default Timeline;
