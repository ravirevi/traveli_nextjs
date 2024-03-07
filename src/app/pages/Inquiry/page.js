'use client'
import React, { useState } from "react";
import Sidebar from "@/component/Sidebar";
/* 1:1 */
export default function InQuery(){

    return(
        <div className="Inquiry_content"> {/* CSS 클래스 이름을 직접 지정 */}
            <Sidebar/>
            <div>
                    <select name="type" id="type">
                        <option value="0">회원명</option>
                        <option value="1">내용</option>
                        <option value="2">답변여부</option>
                    </select>
                <input type="text" name="value" id="value" placeholder="검색어 입력"/> 
                <input type="button" id="btn_1" value="검색"/>            
            <hr/>
                <table>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>회원명</th>
                            <th>이메일</th>
                            <th>문의날짜</th>
                            <th>답변여부</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr id="inquiries_tr" class="bold-text">
                            <td>3</td>
                            <td>회원가입이 안되요</td>
                            <td>무식한</td>
                            <td>sikhan@nom.com</td>
                            <td>2024-02-01</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>가이드가 먹튀했어요</td>
                            <td>홍박사</td>
                            <td>hong@parksa.com</td>
                            <td>2024-01-31</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>아니 이거 결제했는데 왜 안됨</td>
                            <td>얼땅쟈</td>
                            <td>huaguajoa@keria.com</td>
                            <td>2024-01-31</td>
                            <td>0</td>
                        </tr>
                    </tbody>
                {/*  <tfoot>
                        <tr>
                            <td colspan="6">
                                <ol class="paging">

                                    <!-- <c:if test="${requestScope.page.startPage < requestScope.page.blockPage }">
                                        <li class="disable">&lt;</li>
                                    </c:if> -->
                                    <li class="disable">&lt;</li>
                                    <li class="now">1</li>
                                
                                    <!-- <c:if test="${requestScope.page.startPage >= requestScope.page.blockPage }">                          
                                        <li>
                                            <a href="admin/member?cPage=${page.startPage-page.blockPage }">&lt;</a>
                                        </li>
                                    </c:if> -->
                                    
                                    <!-- <c:forEach begin="${page.startPage }" end="${page.endPage }" varStatus="vs">
                                        <c:if test="${vs.index eq page.nowPage }"> 
                                            <li class="now">1</li>
                                        </c:if>
                                        <c:if test="${vs.index ne page.nowPage }">
                                            <li>
                                                <a href="admin/member?cPage=${vs.index }">${vs.index }</a>
                                            </li>
                                        </c:if>
                                    </c:forEach> -->
                                    
                                    <c:if test="${page.endPage < page.totalPage }">
                                        <li><a href="admin/member?cPage=${page.startPage+page.blockPage }">&gt;</a></li>
                                    </c:if>
                                    <c:if test="${page.endPage >= page.totalPage }">
                                        <li class="disable">&gt;</li>
                                    </c:if>
                                        
                                </ol>

                            </td>
                        </tr>
                    </tfoot> */}
                </table>
        </div>
        {/* <div id="inquiries_dialog" style={{ display: 'none' }}>
            <table summary="1:1문의 (3)">
                <tbody>
                    <tr>
                        <th>번호:</th>
                        <td>3</td>
                    </tr>
                    <tr>
                        <th>제목:</th>
                        <td>회원가입이 안되요</td>
                    </tr>
                    <tr>
                        <th>작성자:</th>
                        <td>무식한</td>
                    </tr>
                    <tr>
                        <th>이메일:</th>
                        <td>sikhan@nom.com</td>
                    </tr>
                    <tr>
                        <th>작성일:</th>
                        <td>2024-02-01</td>
                    </tr>
                    
                    <tr>
                        <th>답변</th>
                        <td>
                            <textarea name="bbs_content" cols="50" 
                                    id="content" rows="8">답변 작성</textarea>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="2">
                            <input type="button" value="답변하기"/> 
                            <input type="button" value="취소"/> 
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div> */}

        </div>
    );
}