import React from "react";
import { Stack, Heading, Text } from "@chakra-ui/react";
import { Activity as ActivityInterface } from "../../content";

const Activity = (ActivityProps: ActivityProps) => {
  const { activity } = ActivityProps;

  return (
    <Stack direction="column">
      <Heading as="h4" size="md">
        {activity.title}
      </Heading>
      {activity.description && <Text>{activity.description}</Text>}
    </Stack>
  );
};

export default Activity;

interface ActivityProps {
  activity: ActivityInterface;
}
