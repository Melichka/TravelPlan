import React from 'react';

import { Button, Typography } from "@mui/material"

import { HOTEL } from './constants';

import "./styles.css";

export const HotelButton = () => {
    return (
        <Button
            className="button-style"
        >
            <Typography className="text-button-style" variant='h3'>{HOTEL}</Typography>
        </Button>
    )
}
