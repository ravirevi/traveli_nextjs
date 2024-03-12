'use client'
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import * as React from "react";

export default function Footer(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="#">
            TRAVELI
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        </Typography>
    );
}
