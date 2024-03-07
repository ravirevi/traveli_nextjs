'use client'
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from '@/component/Sidebar';
import axios from "axios";

export default function Main(){

    // 라우터 생성
    //const router = useRouter();

    // 경로
    const api_uri = '/admin/member';

    const [ar, setMemberList] = useState([]); /* 반복문 굴릴 때 ar로 굴리기 위해 이름 이렇게 함. */
    //const [searchResult, setSearchResult] = useState([]);

    // 회원 목록
    function memListData(){
        axios.get(
            api_uri
        ).then(json => {
            console.log(json);
            setMemberList(json.data.memberList); // 여기서 추가되면 위에 저장됨.
        });
    }

    // 검색 부분 함수
    function SearchMember(){
        const type = document.getElementById('type').value; // type
        const value = document.getElementById('value').value; // value

        axios.get(
            "/admin/searchMember?type="+type+"&value="+value,
        ).then(json =>{
            console.log(json);
            console.log(json.data);
            // java로 따지면 setter라 생각하는게 편함 (여기다가 저장)
            setMemberList(json.data.searchMemList); // backend에서 key값으로 이름 정한거 반드시 지킬것.
            
        });
    }

    /* const list = (exam => {

    }) */

    // 생성 시, 가장 먼저 실행되는 부분
    useEffect(() => {
        memListData();
    }, []);

    return(
    <div className="Member_content">
      <Sidebar />
        <div>
            <select name="type" id="type">
                <option value="0">이메일</option>
                <option value="1">이름</option>
                <option value="2">닉네임</option>
            </select>
                <input type="text" name="value" id="value" placeholder="검색어 입력"/> 
                <input type="button" id="btn_1" value="검색" onClick={SearchMember}/>  
            <hr/>
            <table id="admin_member_table">
                <caption>회원목록 테이블</caption> 
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
                {ar != null
                        ?  // 참 조건일 때 => 검색 시 포함된게 있으면 위에조건
                        ar.map(member => (
                            <tr key={member.mem_idx}>
                                <td>{member.mem_idx}</td>
                                <td>{member.mem_name}</td>
                                <td>{member.mem_email}</td>
                                <td>{member.mem_nickname}</td>
                                <td>{member.mem_reg_date}</td>
                                <td>{member.mem_status}</td>
                            </tr>
                        ))
                        : // 거짓 조건일 때 => 위에 증발하면서 아래 조건
                        <tr>
                            <td colSpan={6}>해당결과가 존재하지 않습니다.</td>
                        </tr>
                    }
            {/*  <c:forEach var="vo" items="${ar}"> */}
            
            {/* </c:forEach> */}
                </tbody>
                {/* <tfoot>
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
        </div>
    </div>
        
    );
}