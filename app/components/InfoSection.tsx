import { Box, Grid, Typography } from "@mui/material";
import { FC } from "react";
import infoImage from '@/public/Assets/infoimage.png'
import Image from "next/image";

export const InfoSection: FC = () => {
  return (
    <Box maxWidth={'lg'} sx={{
      py: { xs: 6, md: 10 },
      mx: 'auto',
      bgcolor: "#F8FBFF",
      px: { xs: 3, md: 6 }
    }}>
      <Grid container spacing={6} alignItems="center">
        <Grid item sm={6} xs={12}>
          <Typography variant="overline" sx={{
            color: "primary.main",
            fontWeight: 700,
            letterSpacing: 2,
            fontSize: { xs: '0.75rem', md: '0.85rem' },
            mb: { xs: 2, md: 3 },
            display: "block"
          }}>
            POWERING THE FUTURE OF FINANCE
          </Typography>

          <Typography variant="h1" sx={{
            fontWeight: 600,
            fontSize: { xs: '28px', md: '32px' },
            mb: { xs: 3, md: 4 }
          }}>
            Uncovering new ways to delight customers
          </Typography>

          <Typography sx={{
fontWeight:'bolder',
mb: 3
          }}>
            AnyTech is revolutionising financial technology by introducing
            innovative and real-time transaction account processing capabilities,
            specifically designed for retail financial services.
          </Typography>

          <Typography sx={{
            fontSize: { xs: '1rem', md: '1.1rem' },
            lineHeight: 1.7,
            color: "text.secondary",
            fontWeight: 400
          }}>
            Our modern approach surpasses traditional banking and card processing
            systems, empowering you with the most advanced technology for lasting
            success.
          </Typography>
        </Grid>

        <Grid item sm={6} xs={12}>
  <Box sx={{
    position: "relative",
    height: { xs: 400, md: 500 },
    borderRadius: 3,
    overflow: "hidden",
    ml: { md: 4 },
    '&::before': {
      position: "absolute",
      top: "-20%",
      left: 0,
      right: 0,
      height: "40%",
      backgroundImage: 'url(/backgrounds/WaveLinesMobile2.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top center',
      backgroundSize: 'contain',
      zIndex: 1
    }
  }}>
    {/* Main Image */}
    <Box sx={{
      position: "relative",
      zIndex: 2,
      height: "100%",
      width: "100%"
    }}>
      <Image 
        src={infoImage} 
        fill
        alt="Info" 
        style={{ 
          objectFit: 'cover', 
          objectPosition: 'center bottom'
        }} 
      />
    </Box>

    <Box sx={{
      position: "absolute",
      top: "20%",
      right: "5%",
      width: 80,
      height: 80,
      borderRadius: 2,
      zIndex: 3
    }}>
      <Image 
        src="https://cdn.sanity.io/images/6jywt20u/production/0f6c8e3f8d16b88978823d82126b03593266eb79-116x115.svg"
        fill
        alt="icon"
        style={{ objectFit: 'contain' }}
      />
    </Box>

    <Box sx={{
      position: "absolute",
      top: "5%",
      left: "8%",
      width: 80,
      height: 80,
      borderRadius: 2,
      zIndex: 3
    }}>
      <Image 
        src="https://cdn.sanity.io/images/6jywt20u/production/c544c6e75349fb440fc0938052f9288519c87bec-74x75.svg"
        fill
        alt="icon"
        style={{ objectFit: 'contain' }}
      />
    </Box>
  </Box>
</Grid>
      </Grid>
    </Box>
  );
};