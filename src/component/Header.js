'use client'
import React from "react";
import { useRouter } from "next/navigation"; // 라우터 import
import styles from '../../public/css/header.module.css'; // 상대 경로 사용


export default function Header(){

    const router = useRouter();

    // 로그아웃 버튼 누르면, session에 있는 id 지우면서, 페이지 이동
    const handleLogout = () => {
        // 세션 스토리지에서 아이템 삭제
        sessionStorage.removeItem("id");
        // 로그아웃 후 페이지 이동
        router.push("/pages/login"); // 로그인 페이지 경로에 맞게 수정하세요.
        // 강제로 새로고침
        router.refresh();
    };

    return(
        <div className={styles.header}>
            {/* 로고 */}
            <div className={styles["header-logo"]} draggable="true">
                <a className={styles["navbar-brand"]} href="/">트래블리</a>
            </div>
            {/* 사용자 정보가 있을 경우 메시지 표시 */}
            {sessionStorage.getItem("id") && (
                <div className={styles['user-welcome']}>
                <span>안녕하세요, {sessionStorage.getItem("id")}님</span> &nbsp;&nbsp;
                <button type="button" onClick={handleLogout}>로그아웃</button>
                </div>
            )}
        </div>
    );

}