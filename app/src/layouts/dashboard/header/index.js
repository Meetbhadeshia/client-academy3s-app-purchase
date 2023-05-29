import { useState, useContext } from "react"
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom'
// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton } from '@mui/material';
import sideBarContext from '../../../context/sideBarContext';
// utils
import { bgBlur } from '../../../utils/cssStyles';
// components
import Iconify from '../../../components/iconify';
//
import Searchbar from './Searchbar';
import AccountPopover from './AccountPopover';
import NotificationsPopover from './NotificationsPopover';

// ----------------------------------------------------------------------
const NAV_WIDTH = 280;

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 92;

const StyledRoot = styled(AppBar)(({ theme }) => ({
  ...bgBlur({ color: theme.palette.background.default }),
  boxShadow: 'none',
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${NAV_WIDTH + 1}px)`,
  },
}));

// ----------------------------------------------------------------------

Header.propTypes = {
  onOpenNav: PropTypes.func,
};

export default function Header({ onOpenNav }) {
  const { pathname } = useLocation();
  let StyledToolbar
  if (pathname === "/flashcard") {
    StyledToolbar = styled(Toolbar)(({ theme }) => ({
      minHeight: HEADER_MOBILE,
      [theme.breakpoints.up('lg')]: {
        minHeight: HEADER_DESKTOP,
        padding: theme.spacing(0, 5),
      },
    }))
  } else {
    StyledToolbar = styled(Toolbar)(({ theme }) => ({
      minHeight: HEADER_MOBILE,
      [theme.breakpoints.up('lg')]: {
        minHeight: HEADER_DESKTOP,
        padding: theme.spacing(0, 5),
        borderBottom: '.727px solid rgba(145, 158, 171, 0.24)',
      },
    }))
  }
  const a = useContext(sideBarContext)
  return (
    <StyledRoot>
      <StyledToolbar>
        <IconButton
          onClick={onOpenNav}
          sx={{
            mr: 1,
            color: 'text.primary',
            display: { lg: 'none' },
          }}
        >
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>

        <Searchbar />
        <Box sx={{ flexGrow: 1 }} />

        <Stack
          direction="row"
          alignItems="center"
          spacing={{
            xs: 0.5,
            sm: 1,
          }}
        >
          {/* <LanguagePopover /> */}
          <NotificationsPopover />
          <AccountPopover />
          <IconButton
            onClick={() => a.setSideBarOpen(true)}
            sx={{
              mr: 1,
              color: 'text.primary',
              display: { lg: 'none' },
            }}
          >
            <Iconify icon="gg:menu-right" />
          </IconButton>
        </Stack>
      </StyledToolbar>
    </StyledRoot >
  );
}
