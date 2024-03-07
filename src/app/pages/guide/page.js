'use client'
import React from "react";

export default function Guide(){
    
    return(
        <div className="Guide_content">
            <div>
    <table>
        <thead>
            <tr>
                <th>회원번호</th>
                <th>가이드이름</th>
                <th>지역</th>
                <th>프로필 보기</th>
                <th>승인여부</th>
            </tr>
        </thead>
        <tbody>
            
            <tr>
                <td>1</td>
                <td>한라봉</td>
                <td>제주도</td>
                <td><input type="button" value="프로필"/></td>
                <td><input type="button" value="승인"/><input type="button" value="반려"/></td>
            </tr>

           {/* <c:if test="${ar eq null}">
                <tr>
                    <td colspan="6">검색된 결과가 없습니다.</td>
                </tr>
            </c:if>  */}
        </tbody>    
        
        {/* <tfoot>
            <tr>
                <td colspan="6">
                    <ol class="paging">
                        
                        <li class="disable">&lt;</li>
                        <li class="now">1</li>
                        <li class="disable">&gt;</li>

                        <!-- <c:if test="${requestScope.page.startPage < requestScope.page.blockPage }">
                            <li class="disable">&lt;</li>
                        </c:if> -->
                        <!-- <c:if test="${requestScope.page.startPage >= requestScope.page.blockPage }">                          
                            <li>
                                <a href="admin/member?cPage=${page.startPage-page.blockPage }">&lt;</a>
                            </li>
                        </c:if> 
                        
                        <c:forEach begin="${page.startPage }" end="${page.endPage }" varStatus="vs">
                            <c:if test="${vs.index eq page.nowPage }"> 
                                <li class="now">1</li>
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
                        </c:if>-->
                            
                    </ol>

                </td>
            </tr>
        </tfoot> */}
    </table>
</div>
<hr/>
<h3>[가이드 리스트]</h3>
<br/>
<div>
    <form action="" method="post">
        <select name="type" id="type">
            <option value="0">가이드이름</option>
            <option value="1">지역</option>
            <option value="2">활동 수</option>
            <option value="3">삭제 여부</option>
        </select>
            <input type="text" name="value" id="value" placeholder="검색어 입력"/> 
            <input type="button" id="btn_1" value="검색"/>
    </form>	
</div>
<br/>
<div>
    <table>
        <thead>
            <tr>
                <th>회원번호</th>
                <th>가이드이름</th>
                <th>지역</th>
                <th>활동 수</th>
                <th>프로필 보기</th>
                <th>삭제여부</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>7</td>
                <td>힝욱</td>
                <td>대구</td>
                <td>31</td>
                <td><input type="button" value="프로필"/></td>
                <td>0</td>
            </tr>
            <tr>
                <td>6</td>
                <td>Hxxx</td>
                <td>부산</td>
                <td>54</td>
                <td><input type="button" value="프로필"/></td>
                <td>0</td>
            </tr>
            <tr>
                <td>5</td>
                <td>Casis</td>
                <td>울산</td>
                <td>32</td>
                <td><input type="button" value="프로필"/></td>
                <td>0</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Revi</td>
                <td>대전</td>
                <td>29</td>
                <td><input type="button" value="프로필"/></td>
                <td>0</td>
            </tr>
            <tr>
                <td>3</td>
                <td>김민재</td>
                <td>인천</td>
                <td>27</td>
                <td><input type="button" value="프로필"/></td>
                <td>0</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Jjuyeong</td>
                <td>서울</td>
                <td>88</td>
                <td><input type="button" value="프로필"/></td>
                <td>0</td>
            </tr>
            <tr>
                <td>1</td>
                <td>한라봉</td>
                <td>제주도</td>
                <td>39</td>
                <td><input type="button" value="프로필"/></td>
                <td>1</td>
            </tr>

            <c:if test="${ar eq null}">
                <tr>
                    <td colspan="6">검색된 결과가 없습니다.</td>
                </tr>
            </c:if> 
        </tbody>    
        
        {/* <tfoot>
            <tr>
                <td colspan="6">
                    <ol class="paging">
                        
                        <li class="disable">&lt;</li>
                        <li class="now">1</li>
                        <li class="disable">&gt;</li>

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
                                <li class="now">1</li>
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
                        </c:if>-->
                            
                    </ol>

                </td>
            </tr>
        </tfoot> */}
    </table>
</div>
        </div>
    );
}