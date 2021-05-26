import React, { useEffect, useState } from "react";
import { AreaHighlight } from "../../content";
import HighlightSlide from "./HighlightSlide";
import { Box } from "@chakra-ui/react";

const HighlightSlider = (props: HighlightSliderProps) => {
  const { highlights, currentArea } = props;
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = highlights.length;

  useEffect(() => {
    setCurrentSlide(0);
  }, [currentArea]);

  return (
    <Box height="85vh" shadow="2xl">
      {!!highlights[currentSlide] && (
        <HighlightSlide
          key={highlights[currentSlide].title}
          highlight={highlights[currentSlide]}
          totalSlides={totalSlides}
          currentSlide={currentSlide}
          changeSlide={(slide: number) => {
            setCurrentSlide(slide);
          }}
        />
      )}
    </Box>
  );
};

export default HighlightSlider;

interface HighlightSliderProps {
  highlights: AreaHighlight[];
  currentArea: number;
}
