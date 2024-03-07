'use client'
import React from "react";
import Sidebar from "@/component/Sidebar";

export default function Member(){

    return(
        <div className="Member_content">
            <Sidebar/>
            <form action="" method="post">
                <select name="type" id="type">
                    <option value="0">아이디</option>
                    <option value="1">이름</option>
                    <option value="2">이메일</option>
                    <option value="3">삭제여부</option>
                </select>
            <input type="text" name="value" id="value" placeholder="검색어 입력"/> 
            <input type="button" id="btn_1" value="검색"/>
        </form>	
        <hr/>
        <form action="" method="post">
            <table id="admin_member_table">
                <thead>
                    <tr>
                        <th>회원번호</th>
                        <th>이름</th>
                        <th>이메일</th>
                        <th>닉네임</th>
                        <th>가입일</th>
                        <th>삭제여부</th>
                    </tr>
                </thead>
                <tbody>
                {/* <c:forEach var="vo" items="${ar}"> */}
                    <tr>
                        <td>1</td>
                        <td>홍길동</td>
                        <td>all123@naver.com</td>
                        <td>$대식이</td>
                        <td>2024-01-30</td>
                        <td>$0</td>
                    </tr>
                {/* </c:forEach> */}
                </tbody>
            {/*  <tfoot>
                    <tr>
                        <td colspan="6">
                            <ol class="paging">

                                <c:if test="${requestScope.page.startPage < requestScope.page.blockPage }">
                                    <li class="disable">&lt;</li>
                                </c:if>
                            
                                <c:if test="${requestScope.page.startPage >= requestScope.page.blockPage }">                          
                                    <li>
                                        <a href="admin/member?cPage=${page.startPage-page.blockPage }">&lt;</a>
                                    </li>
                                </c:if>
                                
                                <c:forEach begin="${page.startPage }" end="${page.endPage }" varStatus="vs">
                                    <c:if test="${vs.index eq page.nowPage }">
                                        <li class="now">${vs.index }</li>
                                    </c:if>
                                    <c:if test="${vs.index ne page.nowPage }">
                                        <li>
                                            <a href="admin/member?cPage=${vs.index }">${vs.index }</a>
                                        </li>
                                    </c:if>
                                </c:forEach>
                                
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
            </form>
        </div>
    );
}