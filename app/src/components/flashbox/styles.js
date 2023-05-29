import { styled } from '@mui/material/styles';

const FlashBox = styled('div', {})({
    position: 'relative',
    userSelect: 'none',
    fontSize: '1.2rem',

    '& .card': {
        alignItems: 'center',
        backgroundColor: 'white',
        boxShadow: '0 0 5px 5px rgba(0, 0, 0, .3)',
        borderRadius: '.25rem',
        display: 'flex',
        height: 'min(500px, 60vh)',
        justifyContent: 'center',
        position: 'relative',
        transformStyle: 'preserve-3d',
        transform: 'rotateY(var(--rotate-y, 0))',
        transition: '150ms',
        // width: 'clamp(200px, 44vw, 1000px)',
        cursor: 'pointer',
        textAlign: 'center',
        padding: 25
    },

    '& .card.flip': {
        '--rotate-y': '360deg', // changing this solved my problem in production mode from 180 to 360
        backgroundColor: '#1976d2',
        color: 'white',
    },

    '& .card.front': {
        backfaceVisibility: 'hidden',
        position: 'absolute',
        padding: '1rem',
    },

    '& .card.back': {
        color: '#1976d2',
        transform: 'rotateY(180deg)',
    },
});

export default FlashBox;        