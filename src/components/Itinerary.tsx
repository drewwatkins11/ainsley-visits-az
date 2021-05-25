import React, { useEffect, useRef } from "react";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { Itinerary as ItineraryInterface } from "../../content";
import ItineraryDay from "./ItineraryDay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const convertMinutes = (min: number) => {
  var hours = Math.floor(min / 60);
  var minutes = min % 60;
  return `${hours} ${hours === 1 ? "hour" : "hours"}${
    minutes > 0 ? ` and ${minutes} minutes` : ""
  }`;
};

const Itinerary = (props: ItineraryProps) => {
  const { itinerary, heights, setHeightValue } = props;
  const headerRef = useRef();

  const totalDriveTime = (() => {
    let totalMinutes: number = 0;
    let drivingActivities = [];
    itinerary.days.forEach((day) => {
      const activties = day.activities.filter(
        (activity) => activity.type === "driveTime"
      );
      activties.forEach((activity) => drivingActivities.push(activity));
    });
    drivingActivities.forEach((activity) => {
      totalMinutes = totalMinutes + activity.duration;
    });
    return convertMinutes(totalMinutes);
  })();

  useEffect(() => {
    if (headerRef) {
      //@ts-ignore
      setHeightValue(0, headerRef.current.clientHeight);
    }
  }, [headerRef]);

  return (
    <Stack
      direction="column"
      flexBasis={["100%", "100%", "50%"]}
      spacing="6"
      height="100%"
    >
      <Stack
        direction="column"
        mb={["0", "0", "10"]}
        spacing="2"
        ref={headerRef}
        minH={["auto", "auto", heights[0] ? heights[0] : "auto"]}
      >
        <Box>
          <Heading as="h2" size="xs">
            Option {props.index + 1}
          </Heading>
          <Heading as="h2" size="xl">
            {itinerary.title}
          </Heading>
        </Box>
        <Text>
          <Box display="inline" mr="1">
            <FontAwesomeIcon icon="truck-pickup" />
          </Box>
          <i>Total drive time: {totalDriveTime}</i>
        </Text>
        <Text>{itinerary.overview}</Text>
      </Stack>
      <Stack direction="column" spacing="10">
        {itinerary.days.map((day, index) => {
          return (
            <ItineraryDay
              day={day}
              key={index}
              dayIndex={index}
              height={heights[index + 1]}
              setHeight={(height: number) => {
                console.log(`setting height ${height}`);
                console.log(heights);
                setHeightValue(index + 1, height);
              }}
            />
          );
        })}
      </Stack>
    </Stack>
  );
};

export default Itinerary;

interface ItineraryProps {
  itinerary: ItineraryInterface;
  index: number;
  heights: number[];
  setHeightValue: (...args: any[]) => any;
}
