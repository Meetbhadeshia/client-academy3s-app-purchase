import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import { StyledChart } from './components/chart';
import ScrollToTop from './components/scroll-to-top';
import SidebarState from "./context/sideBarState"
import LoginState from "./context/loginContext/loginState"

// ----------------------------------------------------------------------

export default function App() {
  useEffect(() => {
    const preventRightClick = event => event.preventDefault();
    document.addEventListener('contextmenu', preventRightClick); // eslint-disable-line no-undef
    return () => document.removeEventListener('contextmenu', preventRightClick); // eslint-disable-line no-undef
  }, []);
  return (
    <LoginState>
      <SidebarState>
        <HelmetProvider>
          <BrowserRouter>
            <ThemeProvider>
              <ScrollToTop />
              <StyledChart />
              <Router />
            </ThemeProvider>
          </BrowserRouter>
        </HelmetProvider>
      </SidebarState>
    </LoginState>
  );
}
