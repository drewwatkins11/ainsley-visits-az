import React from "react";
import { Global } from "@emotion/react";
const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: '56th Street';
        src: url('56thStreet-Regular.otf');
      }
      `}
  />
);
export default Fonts;
