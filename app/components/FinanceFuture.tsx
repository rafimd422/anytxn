"use client";
import { useState, useEffect } from "react";
import { Card, CardContent, Container, Tab, Tabs, Typography, useMediaQuery } from "@mui/material";
import { Title } from "./Title";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import img1 from "@/public/Financefuture/img1.png";
import img2 from "@/public/Financefuture/img2.png";
import img3 from "@/public/Financefuture/img3.png";
import img4 from "@/public/Financefuture/img4.png";
import { Swiper as SwiperType } from "swiper";

export const FinanceFuture = () => {
    const [tabIndex, setTabIndex] = useState<number>(0);
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    const isDesktop = useMediaQuery("(min-width:902px)");

    const slides = [
        {
            title0: "Customer focused",
            title: "Purpose-built financial services",
            description:
                "Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system.",
            image: img1,
        },
        {
            title0: "Agile and adaptable",
            title: "Agile and adaptable for growth",
            description: "Enhance financial agility with real-time adaptability and seamless integration.",
            image: img2,
        },
        {
            title0: "Compliance ready",
            title: "Manage compliance with ease",
            description: "Ensure regulatory compliance with built-in financial governance frameworks.",
            image: img3,
        },
        {
            title0: "Secure and safe",
            title: "Highly secure and safe",
            description: "Experience top-tier security measures for financial transactions and data protection.",
            image: img4,
        },
    ];

    useEffect(() => {
        if (swiperInstance) {
            swiperInstance.slideTo(tabIndex);
        }
    }, [tabIndex, swiperInstance]);

    return (
        <Container sx={{ my: "4rem" }}>
            <Title title="TECHNOLOGY BUILT FOR YOU" subTitle="The future of finance" />

            {isDesktop && (
                <Tabs
                    value={tabIndex}
                    onChange={(_, newValue: number) => setTabIndex(newValue)}
                    centered
                    sx={{ mb: 3, borderRadius: 2, fontWeight: "bolder" }}
                >
                    {slides.map((slide, index) => (
                        <Tab key={index} label={slide.title} />
                    ))}
                </Tabs>
            )}

            <Swiper
                slidesPerView={1}
                onSlideChange={(swiper) => setTabIndex(swiper.activeIndex)}
                onSwiper={(swiper) => setSwiperInstance(swiper)}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <Card
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "space-between",
                                alignItems: "center",
                                p: 3,
                                borderRadius: 3,
                                boxShadow: 3,
                            }}
                        >
                            <CardContent sx={{ flex: 2 }}>
                                <Typography sx={{fontWeight: 700,
          letterSpacing: 2,textTransform:'uppercase',
          fontSize: { xs: "0.75rem", md: "0.85rem" },
          textAlign: "start"}} color="primary">
                                    {slide.title0}
                                </Typography>
                                <Typography sx={{fontWeight: 700,
          letterSpacing: 2,
          fontSize: "34px",
          textAlign: "start"}} fontWeight="bold" gutterBottom>
                                    {slide.title}
                                </Typography>
                                {isDesktop && <Typography>{slide.description}</Typography>}
                            </CardContent>
                            <Image
                                src={slide.image}
                                alt="Financial visualization"
                                width={500}
                                height={400}
                                style={{
                                    width: isDesktop ? "50%" : "100%",
                                    objectFit: "cover",
                                    borderRadius: "8px",
                                    marginLeft: "12px",
                                }}
                            />
                            {!isDesktop && <Typography textAlign={'center'} fontSize={'14px'} marginTop={'6px'}>{slide.description}</Typography>}
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    );
};
