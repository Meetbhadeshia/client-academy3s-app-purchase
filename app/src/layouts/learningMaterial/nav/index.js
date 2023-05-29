import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// @mui
import { Box, Container, Drawer, Typography, Link, Switch, ListItem, ListItemButton, ListItemText, List } from '@mui/material';
import { FixedSizeList } from 'react-window';
// hooks
import useResponsive from '../../../hooks/useResponsive';
// components
// import Logo from '../../../components/logo';
import Scrollbar from '../../../components/scrollbar';
//
// import navConfig from './config';
// import logo from "./academy-logo.png"

// ----------------------------------------------------------------------

const NAV_WIDTH = 280;

// ----------------------------------------------------------------------

Nav.propTypes = {
    openSidebarNav: PropTypes.bool,
    onCloseSideNav: PropTypes.func,
};

const data = [
    {
        id: 1,
        name: "HTML",
        contentType: "topic",
        url: "url/url"
    },
    {
        id: 921,
        name: "HTML elements",
        contentType: "subtopic",
        url: "url/url"
    },
    {
        id: 12,
        name: "CSS",
        contentType: "topic",
        url: "url/url"
    },
    {
        id: 13,
        name: "Css media queries",
        contentType: "subtopic",
        url: "url/url"
    },
    {
        id: 14,
        name: "Css variables",
        contentType: "subtopic",
        url: "url/url"
    },
    {
        id: 15,
        name: "JS",
        contentType: "topic",
        url: "url/url"
    },
    {
        id: 16,
        name: "JS loops",
        contentType: "subtopic",
        url: "url/url"
    },
    {
        id: 17,
        name: "JS functions",
        contentType: "subtopic",
        url: "url/url"
    },
]

export default function Nav({ openSidebarNav, onCloseSideNav, anchor }) {
    const { pathname } = useLocation();
    const [selected, setSelected] = useState(data[1].name)

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
            <List>
                {data.map(item => (
                    <ListItem key={item.id}
                        sx={{
                            cursor: item.contentType === "subtopic" ? "pointer" : "text",
                            color: item.contentType === "topic" ? "red" : "black",
                            ':hover': item.contentType === 'subtopic' ?
                                { backgroundColor: '#ccc' } :
                                { backgroundColor: 'none' },
                            backgroundColor:
                                selected === item.name ? "#ccc" : "none"
                        }}
                        onClick={() => item.contentType === "subtopic" && setSelected(item.name)}>

                        {item.contentType === "topic" ?
                            <Link underline="none"
                                sx={{
                                    color: "black",
                                }}
                            >

                                <ListItemText primary={item.name} style={{ fontSize: "3rem" }} />

                            </Link> :
                            <ListItemText secondary={item.name}
                                sx={{
                                    "& .css-1r4h3ox-MuiTypography-root": { color: selected === item.name ? "grey" : "none" }
                                }} />
                        }

                    </ListItem>
                ))}
            </List>
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
                            borderTop: '.727px solid rgba(145, 158, 171, 0.24)',
                            borderLeft: '.727px solid rgba(145, 158, 171, 0.24)',
                            top: "12vh",
                            height: "88vh"
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
                        sx: { width: NAV_WIDTH },
                    }}
                >
                    {renderContent}
                </Drawer>
            )
            }
        </Box >
    );
}

