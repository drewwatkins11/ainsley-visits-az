import { extendTheme } from "@chakra-ui/react";
const theme = {
  styles: {
    global: {
      "html, body": {
        backgroundColor: "#feefe5",
      },
    },
  },
  colors: {
    charcoalBlue: "#264653",
    desertGrey: "#515C67",
    desertBlack: "#364156",
    slate: "#6C7A89",
    terraCotta: "#E07A5F",
    eggshell: "#F4F1DE",
    desertGreen: {
      50: "white",
      500: "#279185",
    },
    greenSheen: "#81B29A",
  },
  fonts: {
    heading: "'56th Street', serif",
  },
  components: {
    Heading: {
      baseStyle: {
        color: "charcoalBlue",
      },
    },
  },
};

export default extendTheme(theme);
