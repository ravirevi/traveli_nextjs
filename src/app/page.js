'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Avatar, Button, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material"; // mui를 최대한 사용해보려고 import
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import axios from "axios";
export default function Home() {
    return (
        <div>
            메인 페이지.
        </div>
    );
    }