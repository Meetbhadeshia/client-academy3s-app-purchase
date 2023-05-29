import PropTypes from 'prop-types';
import { useMemo } from 'react';
// @mui
import { CssBaseline } from '@mui/material';
import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
//
import palette from './palette';
import typography from './typography';

// ----------------------------------------------------------------------

ThemeProvider.propTypes = {
    children: PropTypes.node,
};

export default function ThemeProvider({ children }) {
    const themeOptions = useMemo(
        () => ({
            mode: "light",
            palette,
            typography,
        }),
        []
    );

    const theme = createTheme(themeOptions);

    return (
        <StyledEngineProvider injectFirst>
            <MUIThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MUIThemeProvider>
        </StyledEngineProvider>
    );
}
