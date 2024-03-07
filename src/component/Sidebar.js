'use client'
import React from "react";
import { useRouter } from "next/navigation";
import styles from '../../public/css/sidebar.module.css'; // 상대 경로 사용

export default function Sidebar(){

    // 사이드바 메뉴 항목
    const sideItem = ['대시보드', '회원목록 및 관리', '1:1문의', '게시판 관리', '가이드 관리', '로그아웃'];

    const router = useRouter();

    // 각 메뉴 항목 클릭 시 페이지 이동 함수
    function linkToPage(idx){
        switch(idx){
            case 0:
                router.push("/pages/dashboard");
                break;
            case 1:
                router.push("/pages/member");
                break;
            case 2:
                router.push("/pages/Inquiry");
                break;
            case 3:
                router.push("/pages/management");
                break;
            case 5:
                router.push("/");
                break;
            // 나머지 메뉴 항목에 대한 처리 추가
            default:
                break;
        }
    }

    return(
        <div className="sidebar">
            <ul>
                {/* 기타 사이드바 항목 */}
                <li><a href="#">사이트 관리</a></li>
                <hr/>
                {/* sideItem 배열을 반복하여 각 메뉴 항목을 표시 */}
                {sideItem.map((item, index) => (
                    <li key={item} className="s_li">
                        <a onClick={() => linkToPage(index)} className="it">{item}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}