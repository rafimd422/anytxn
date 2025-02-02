import React from 'react';
import {
  Box,
  Container,
  Grid,
  Link,
  Typography,
  IconButton,
  List,
  ListItem,
} from '@mui/material';
import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[800]
            : theme.palette.grey[900],
        color: 'white',
        py: 6,
        borderTop: '4px solid',
        borderColor: 'primary.main',
      }}
    >
      <Container maxWidth="lg">

        <Box mt={5} sx={{display:'flex', justifyContent:'space-between'}}>
          <Typography variant="body2" fontWeight={'bold'}>
          ©2023 All rights reserved. Any Technology Pte Ltd.
          </Typography>
          <Typography variant="body2" fontWeight={'bold'}>
          Privecy Policy
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
