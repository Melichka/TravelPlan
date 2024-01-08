import React from 'react';

import { Button, Typography } from "@mui/material"

import { SIGHT } from './constants';

import './styles.css';

export const SightButton = () => {
    return (
        <Button
            className="button-style"
        >
            <Typography className="text-button-style" variant='h3'>{SIGHT}</Typography>
        </Button>
    )
}
