import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import { ReactNode } from "react";

interface InnovationCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const InnovationCard: React.FC<InnovationCardProps> = ({ icon, title, description }) => {
  return (
    <Card sx={{ maxWidth: 345, textAlign: "start", borderRadius: 3, boxShadow: 3,my:'1rem' }}>
      <CardContent>
        <Box display="flex" justifyContent="center" mb={2}>
          <Avatar sx={{ bgcolor: "#E3F4FD", width: 48, height: 48,mr:'auto',color:'gray' }}>{icon}</Avatar>
        </Box>
        <Typography variant="h6" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={1}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};