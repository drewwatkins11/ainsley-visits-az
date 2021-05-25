import * as React from "react";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";

import Fonts from "../Fonts";
import Timeline from "../components/Timeline";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowLeft,
  faArrowRight,
  faStopwatch,
  faTruckPickup,
} from "@fortawesome/free-solid-svg-icons";
import PackingList from "../components/PackingList";
import Highlights from "../components/Highlights";

library.add(faStopwatch);
library.add(faTruckPickup);
library.add(faArrowRight);
library.add(faArrowLeft);

// markup
const IndexPage = () => {
  return (
    <>
      <Fonts />
      <Flex direction="column">
        <Highlights />
        <Timeline />
        <PackingList />
      </Flex>
    </>
  );
};

export default IndexPage;
