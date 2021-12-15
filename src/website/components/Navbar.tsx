import { FC } from "react";
import {
  AppBar,
  Icon,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Popover,
  List,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Grid,
} from "@mui/material";
import {
  Menu as MenuIcon,
  ArrowDropDown,
  PersonOutlined,
  ExitToApp,
} from "@mui/icons-material";

import { ILayoutProps } from "../utils/ILayout";

const Navbar: FC<ILayoutProps> = ({ username }) => {
  return (
    <div>
      <AppBar
        position="static"
        sx={{
          bgcolor: "rgba(255, 255, 255)",
          boxShadow: "0px 3px 6px #00000029",
          minHeight: "64px",
          zIndex: 1000,
          justifyContent: "center",
        }}
      >
        <Toolbar
          sx={{ justifyContent: "space-between", padding: "0px 11px" }}
          disableGutters
        >
          {/* Parte izquierda del navbar */}

          <Box display="flex" alignItems="center" justifyContent="flex-start">
            {/* Menu hamburgesa */}

            <IconButton color="primary" size="large">
              <MenuIcon />
            </IconButton>

            {/* Logo app */}

            <Icon
              sx={{
                position: "relative",
                width: "100px",
                height: "40px",
                marginLeft: "20px",
                backgroundImage: `url(../Assets/images/brand.svg)`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />

            <Typography
              variant="body2"
              sx={{ color: "rgba(0, 0, 0, 0.6)" }}
              mt="8.2px"
              ml="4.5px"
            >
              Distribución
            </Typography>
          </Box>

          {/* Parte derecha del navbar */}

          <Box display="flex" alignItems="center" justifyContent="flex-end">
            {/* Nombre, terminal por defecto, terminales autorizadas */}

            <Typography
              component="span"
              variant="body2"
              color="primary"
              paddingTop="2.5px"
            >
              {username ? username : "Drezzy Drake"}
              <br />
              <Typography
                component="span"
                variant="body2"
                sx={{ color: "rgba(0, 0, 0, 0.87)" }}
              >
                Terminal: &nbsp;
                {
                  <>
                    <span style={{ color: "rgba(0, 0, 0, 0.6)" }}>0-3 CAL</span>
                    <IconButton
                      size="small"
                      sx={{ color: "rgba(0, 0, 0, 0.6)", marginLeft: "4px" }}
                    >
                      <ArrowDropDown fontSize="small" />
                    </IconButton>
                  </>
                }
              </Typography>
            </Typography>

            {/* Icono perfil */}

            <IconButton
              sx={{
                marginLeft: "12px",
                backgroundColor: "rgba(0, 0, 0, 0.055)",
                ":hover": { backgroundColor: "rgba(0, 0, 0, 0.055)" },
              }}
            >
              <PersonOutlined fontSize="large" />
            </IconButton>

            {/* Suite */}

            <IconButton
              sx={{
                width: "50px",
                height: "50px",
                marginLeft: "21px",
                ":hover": { backgroundColor: "white" },
              }}
            >
              <Icon
                sx={{
                  position: "relative",
                  width: "31px",
                  height: "31px",
                  backgroundImage: `url(../Assets/images/suite.svg)`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
