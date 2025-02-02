import React from 'react';
import {
  Box,
  Container,
  Typography,
} from '@mui/material';

export const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) => theme.palette.grey[800],
        color: 'white',
        py: 6,
        borderTop: '4px solid',
      }}
    >
      <Container maxWidth="lg">
        <Box mt={5} sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="body2" fontWeight={'bold'}>
            ©2023 All rights reserved. Any Technology Pte Ltd.
          </Typography>
          <Typography variant="body2" fontWeight={'bold'}>
            Privacy Policy
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};