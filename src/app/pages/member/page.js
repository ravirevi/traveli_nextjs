'use client'
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from '@/component/Sidebar';
import axios from "axios";
import { Button, Checkbox, FormControlLabel, Grid, TextField } from "@mui/material";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Main(){

    // 라우터 생성
    //const router = useRouter();

    const [type, setType] = useState("");
    const [value, setValue] = useState("");
    const [checked, setChecked] = useState(true);

    // 경로
    const api_uri = '/admin/member';

    const [ar, setMemberList] = useState([]); /* 반복문 굴릴 때 ar로 굴리기 위해 이름 이렇게 함. */
    //const [searchResult, setSearchResult] = useState([]);

    const checkedChange = (event) => {
        setChecked(event.target.checked);

       // SearchMember();
    };

    // 회원 목록
    function memListData(){
        axios.get(api_uri).then(json => {
            console.log("memListData함수호출");
            setMemberList(json.data.memberList); // 여기서 추가되면 위에 저장됨.
        });
    }

    // 검색 부분 함수
    function SearchMember(){
        /* const type = document.getElementById('type').value; // type
        const value = document.getElementById('value').value; // value
 */
        console.log(checked);
        console.log("SearchMember함수호출");

        axios.get(
            `/admin/searchMember?type=${type}&value=${value}&checked=${checked}`
        ).then(json =>{
            //console.log(json.data);
            // java로 따지면 setter라 생각하는게 편함 (여기다가 저장)
            setMemberList(json.data.searchMemList); 
            // backend에서 key값으로 이름 정한거 반드시 지킬것.            
        });
    }

    function delMember(idx){
        const confirmed = window.confirm("정말 삭제하시겠습니까?");
        if (confirmed) {
            axios.get(
                `/admin/delMember?mem_idx=${idx}`
            ).then(json => {
                console.log(json);
                memListData(); 
            });
        }
    }

    function restoreMember(idx){
        const confirmed = window.confirm("삭제된 회원을 복구하시겠습니까?");
        if (confirmed) {
            axios.get(
               `/admin/restoreMember?mem_idx=${idx}`
            ).then(json => {
                console.log(json);
                memListData(); 
            });
        }
    }

    const handleChange = (event) => {
        setType(event.target.value);
      };

    // 생성 시, 가장 먼저 실행되는 부분
    useEffect(() => {
        memListData();
    }, []);

    /* useEffect(() => {
        if (checked) { // checked 상태가 true 일 때만 실행
            SearchMember();
        }
    }, [checked]);  // checked 상태가 변경되었을 때만 검색 실행
    */

    return(
    <div className="Member_content">
      <Sidebar />
        <Box sx={{ margin: '30px'}}>
        <FormControl fullWidth>
            <Grid container spacing={2} sx={{mb: '20px'}} alignItems="center">
                <Grid item xs={3} sm={2}>
                    <InputLabel id="demo-simple-select-autowidth-label">검색유형</InputLabel>
                    <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth-label"
                    value={type}
                    label="검색유형"
                    onChange={handleChange}
                    sx={{ width: '100%' }}
                    >
                    <MenuItem value={'0'}>이메일</MenuItem>
                    <MenuItem value={'1'}>이름</MenuItem>
                    <MenuItem value={'2'}>닉네임</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={4} sm={6}>
                    <TextField label="검색어를 입력하세요." 
                    type="text" 
                    name="value"
                    value={value} 
                    onChange={(e) => setValue(e.target.value)}
                    sx={{ width: '100%' }}
                    />
                </Grid>
                <Grid item xs={1} sm={2}>
                    <Button type="submit" variant="contained" sx={{ mt: 0, mb: 0 }} onClick={SearchMember}>검색</Button>
                </Grid>
                <Grid item xs={4} sm={2}>
                   <FormControlLabel control={
                        <Checkbox checked={checked} 
                        onChange={() => setChecked(!checked)}/>} 
                   label="삭제된 회원 포함" />
                </Grid>
            </Grid>
        </FormControl>
        
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 1200 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">회원번호</TableCell>
                        <TableCell align="right">이름</TableCell>
                        <TableCell align="right">이메일</TableCell>
                        <TableCell align="right">닉네임</TableCell>
                        <TableCell align="right">가입일</TableCell>
                        <TableCell align="right">삭제여부</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {ar != null
                            ?  // 참 조건일 때 => 검색 시 포함된게 있으면 위에조건
                            ar.map(member => (
                                <TableRow key={member.mem_idx}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" align="center">
                                        {member.mem_idx}
                                    </TableCell>
                                    <TableCell align="right">{member.mem_name}</TableCell>
                                    <TableCell align="right">{member.mem_email}</TableCell>
                                    <TableCell align="right">{member.mem_nickname}</TableCell>
                                    <TableCell align="right">{member.mem_reg_date}</TableCell>
                                    <TableCell align="right">{member.mem_status==='0'? <Button variant="outlined" color="error" onClick={() => delMember(member.mem_idx)}>삭제</Button>
                                                : <Button variant="outlined" color="primary" onClick={() => restoreMember(member.mem_idx)}>복구</Button>}
                                    </TableCell>                                    
                                </TableRow>
                            ))
                            : // 거짓 조건일 때 => 위에 증발하면서 아래 조건
                            <TableRow>
                                <TableCell colSpan={6}>해당결과가 존재하지 않습니다.</TableCell>
                            </TableRow>
                    }                
                </TableBody>
            </Table>
        </TableContainer>
        </Box>
    </div>
    );
        {/* <div>
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
                                <td>{member.mem_status==='0'? <button type="button" onClick={() => delMember(member.mem_idx)}>삭제</button>:<button type="button">복구</button>}</td>
                            </tr>
                        ))
                        : // 거짓 조건일 때 => 위에 증발하면서 아래 조건
                        <tr>
                            <td colSpan={6}>해당결과가 존재하지 않습니다.</td>
                        </tr>
                    }
                </tbody>
                
            </table>
        </div> */}    
}