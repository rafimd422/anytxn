import { FC } from "react";
import { Box } from "@mui/material";
import { FrontBanner } from "./FrontBanner";
import { Navbar } from "./Navbar";

export const Header: FC = () => {
  return (
    <Box
      sx={{
        height: "90vh",
        background: `
          linear-gradient(135deg, #005bc4 0%, #1f80f0 50%, #00e9ea 100%), 
          url('/backgrounds/WaveLinesDesktop1.svg') no-repeat center center, 
          url('/backgrounds/WaveLinesDesktop3.svg') no-repeat center center,
          url('/backgrounds/bannerImg.png') no-repeat right bottom
        `,
        backgroundBlendMode: "multiply",
        backgroundSize: "cover, contain, auto 80%",
        backgroundPosition: "center center, center center, right bottom",
        position: "relative",
        overflow: "hidden",
        "@media only screen and (max-width: 1024px)": {
          background: `
            linear-gradient(135deg, #005bc4 0%, #1f80f0 50%, #00e9ea 100%),
            url('/backgrounds/WaveLinesMobile1.svg') no-repeat center center
          `,
          backgroundSize: "cover, contain",
          backgroundPosition: "center center, center center",
        },
      }}
    >
      <Navbar />
      <FrontBanner />
    </Box>
  );
};
