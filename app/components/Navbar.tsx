"use client";
import React, { useState, useCallback, useEffect } from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LanguageIcon from "@mui/icons-material/Language";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowDropDownCircleOutlined from "@mui/icons-material/ArrowDropDownCircleOutlined";

interface NavItem {
  label: string;
  href: string;
  submenu?: { label: string; href: string }[];
}

const LANGUAGES = ["English", "Français", "বাংলা"];

const NAV_ITEMS: NavItem[] = [
  {
    label: "Solutions",
    href: "#",
    submenu: [
      { label: "AnyCaaS", href: "/en/solutions/anycaas" },
      { label: "AnyBaaS", href: "/en/solutions/anybaas" },
      { label: "AnyPaaS", href: "/en/solutions/anypaas" },
    ],
  },
  { label: "Services", href: "/en/services" },
  { label: "About Us", href: "/en/about-us" },
];

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionMenuAnchor, setSolutionMenuAnchor] = useState<null | HTMLElement>(null);
  const [languageMenuAnchor, setLanguageMenuAnchor] = useState<null | HTMLElement>(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleMenuOpen = useCallback(
    (setAnchor: React.Dispatch<React.SetStateAction<null | HTMLElement>>) =>
      (event: React.MouseEvent<HTMLElement>) => setAnchor(event.currentTarget),
    []
  );

  const handleMenuClose = useCallback(
    (setAnchor: React.Dispatch<React.SetStateAction<null | HTMLElement>>) =>
      () => setAnchor(null),
    []
  );

  const handleDrawerToggle = useCallback(() => setMobileOpen((prev) => !prev), []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <Box width={"100%"} sx={{ display: "flex", justifyContent: "center" }}>
      <CssBaseline />
      <AppBar
  sx={{
    mx: "auto",
    background: lastScrollY > 0 ? "white" : "none",
    boxShadow: lastScrollY > 0 ? 3 : "none",
    transition: "transform 0.3s ease-in-out, background 0.3s ease-in-out",
    transform: showNavbar ? "translateY(0)" : "translateY(-100%)",
  }}
>
  <Box
    display={"flex"}
    flexDirection={"row"}
    margin={"0 auto"}
    width={{ md: "70%", sm: "90%", xs: "95%" }}
    justifyContent={"space-between"}
    py={"2rem"}
  >
    <Typography
      variant="h6"
      sx={{
        mt: ".8rem",
        fontWeight: "bold",
        color: lastScrollY > 0 ? "rgb(31 128 240)" : "white",
      }}
    >
      AYTECH
    </Typography>

    <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
      {NAV_ITEMS.map(({ label, href, submenu }) =>
        submenu ? (
          <Box key={label}>
            <Button
              onClick={handleMenuOpen(setSolutionMenuAnchor)}
              endIcon={<ArrowDropDownCircleOutlined />}
              sx={{
                color: lastScrollY > 0 ? "rgb(31 128 240)" : "#fff",
                textTransform: "none",
                mt: { xs: "3px", lg: "8px" },
              }}
            >
              {label}
            </Button>
            <Menu
              anchorEl={solutionMenuAnchor}
              open={Boolean(solutionMenuAnchor)}
              onClose={handleMenuClose(setSolutionMenuAnchor)}
              PaperProps={{
                sx: { bgcolor: "white", boxShadow: 3, borderRadius: 1 },
              }}
            >
              {submenu.map(({ label, href }) => (
                <MenuItem
                  key={label}
                  component="a"
                  href={href}
                  onClick={handleMenuClose(setSolutionMenuAnchor)}
                >
                  {label}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        ) : (
          <Button
            key={label}
            component="a"
            href={href}
            sx={{
              color: lastScrollY > 0 ? "rgb(31 128 240)" : "#fff",
              textTransform: "none",
            }}
          >
            {label}
          </Button>
        )
      )}
      <Button
        startIcon={<LanguageIcon />}
        onClick={handleMenuOpen(setLanguageMenuAnchor)}
        sx={{
          border: "1px solid",
          borderColor: lastScrollY > 0 ? "rgb(31 128 240)" : "white",
          borderRadius: "20px",
          color: lastScrollY > 0 ? "rgb(31 128 240)" : "#fff",
          textTransform: "none",
          padding: "0px 12px",
          mx: "auto",
        }}
      >
        EN
      </Button>
      <Menu
        anchorEl={languageMenuAnchor}
        open={Boolean(languageMenuAnchor)}
        onClose={handleMenuClose(setLanguageMenuAnchor)}
      >
        {LANGUAGES.map((lang) => (
          <MenuItem key={lang} onClick={handleMenuClose(setLanguageMenuAnchor)}>
            {lang}
          </MenuItem>
        ))}
      </Menu>
    </Box>

    <Button
      variant="outlined"
      sx={{
        fontSize: "18px",
        lineHeight: "23px",
        fontWeight: "600",
        border: "1px solid",
        borderColor: lastScrollY > 0 ? "rgb(254 139 83)" : "white",
        background: lastScrollY > 0 ? 'rgb(254 139 83)' : "none",
        borderRadius: "4px",
        color: "#fff",
        boxShadow: "0px 2px 4px rgba(255, 255, 255, 0.27)",
        display: { lg: "flex", xs: "none" },
      }}
    >
      Contact Us <ArrowForwardIosIcon />
    </Button>

    <IconButton
      color="inherit"
      onClick={handleDrawerToggle}
      sx={{
        display: { md: "none" },
        color: lastScrollY > 0 ? "rgb(31 128 240)" : "#fff",
      }}
    >
      <MenuIcon />
    </IconButton>
  </Box>
</AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: "100vw", background: "#0052D4", height: "44vh" },
        }}
      >
        <Box
          sx={{
            textAlign: "left",
            width: "100vw",
            height: "40vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: 3,
            position: "relative",
            padding: "20px",
          }}
        >
          <IconButton
            onClick={handleDrawerToggle}
            sx={{ position: "absolute", top: 10, right: 10, color: "#fff" }}
          >
            <CloseIcon />
          </IconButton>

          {NAV_ITEMS.map(({ label, href, submenu }) => (
            <Box key={label} sx={{ width: "100%" }}>
          <Button
            onClick={submenu ? handleMenuOpen(setSolutionMenuAnchor) : undefined}
            component={!submenu ? "a" : "button"} 
            href={!submenu ? href ?? "#" : undefined} 
          >
            {label}
          </Button>
            </Box>
          ))}

          <Button
            startIcon={<LanguageIcon />}
            onClick={handleMenuOpen(setLanguageMenuAnchor)}
            sx={{
              border: "1px solid white",
              borderRadius: "20px",
              color: "#fff",
              textTransform: "none",
              padding: "8px 16px",
              mx: "auto",
            }}
          >
            ENGLISH
          </Button>
          <Menu anchorEl={languageMenuAnchor} open={Boolean(languageMenuAnchor)} onClose={handleMenuClose(setLanguageMenuAnchor)}>
            {LANGUAGES.map((lang) => (
              <MenuItem key={lang} onClick={handleMenuClose(setLanguageMenuAnchor)}>
                {lang}
              </MenuItem>
            ))}
          </Menu>

          <Button
            variant="outlined"
            sx={{
              border: "1px solid white",
              borderRadius: "4px",
              color: "#fff",
              transition: "all 0.3s ease",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              textTransform: "none",
              padding: "10px 20px",
              fontSize: "1.1rem",
              width: "100%",
              justifyContent: "flex-start",
              "&:hover": {
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            Contact Us <ArrowForwardIosIcon />
          </Button>
        </Box>
      </Drawer>
    </Box>
  )
}