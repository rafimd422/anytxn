"use client";
import { useState, useEffect } from "react";
import { Box, Card, CardContent, Container, Tab, Tabs, Typography, useMediaQuery } from "@mui/material";
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
            description2:
                "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
            image: img1,
        },
        {
            title0: "Agile and adaptable",
            title: "Agile and adaptable for growth",
            description: "Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.",
            description2: "Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.",
            image: img2,
        },
        {
            title0: "Compliance ready",
            title: "Manage compliance with ease",
            description: "Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.",
            description2: "Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment systems.",
            image: img3,
        },
        {
            title0: "Secure and safe",
            title: "Highly secure and safe",
            description: "Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.",
            description2: "Join over 40 esteemed Fls, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure..",
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
                                <Typography sx={{
                                    fontWeight: 700,
                                    letterSpacing: 2, textTransform: 'uppercase',
                                    fontSize: { xs: "0.75rem", md: "0.85rem" },
                                    textAlign: "start"
                                }} color="primary">
                                    {slide.title0}
                                </Typography>
                                <Typography sx={{
                                    fontWeight: 700,
                                    letterSpacing: 2,
                                    fontSize: "34px",
                                    textAlign: "start"
                                }} fontWeight="bold" gutterBottom>
                                    {slide.title}
                                </Typography>
                                {isDesktop && <>
                                    <Typography textAlign={'justify'} fontSize={'14px'} fontWeight={'bold'} marginY={'6px'}>{slide.description}</Typography>
                                    <Typography textAlign={'justify'} fontSize={'14px'} marginTop={'6px'}>{slide.description2}</Typography>
                                </>}
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
                            {!isDesktop &&
                                <>
                                    <Typography textAlign={'justify'} fontSize={'14px'} fontWeight={'bold'} marginY={'6px'}>{slide.description}</Typography>
                                    <Typography textAlign={'justify'} fontSize={'14px'} marginTop={'6px'}>{slide.description2}</Typography>
                                </>
                            }
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    );
};