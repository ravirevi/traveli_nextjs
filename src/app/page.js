'use client'
import React, { use, useState } from "react";
import { useRouter } from "next/navigation";
import { Avatar, Button, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material"; // mui를 최대한 사용해보려고 import
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import axios from "axios";
export default function Home() {

    const mainLogin = ['로그인 화면으로'];

    const router = useRouter();

    function linkToPage2(idx){
        switch(idx){
            case 0:
                router.push("/pages/login");
                break;
            default:
                break;
        }
    }

    return (
        <div className="main_1">
            <ul>
                {/* 메인 페이지 로그인 연결 항목 */}
                <li><a href="#">사이트 연결</a></li>
                <hr/>
                {/* sideItem 배열을 반복하여 각 메뉴 항목을 표시 */}
                {mainLogin.map((item, index) => (
                    <li key={item} className="login_1">
                        <a onClick={() => linkToPage2(index)} className="it">{item}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
    }