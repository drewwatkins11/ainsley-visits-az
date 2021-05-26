import * as React from "react";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";

import Fonts from "../Fonts";
import Timeline from "../components/Timeline";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowLeft,
  faArrowRight,
  faClipboardList,
  faStopwatch,
  faTruckPickup,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import PackingList from "../components/PackingList";
import Highlights from "../components/Highlights";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faStopwatch);
library.add(faTruckPickup);
library.add(faArrowRight);
library.add(faArrowLeft);
library.add(faClipboardList);
library.add(faHeart);

// markup
const IndexPage = () => {
  return (
    <>
      <Fonts />
      <Flex direction="column">
        <Highlights />
        <Timeline />
        <PackingList />
        <Flex direction="row" justify="center" backgroundColor="#feefe5" p="1">
          <Text color="charcoalBlue" fontWeight="bold">
            Made with <FontAwesomeIcon color="#2a9d8f" icon="heart" /> by Drew
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default IndexPage;
