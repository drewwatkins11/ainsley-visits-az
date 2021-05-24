import React from "react";
import { Stack, Heading, Text } from "@chakra-ui/react";
import { DriveActivity } from "../../content";

const convertMinutes = (min: number) => {
  var hours = Math.floor(min / 60);
  var minutes = min % 60;
  return `${hours} ${hours === 1 ? "hour" : "hours"} and ${minutes} minutes`;
};

const DriveTimeActivity = (DriveTimeProps: DriveTimeProps) => {
  const { activity } = DriveTimeProps;

  return (
    <Stack direction="column">
      <Heading as="h4" size="md">
        {activity.title}
      </Heading>
      <Text>{convertMinutes(activity.duration)}</Text>
      {activity.description && <Text>{activity.description}</Text>}
    </Stack>
  );
};

export default DriveTimeActivity;

interface DriveTimeProps {
  activity: DriveActivity;
}
