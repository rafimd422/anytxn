import { Typography, Box } from "@mui/material";

interface TitleProps {
  title: string;
  subTitle: string;
}

export const Title: React.FC<TitleProps> = ({ title, subTitle }) => {
  return (
    <Box textAlign="center" my={'1rem'}>
      <Typography
        sx={{
          color: "primary.main",
          fontWeight: 700,
          letterSpacing: 2,
          fontSize: { xs: "0.75rem", md: "0.85rem" },
          textAlign: "center",
          mb: 1,
          display: "block",
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: "40px",
          lineHeight: "100%",
          fontWeight: 550,
        }}
      >
        {subTitle}
      </Typography>
    </Box>
  );
};
