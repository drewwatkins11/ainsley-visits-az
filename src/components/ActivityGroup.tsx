import React from "react";
import { Stack, Heading, Text } from "@chakra-ui/react";
import { GroupedActivity } from "../../content";
import Activity from "./Activity";

const ActivityGroup = (ActivityProps: GroupedActivityProps) => {
  const { activities } = ActivityProps;

  return (
    <Stack direction="column">
      <Stack direction="column">
        <Heading as="h4" size="md">
          {activities.title}
        </Heading>
        {activities.description && <Text>{activities.description}</Text>}
      </Stack>
      <Stack
        borderLeft="2px dotted black"
        pl="4"
        spacing="3"
        direction="column"
      >
        {activities.activities.map((activity, index) => {
          return <Activity activity={activity} key={index} />;
        })}
      </Stack>
    </Stack>
  );
};

export default ActivityGroup;

interface GroupedActivityProps {
  activities: GroupedActivity;
}
