"use client";
import React, { useState, useCallback } from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  ListItemText,
  Toolbar,
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

interface NavbarProps {}

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

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [solutionMenuAnchor, setSolutionMenuAnchor] = useState<null | HTMLElement>(null);
  const [languageMenuAnchor, setLanguageMenuAnchor] = useState<null | HTMLElement>(null);

  const isSolutionMenuOpen = Boolean(solutionMenuAnchor);
  const isLanguageMenuOpen = Boolean(languageMenuAnchor);

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

  const drawer = (
    <Box
      sx={{
        textAlign: "center",
        width: "100vw",
        height: "40vh",
        background: "#0052D4",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 3,
        position: "relative",
      }}
    >
      {/* Close Button */}
      <IconButton
        onClick={handleDrawerToggle}
        sx={{ position: "absolute", top: 10, right: 10, color: "#fff" }}
      >
        <CloseIcon />
      </IconButton>

      {/* Logo */}
      <Typography variant="h6" sx={{ color: "#fff", fontWeight: "bold" }}>
        AYTECH
      </Typography>

      {/* Navigation Items */}
      {NAV_ITEMS.map(({ label, href, submenu }) =>
        submenu ? (
          <Box key={label}>
            <Button
              onClick={handleMenuOpen(setSolutionMenuAnchor)}
              endIcon={<ArrowDropDownCircleOutlined />}
              sx={{ color: "white", textTransform: "none" }}
            >
              {label}
            </Button>
            <Menu
              anchorEl={solutionMenuAnchor}
              open={isSolutionMenuOpen}
              onClose={handleMenuClose(setSolutionMenuAnchor)}
              PaperProps={{ sx: { width: 200, bgcolor: "white", boxShadow: 3, borderRadius: 1 } }}
            >
              {submenu.map(({ label, href }) => (
                <MenuItem key={label} component="a" href={href} onClick={handleMenuClose(setSolutionMenuAnchor)}>
                  <ListItemText primary={label} />
                </MenuItem>
              ))}
            </Menu>
          </Box>
        ) : (
          <Button key={label} component="a" href={href} sx={{ color: "white", textTransform: "none" }}>
            {label}
          </Button>
        )
      )}

      {/* Language Selector */}
      <Button
        startIcon={<LanguageIcon />}
        onClick={handleMenuOpen(setLanguageMenuAnchor)}
        sx={{
          border: "1px solid white",
          borderRadius: "20px",
          color: "#fff",
          textTransform: "none",
          padding: "8px 16px",
        }}
      >
        ENGLISH
      </Button>
      <Menu
        anchorEl={languageMenuAnchor}
        open={isLanguageMenuOpen}
        onClose={handleMenuClose(setLanguageMenuAnchor)}
      >
        {LANGUAGES.map((lang) => (
          <MenuItem key={lang} onClick={handleMenuClose(setLanguageMenuAnchor)}>
            {lang}
          </MenuItem>
        ))}
      </Menu>

      {/* Contact Button */}
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
          backgroundColor: "transparent",
          "&:hover": {
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        Contact Us <ArrowForwardIosIcon />
      </Button>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        position="static"
        sx={{
          background: { xs: "rgb(31 128 240)", md: "transparent" },
          boxShadow: "none",
          padding: "0 20px",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo */}
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            AYTECH
          </Typography>

          {/* Navigation Links (Desktop) */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {NAV_ITEMS.map(({ label, href, submenu }) =>
              submenu ? (
                <Box key={label}>
                  <Button
                    onClick={handleMenuOpen(setSolutionMenuAnchor)}
                    endIcon={<ArrowDropDownCircleOutlined />}
                    sx={{ color: "#fff", textTransform: "none" }}
                  >
                    {label}
                  </Button>
                  <Menu
                    anchorEl={solutionMenuAnchor}
                    open={isSolutionMenuOpen}
                    onClose={handleMenuClose(setSolutionMenuAnchor)}
                    PaperProps={{
                      sx: { width: 200, bgcolor: "white", boxShadow: 3, borderRadius: 1 },
                    }}
                  >
                    {submenu.map(({ label, href }) => (
                      <MenuItem key={label} component="a" href={href} onClick={handleMenuClose(setSolutionMenuAnchor)}>
                        <ListItemText primary={label} />
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              ) : (
                <Button key={label} component="a" href={href} sx={{ color: "#fff", textTransform: "none" }}>
                  {label}
                </Button>
              )
            )}
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton color="inherit" edge="end" onClick={handleDrawerToggle} sx={{ display: { md: "none" } }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
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
        {drawer}
      </Drawer>
    </Box>
  );
};