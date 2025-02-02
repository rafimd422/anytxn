'use client'
import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import logo1 from '@/public/Logos/logo1.png';
import logo2 from '@/public/Logos/logo2.png';
import logo3 from '@/public/Logos/logo3.png';
import logo4 from '@/public/Logos/logo4.png';
import logo5 from '@/public/Logos/logo5.png';
import logo6 from '@/public/Logos/logo6.png';
import logo7 from '@/public/Logos/logo7.webp';
import logo8 from '@/public/Logos/logo8.png';
import logo9 from '@/public/Logos/logo9.png';
import logo10 from '@/public/Logos/logo10.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 

const TrustedByBest = () => {
  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
  ];

  return (
    <Container sx={{ padding: '48px 0', backgroundColor: '#f8f9fa' }}>
      <Typography
        sx={{
          textAlign: 'center',
          marginBottom: 4,
          fontWeight: 'bold',
          fontSize: '2rem',
          color: '#333',
        }}
      >
        Trusted by the Best
      </Typography>
      <Swiper
        spaceBetween={16} 
        slidesPerView="auto" 
        grabCursor={true}
        touchRatio={1}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transition: 'transform 0.3s ease',
              }}
            >
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                width={150}
                height={50}
                style={{
                  objectFit: 'contain',
                  transition: 'transform 0.3s ease',
                }}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default TrustedByBest;