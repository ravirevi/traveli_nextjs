'use client'
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Avatar, Button, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material"; // mui를 최대한 사용해보려고 import
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import axios from "axios";
export default function Admin(){


    /* 버튼 클릭 시, page.js로 이동하려고 라우터를 사용해야 하므로,  */
    const router = useRouter();

    // 아이디와 비밀번호 상태 설정
    const [ad_id, setAd_id] = useState("");
    const [ad_pw, setAd_pw] = useState("");

    /* // 경로 지정
    const api_uri = `/admin/login`; */

     // 로그인 함수 정의
     const login = async () => {
        try {
            console.log(ad_id);
            console.log(ad_pw);
            axios.post("/admin/main", null, { params: {
                ad_id: ad_id,
                ad_pw: ad_pw
            }}).then((json) =>{
                /* const user = json.data.vo; */
                console.log(json);
                console.log(json.data);
                if (json.data.vo !== undefined) {
                    // json.data.vo가 null이 아닌 경우의 처리
                    console.log(json.data.vo);
                    console.log(json.data.vo.ad_id);
                    sessionStorage.setItem("id", json.data.vo.ad_id);
                    router.push("/pages/dashboard"); // 페이지를 reload하는게 아니라서, 아래 페이지만 바뀜.
                    router.refresh(); // 강제로 새로 고침 한번 시킴.
                    console.log(sessionStorage.getItem("id"));
                } else {
                    // json.data.vo가 null인 경우의 처리
                    // console.log(json.data);
                    /* sessionStorage.removeItem("user"); */
                    router.push("/");
                }
            });
            //console.log(response.data); // 로그인 결과 확인 (예: 성공 또는 실패 메시지)
            // 로그인에 성공하면 다음 페이지로 이동
            //router.push("/next_page");
        } catch (error) {
            console.error("로그인 에러:", error);
            // 실패한 경우 에러 처리
        }
    };

    // 로그인 상태에 따라, 강제 이동, 중복 방지용.
    function checkLogin() {
        const id = sessionStorage.getItem("id");
        if (!id) {
            router.push("/pages/login");
        } else {
            router.push("/");
        }
    };



    // 페이지가 실행 될 때, 가장 처음에 한번만 실행하며, 가장 빠르게 실행되는 함수.
    useEffect(() => {
        checkLogin();
    },[]);

    return(
        <div className="manager"> {/* CSS 클래스 이름을 직접 지정 */}
        <div className="manager_2">
            {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" 
            sx={{ width: 56, height: 56} }
            /> */}
            <br/><br/>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main', margin:'auto' }}>
                <LockOutlinedIcon />
            </Avatar>
            <br/>
            <Typography component="h1" variant="h5">관리자 로그인</Typography>
            <br/>
            <TextField label="아이디를 입력하세요." 
                value={ad_id}
                onChange={(e) => setAd_id(e.target.value)}
                name="email" autoComplete="email" autoFocus/>
            <br/><br/>
            <TextField label="비밀번호를 입력하세요." 
            type="password" 
            name="password"
            value={ad_pw} 
            onChange={(e) => setAd_pw(e.target.value)}
            autoComplete="current-password"/>
            <br/>
            {/* <FormControlLabel control={<Checkbox value="remember" color="primary"/>} label="remember me"/> */}
            <br/>
            <Button type="submit" variant="contained" sx={{mt:3, mb:2}} onClick={login}>로그인</Button>
        </div>
        </div>
    );
}