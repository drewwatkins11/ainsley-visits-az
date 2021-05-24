import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";

const ActivityWrapper = (props: ActivityWrapperProps) => {
  const { activityType, children } = props;

  const returnIcon = (type) => {
    switch (type) {
      case "groupedActivities":
        return (
          <StaticImage
            src="../images/layer-group-solid.svg"
            alt=""
            width={20}
          />
        );
      case "driveTime":
        return (
          <StaticImage src="../images/route-solid.svg" alt="" width={20} />
        );
      case "downTime":
        return (
          <StaticImage src="../images/couch-solid.svg" alt="" width={20} />
        );
      case "outdoorActivity":
      case "activity":
        return (
          <StaticImage src="../images/running-solid.svg" alt="" width={20} />
        );
      case "hiking":
        return (
          <StaticImage src="../images/hiking-solid.svg" alt="" width={20} />
        );
      case "food":
        return (
          <StaticImage src="../images/utensils-solid.svg" alt="" width={20} />
        );
      case "drink":
        return (
          <StaticImage
            src="../images/glass-cheers-solid.svg"
            alt=""
            width={20}
          />
        );
      case "tent":
        return (
          <StaticImage src="../images/campground-solid.svg" alt="" width={20} />
        );
      default:
        <></>;
    }
  };

  return (
    <Flex
      direction="row"
      minH="20"
      pb="6"
      ml="-1"
      flexBasis={["auto", "auto", props.flexBasis || undefined]}
      borderLeft={
        activityType !== "driveTime" && activityType !== "downTime"
          ? "4px solid black"
          : "4px dotted black"
      }
    >
      <Box
        borderRadius="full"
        backgroundColor="#f0efeb"
        border="1px black solid"
        p="2"
        ml="-5"
        w="10"
        h="10"
        maxH="10"
        maxW="10"
        minH="10"
        minW="10"
      >
        {returnIcon(activityType)}
      </Box>
      <Box pl="5">{children}</Box>
    </Flex>
  );
};

export default ActivityWrapper;

interface ActivityWrapperProps {
  activityType: string;
  children?: React.ReactNode;
  flexBasis?: string;
}
