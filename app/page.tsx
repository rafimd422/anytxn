import { FC } from "react";
import { Box } from "@mui/material";
import { InfoSection } from "./components/InfoSection";
import { InnovationSection } from "./components/InnovationSection";
import { FinanceFuture } from "./components/FinanceFuture";

const Home: FC = () => {
  return (
    <Box>
      <InfoSection/>
      <InnovationSection/>
      <FinanceFuture/>
    </Box>
  );
}

export default Home;
