'use client'
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import * as React from "react";

export default function Footer(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        {new Date().getFullYear()}{' '}
        <Link color="inherit" href="#">
         TRAVELI. 
        </Link>{' '}
        All rights reserved
        </Typography>
    );
}
