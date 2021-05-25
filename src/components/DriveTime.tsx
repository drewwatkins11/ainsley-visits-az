import React from "react";
import { Box, Stack, Heading, Text } from "@chakra-ui/react";
import { DriveActivity } from "../../content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const convertMinutes = (min: number) => {
  var hours = Math.floor(min / 60);
  var minutes = min % 60;
  return `${hours} ${hours === 1 ? "hour" : "hours"} and ${minutes} minutes`;
};

const DriveTimeActivity = (DriveTimeProps: DriveTimeProps) => {
  const { activity } = DriveTimeProps;

  return (
    <Stack direction="column" color="slate">
      <Heading as="h4" size="md" color="slate">
        {activity.title}
      </Heading>
      <Text>
        <Box mr="1" display="inline">
          <FontAwesomeIcon icon="truck-pickup" />
        </Box>
        {convertMinutes(activity.duration)}
      </Text>
      {activity.description && (
        <>
          <Text>{activity.description}</Text>
        </>
      )}
    </Stack>
  );
};

export default DriveTimeActivity;

interface DriveTimeProps {
  activity: DriveActivity;
}
