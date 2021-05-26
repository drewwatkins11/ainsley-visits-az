import * as React from "react";
import { Flex, HStack, Text } from "@chakra-ui/react";

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
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

library.add(faStopwatch);
library.add(faTruckPickup);
library.add(faArrowRight);
library.add(faArrowLeft);
library.add(faClipboardList);
library.add(faHeart);

const MotionText = motion(Text);

// markup
const IndexPage = () => {
  return (
    <>
      <Fonts />
      <Flex direction="column">
        <Highlights />
        <Timeline />
        <PackingList />
        <HStack
          direction="row"
          justify="center"
          backgroundColor="#feefe5"
          p="1"
          spacing="1"
        >
          <Text color="charcoalBlue" fontWeight="bold">
            Made with{" "}
          </Text>
          <MotionText
            animate={{
              scale: [1, 1.2, 1, 1.2, 1, 1],
              rotate: [0, 10, 0, -10, 0, 0],
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              times: [0, 0.2, 0.4, 0.6, 0.8, 1],
              loop: Infinity,
              repeatDelay: 1,
            }}
          >
            <FontAwesomeIcon color="#2a9d8f" icon="heart" />
          </MotionText>{" "}
          <Text color="charcoalBlue" fontWeight="bold">
            for Ainsley
          </Text>
        </HStack>
      </Flex>
    </>
  );
};

export default IndexPage;
