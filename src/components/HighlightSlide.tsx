import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { AreaHighlight } from "../../content";

const HighlightSlide = (props: HighlightSlideProps) => {
  const { highlight, currentSlide, totalSlides, changeSlide } = props;
  return (
    <Flex
      backgroundImage={highlight.photo}
      backgroundPosition="center"
      backgroundSize="cover"
      w="100%"
      h="100%"
      position="relative"
    >
      <Box
        position="absolute"
        bottom="10"
        left="10"
        boxShadow="xl"
        p="6"
        maxW={["80%", "80%", "500px"]}
        backgroundColor="greenSheen"
      >
        <Stack border="4px black dotted" p="6" pb="3">
          <Heading as="h5" size="md">
            {highlight.title}
          </Heading>
          <Text>{highlight.description}</Text>
          <Flex direction="row" justify="space-between">
            <Button
              p="0"
              variant="plain"
              disabled={currentSlide === 0}
              onClick={() => changeSlide(currentSlide - 1)}
              leftIcon={<FontAwesomeIcon icon="arrow-left" />}
            >
              previous
            </Button>
            <Button
              p="0"
              variant="plain"
              disabled={currentSlide === totalSlides - 1}
              onClick={() => changeSlide(currentSlide + 1)}
              rightIcon={<FontAwesomeIcon icon="arrow-right" />}
            >
              next
            </Button>
          </Flex>
        </Stack>
      </Box>
    </Flex>
  );
};

export default HighlightSlide;

interface HighlightSlideProps {
  highlight: AreaHighlight;
  changeSlide: (number) => any;
  totalSlides: number;
  currentSlide: number;
}
