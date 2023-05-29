import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// @mui
import { Box, Container, Drawer, Typography, Switch } from '@mui/material';
// hooks
import useResponsive from '../../../hooks/useResponsive';
// components
// import Logo from '../../../components/logo';
import Scrollbar from '../../../components/scrollbar';
//
// import navConfig from './config';
// import logo from "./academy-logo.png"

// ----------------------------------------------------------------------

const NAV_WIDTH = "20vw";

// ----------------------------------------------------------------------

Nav.propTypes = {
  openSidebarNav: PropTypes.bool,
  onCloseSideNav: PropTypes.func,
};

export default function Nav({ openSidebarNav, onCloseSideNav, checked, handleSwitch, anchor }) {
  const { pathname } = useLocation();

  const isDesktop = useResponsive('up', 'lg');

  useEffect(() => {
    if (openSidebarNav) {
      onCloseSideNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
      }}
    >
      {/* <Link href="/dashboard/products" sx={{ px: 3, py: 3, display: 'inline-flex' }}> */}
      {/* <Logo /> */}
      {/* <img src={logo} alt="academy-logo" width="165px" height="70px" style={{ opacity: "0.8" }} /> */}
      {/* </Link> */}

      <Container sx={{ ml: 5, mt: 5 }}>
        <Typography variant="subtitle1" sx={{ color: 'text.secondary' }} style={{ display: "inline" }}>
          Table view
        </Typography>
        <Switch
          checked={checked}
          onChange={handleSwitch}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      </Container>


      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar >
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
      }}
    >
      {isDesktop ? (
        <Drawer
          open
          anchor={anchor}
          variant="permanent"
          PaperProps={{
            sx: {
              width: NAV_WIDTH,
              bgcolor: 'background.default',
              borderTop: '0',
              borderLeft: '.727px solid rgba(145, 158, 171, 0.24)',
              top: "13vh"
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={openSidebarNav}
          anchor={anchor}
          onClose={onCloseSideNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: { width: { md: NAV_WIDTH } },
          }}
        >
          {renderContent}
        </Drawer>
      )
      }
    </Box >
  );
}
