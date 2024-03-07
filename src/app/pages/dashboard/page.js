'use client'
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from '@/component/Sidebar';
import axios from "axios";
export default function Dashboard(){
    
    const router = useRouter();

    const [memberCount, setMemberCount] = useState(0);
    const [totalCount, setTotalCount] = useState();

    // async function fetchData() {
    //     try {
    //         axios.post('/admin/dashboard');
    //         setMemberCount(response.data.memberCount);
    //     } catch (error) {
    //         console.error("데이터가 조회가 안된다.", error);
    //     }
    // }

    function fetchData() {
        axios.get(
            "/admin/dashboard"
        ).then(json => {
            console.log(json); // json안에 data 부분에 membercount를 확인하면 4라고 찍히고.
            setMemberCount(json.data.memberCount);
            setTotalCount(json.data.totalCount);
            //console.log(memberCount);
        });
    }

    // 생성시 , 가장 먼저 실행되는 부분
    useEffect(() => {
        fetchData();
    }, []);

    return(
        <div className="dash_content">
            <Sidebar />
            <div className="b1">
                <div className="b2">
                    <div className="a1">
                        <h3>전체 회원 수</h3><br/>
                        <p>{memberCount}</p>
                    </div>
                    <div className="a2">
                        <h3>전체 게시물 수</h3><br/>
                        <p>{totalCount}</p>
                    </div>
                </div>
                    <div className="a3">
                        일일접속현황
                    </div>
                    <div className="a4">
                        게시판 별 일일 신규 게시물
                    </div>
            </div>    
        </div>
    );
}
