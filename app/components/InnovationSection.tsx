"use client";
import { Box, Container, useMediaQuery } from "@mui/material";
import { Title } from "./Title";
import Image from "next/image";
import graphImg from "@/public/Assets/graph.png";
import graphImgPhn from "@/public/Assets/graphMobile.png";
import { InnovationCard } from "./InnovationCard";
import { FaProjectDiagram, FaLightbulb, FaMicrochip } from "react-icons/fa";

export const InnovationSection = () => {
  const mdScreen = useMediaQuery("(max-width: 825px)");

  const cardData = [
    {
      id: 1,
      icon: <FaProjectDiagram size={24} />,
      title: "Full-suite solutions",
      description:
        "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.",
    },
    {
      id: 2,
      icon: <FaLightbulb size={24} />,
      title: "Simplify the complex",
      description:
        "Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.",
    },
    {
      id: 3,
      icon: <FaMicrochip size={24} />,
      title: "Cutting-edge tech",
      description:
        "We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.",
    },
  ];

  return (
<Container
  sx={{
    width: "100%",
    mt: 6,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
  }}
>
      <Title title="OUR PHILOSOPHY" subTitle="Human-centred innovation" />

      <Image
  src={mdScreen ? graphImgPhn : graphImg}
  height={500}
  width={920}
  style={{
    width: "100%",
    maxWidth: "980px",
    height: "auto",
    objectFit: "contain",
    marginBottom: "2rem",
  }}
  alt="Graph illustration"
/>

<Box
  sx={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    px:'1.2rem', 
    flexWrap: "wrap",
    gap: 3,
  }}
>
        {cardData.map((card) => (
          <InnovationCard key={card.id} {...card} />
        ))}
      </Box>
    </Container>
  );
};
