import { FC } from "react";
import { Box } from "@mui/material";
import { InfoSection } from "./components/InfoSection";
import { InnovationSection } from "./components/InnovationSection";
import { FinanceFuture } from "./components/FinanceFuture";
import TrustedByBest from "./components/TrustedByBest";

const Home: FC = () => {
  return (
    <Box>
      <InfoSection />
      <InnovationSection />
      <FinanceFuture />
      <TrustedByBest />
    </Box>
  );
}

export default Home;
