import React from "react";
import { Stack, Heading, Text } from "@chakra-ui/react";
import { Downtime } from "../../content";

const DowntimeActivity = (DowntimeActivityProps: DowntimeActivityProps) => {
  const { activity } = DowntimeActivityProps;

  return (
    <Stack direction="column">
      <Heading as="h4" size="md">
        {activity.title}
      </Heading>
      {activity.description && <Text>{activity.description}</Text>}
    </Stack>
  );
};

export default DowntimeActivity;

interface DowntimeActivityProps {
  activity: Downtime;
}
