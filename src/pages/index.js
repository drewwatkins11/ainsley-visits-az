import * as React from "react";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";

import content from "../../content";
import Fonts from "../Fonts";
import Timeline from "../components/Timeline";

// markup
const IndexPage = () => {
  return (
    <>
      <Fonts />
      <Flex direction="column">
        <Box backgroundColor="#b7b7a4" p="12">
          <Stack>
            <Heading as="h1" size="2xl">
              Things to do, places to see
            </Heading>
            <Text>
              It's tough to pick just a few things to see in a state as wild and
              diverse as Arizona, but these are the highlights.
            </Text>
          </Stack>
        </Box>
        <Timeline />
      </Flex>
    </>
  );
};

export default IndexPage;
