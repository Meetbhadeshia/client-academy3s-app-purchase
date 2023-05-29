import PropTypes from 'prop-types';
import { useEffect, useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Box, Container, Link, Button, Drawer, Typography, Avatar, Stack, FormControlLabel, Switch } from '@mui/material';
import loginContext from "../../../context/loginContext/loginContext"
// mock
import account from '../../../_mock/account';
// hooks
import useResponsive from '../../../hooks/useResponsive';
// components
// import Logo from '../../../components/logo';
import Scrollbar from '../../../components/scrollbar';
import NavSection from '../../../components/nav-section';
//
import navConfig from './config';
import logo from "./academy-logo.png"

// ----------------------------------------------------------------------

const NAV_WIDTH = "20vw";

const StyledAccount = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: alpha(theme.palette.grey[500], 0.12),
}));

// ----------------------------------------------------------------------

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

export default function Nav({ openNav, onCloseNav, checked, handleSwitch, anchor }) {
  const { pathname } = useLocation();

  const isDesktop = useResponsive('up', 'lg');

  const a = useContext(loginContext)

  useEffect(() => {
    if (openNav) {
      onCloseNav();
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
      <Link href="/dashboard/products" sx={{ px: 3, py: 3, display: 'inline-flex' }}>
        {/* <Logo /> */}
        <img src={logo} alt="academy-logo" width="165px" height="70px" style={{ opacity: "0.8" }} />
      </Link>

      <Box sx={{ mt: 1, mb: 2, mx: 2.5 }}>
        <Link href="/profile" underline="none">
          <StyledAccount>
            <Avatar src={account.photoURL} alt="photoURL" />

            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                {account.displayName}
              </Typography>

              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {account.role}
              </Typography>
            </Box>
          </StyledAccount>
        </Link>
      </Box>

      {pathname === "/flashcard" ? (
        <>
          <Container sx={{ ml: 5, mt: 12 }}>
            <Typography variant="h6" sx={{ color: 'text.secondary' }} style={{ display: "inline" }}>
              Table view
            </Typography>
            <Switch
              checked={checked}
              onChange={handleSwitch}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          </Container>
        </>
      ) : (
        <NavSection data={navConfig} />
      )}

      <Box sx={{ flexGrow: 1 }} />

      <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
        <Stack alignItems="center" spacing={3} sx={{ pt: 5, borderRadius: 2, position: 'relative' }}>
          <Box
            component="img"
            src="/assets/illustrations/illustration_avatar.png"
            sx={{ width: 100, position: 'absolute', top: -50 }}
          />

          <Box sx={{ textAlign: 'center' }}>
            <Typography gutterBottom variant="h6">
              Want Help?
            </Typography>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              First call Free
            </Typography>
          </Box>

          <Button href="https://material-ui.com/store/items/minimal-dashboard/" target="_blank" variant="contained">
            Contact us
          </Button>
        </Stack>
      </Box>
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
              borderRightStyle: 'dashed',
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: { width: { xs: '280px', sm: '280px', md: NAV_WIDTH } },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
