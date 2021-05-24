import React, { useEffect, useRef, useState } from "react";
import { Box, Heading, Flex } from "@chakra-ui/react";

import DriveTimeActivity from "./DriveTime";
import Activity from "./Activity";
import DowntimeActivity from "./Downtime";
import ActivityGroup from "./ActivityGroup";
import ActivityWrapper from "./ActivityWrapper";

import { DayObject } from "../../content";

const ItineraryDay = (props: ItineraryDayProps) => {
  const { dayIndex, height, setHeight, day } = props;
  const [dayHeight, setDayHeight] = useState(height);
  const dayRef = useRef();

  useEffect(() => {
    if (dayRef.current) {
      //@ts-ignore
      console.log(`Setting height ${dayRef.current.clientHeight}`);
      //@ts-ignore
      setHeight(dayRef.current.clientHeight);
    }
  }, [dayRef]);

  useEffect(() => {
    if (height && height[dayIndex]) {
      setDayHeight(height[dayIndex]);
    }
  }, [height]);

  useEffect(() => {
    console.log(`Updating height ${height}`);
  }, [height]);

  return (
    <Flex
      direction="column"
      minH={["auto", "auto", dayHeight ? dayHeight : "auto"]}
      ref={dayRef}
    >
      <Heading mb="6" as="h3" size="lg">
        {day.day}
      </Heading>
      <Box pl="5">
        <Flex
          direction="column"
          _after={{
            content: `""`,
            position: "relative",
            margin: "-10px",
            width: "15px",
            height: "15px",
            borderRadius: "999px",
            transform: "rotate(45deg)",
            backgroundColor: "#000",
          }}
        >
          {day.activities.map((activity, index) => {
            return (
              <ActivityWrapper
                key={index}
                flexBasis={
                  activity.type === "driveTime"
                    ? `${activity.duration * 1.2}px`
                    : activity.duration
                    ? `${activity.duration}px`
                    : undefined
                }
                activityType={
                  activity.type === "activity" && activity.icon
                    ? activity.icon
                    : activity.type
                }
              >
                {(() => {
                  switch (activity.type) {
                    case "groupedActivities":
                      return <ActivityGroup activities={activity} />;
                    case "driveTime":
                      return <DriveTimeActivity activity={activity} />;
                    case "downTime":
                      return <DowntimeActivity activity={activity} />;
                    case "activity":
                      return <Activity activity={activity} />;
                    default:
                      return <></>;
                  }
                })()}
              </ActivityWrapper>
            );
          })}
        </Flex>
      </Box>
    </Flex>
  );
};

export default ItineraryDay;

interface ItineraryDayProps {
  dayIndex: number;
  height?: number;
  day: DayObject;
  setHeight: (number) => any;
}
