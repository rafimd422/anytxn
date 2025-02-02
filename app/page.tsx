import { FC } from "react";
import { Box } from "@mui/material";
import { InfoSection } from "./components/InfoSection";
import { InnovationSection } from "./components/InnovationSection";

const Home: FC = () => {
  return (
    <Box>
      <InfoSection/>
      <InnovationSection/>
    </Box>
  );
}

export default Home;
