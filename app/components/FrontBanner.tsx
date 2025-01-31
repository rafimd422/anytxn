"use client"
import { Box, Button, Container, Grid, Typography, styled, useMediaQuery } from '@mui/material';

export const FrontBanner  = () => {
  return (
    <Box
    sx={{
        py: 10,
        height: "80%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
    }}

    >
      <Container maxWidth="xl">
        <Grid container spacing={4} alignItems="center">

          <Grid item xs={12} md={6} marginX={'auto'}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: '3.5rem', md: '56px' },
          color:'rgb(255 255 255)'
              }}
            >
              Embrace the future of finance
            </Typography>
            <Typography variant="h6" sx={{ mb: 3, color:'rgb(255 255 255)',"@media only screen and (max-width: 1024px)": {
          fontSize:'16px',fontWeight:'600'
        }, }}>
              Reimagine financial services with AnyTech's open platform, distributed
              banking solution that powers transformation
            </Typography>
            <Button
  variant="contained"
  size="large"
  fullWidth={useMediaQuery("(max-width: 1024px)")}
  sx={{
    backgroundColor: "rgb(254 139 83)",
    px: 5,
    color:'rgb(255 255 255)',
    fontSize:'18px',
    fontWeight:'600'
  }}
>
  Reach Out to Us
</Button>
          </Grid>

        </Grid>
      </Container>
</Box>
  );
};
