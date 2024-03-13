'use client'
/* import React, { useEffect, useState } from "react"; */
import Sidebar from "@/component/Sidebar";
/* import axios from "axios"; */
/* 추가 부분 */
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import * as React from "react";
import axios from "axios";
import { Button, ButtonGroup, Checkbox, Container, Divider, FormControlLabel, IconButton, List, TableFooter, TextField, Toolbar } from "@mui/material";
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
import { useState, useEffect } from 'react';
import Orders from './Orders';
import Footer from '@/component/Footer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { mainListItems, secondaryListItems } from '@/component/ListItems';

/* 모달 */
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const drawerWidth = 240;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          width: theme.spacing(7),
          [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
          },
        }),
      },
    }),
  );

const defaultTheme = createTheme();





/* 1:1 */
export default function InQuery(){
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
      setOpen(!open);
    };

    /* 모달 */
    const [modalopen, setModalOpen] = React.useState(false);
    const handleModalOpen = (idx) => { // 받아서 아래쪽 함수에 저장.
        setModalOpen(true); // 모달 열리는 창.
        setInq_idx(idx); // inq_idx 저장. (아래 함수)
    };

    const handleModalClose = () => setModalOpen(false);

    const modalstyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 630,
        height: 850,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };      


    // 검색용 type, value
    const [type, setType] = useState("");
    const [value, setValue] = useState("");
    const [checked, setChecked] = useState(true);

    // 경로
    //const api_uri = '/admin/inquiry';

    const [ar, setInquList] = useState([]);

    const checkedChange = (event) => {
        setChecked(event.target.checked);
    };

    // 1:1문의 목록
    function InquListData(){
        axios.get(
            `/admin/inquiry` // 경로 
        ).then(json => {
            console.log(json);
            setInquList(json.data.InquList);
        });
    }

    // 검색 부분 함수
  function searchInquiry(){
    console.log(checked);
    console.log("searchInquiry호출");

    axios.get(
        `/admin/searchInquList?type=${type}&value=${value}&checked=${checked}`
    ).then(json =>{
        setInquList(json.data.searchInquList); 
    });
 }

const handleChange = (event) => {
   setType(event.target.value);
};

// 상세 보기 useState
 const [as, setInquselect] = useState({}); // 객체 표시
 const [inq_idx, setInq_idx] = useState("1"); // 처음 값.

    // 상세 보기 함수
 function selectInquList(){
    axios.get(
        `/admin/selectInquList?inq_idx=${inq_idx}`
    ).then(json =>{
        console.log(json);
        console.log(json.data);
        setInquselect(json.data.selectInquList);
    });
 }

// 1:1 문의 답변 하기 useState(운영자)
 const [res, setRes] = useState('');// TextField에 있는 답변을 적은 String을 저장하기 위한 변수.

// TextField에 입력한 값을 상태에 반영하는 함수
 const handleChange2 = (event) => {
    setRes(event.target.value);
  };


  // 업데이트 함수
  const handleUpdate = () => {
    axios.get(`/admin/updateInqu`, {
        params: {
            inq_idx: inq_idx, // 이 값은 업데이트할 문의의 인덱스
            inquiries_res: res, // 답변 내용
          }
    }).then(json => {
        console.log('업데이트 성공');
        console.log(json);
        console.log(json.data.updateInqu);
        setRes(json.data.updateInqu);
        // 업데이트 성공시 수행할 작업
        handleModalClose(); // 모달창 닫기
        InquListData(); // 바로 값 적용 시키기 위해 함수 불러오기.
    });
  };




    // 최초 실행시, 가장 먼저 실행
    useEffect(() => {
        InquListData();
    }, []);

    useEffect(() => {
        selectInquList();
    }, [inq_idx]); // 가장 처음에 한번 불려지고, 클릭 했을때 inq_idx값이 바뀔 때 마다 수행.(누를 때 마다 axios) 

    return(
        <ThemeProvider theme={defaultTheme}>
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            
            <Drawer variant="permanent" open={open}>
            <Toolbar
                sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                px: [1],
                }}
            >
                <IconButton onClick={toggleDrawer}>
                    {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}  
                </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
                {mainListItems}
                <Divider sx={{ my: 1 }} />
                {secondaryListItems}
            </List>
            </Drawer>
            <Box
            component="main"
            sx={{
                backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[900],
                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
            }}
            >
            {/* <Toolbar /> */}
            
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={3}>

                {/* 총 회원 수  */}
                <Grid item xs={12} md={12} lg={12}>
                    <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'row',
                        height: 700,
                    }}
                    >
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
                                    <MenuItem value={'0'}>제목</MenuItem>
                                    <MenuItem value={'1'}>이름</MenuItem>
                                    <MenuItem value={'2'}>답변상태</MenuItem>
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
                                    <Button type="submit" variant="contained" sx={{ mt: 0, mb: 0 }} onClick={searchInquiry}>검색</Button>
                                </Grid>
                                <Grid item xs={4} sm={2}>
                                <FormControlLabel control={
                                        <Checkbox checked={checked} 
                                        onChange={() => setChecked(!checked)}/>} 
                                label="답변한 글 안보기" />
                                </Grid>
                            </Grid>
                        </FormControl>
                        
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 1050 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">번호</TableCell>
                                        <TableCell align="right">제목</TableCell>
                                        <TableCell align="right">회원명</TableCell>
                                        <TableCell align="right">이메일</TableCell>
                                        <TableCell align="right">문의날짜</TableCell>
                                        <TableCell align="right">답변여부</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {ar != null
                                            ?  // 참 조건일 때 => 검색 시 포함된게 있으면 위에조건 */}
                                            ar.map(inquiry => (
                                                <TableRow key={inquiry.inq_idx}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                onClick={() => handleModalOpen(inquiry.inq_idx)}>
                                                    <TableCell component="th" align="center">
                                                        {inquiry.inq_idx}
                                                    </TableCell>
                                                    <TableCell align="right">{inquiry.inquiries_title}</TableCell>
                                                    <TableCell align="right">{inquiry.mem_name}</TableCell>
                                                    <TableCell align="right">{inquiry.mem_email}</TableCell>
                                                    <TableCell align="right">{inquiry.inquiries_date}</TableCell>
                                                    <TableCell align="right">
                                                        {inquiry.inquiries_status == 1 ? "답변 완료" : "답변 대기"}
                                                    </TableCell>                                  
                                                </TableRow>
                                            ))
                                            : // 거짓 조건일 때 => 위에 증발하면서 아래 조건
                                            <TableRow>
                                                <TableCell colSpan={6}>해당결과가 존재하지 않습니다.</TableCell>
                                            </TableRow>
                                    }                 
                                </TableBody>
                                <TableFooter>
                                <TableRow>
                                    <TableCell colSpan={6} sx={{textAlign:'center'}}>
                                        <ButtonGroup variant="text" aria-label="Basic button group">
                                        <Button>&lt;</Button>
                                        <Button variant='contained'>1</Button>
                                        <Button>&gt;</Button>
                                        </ButtonGroup>
                                    </TableCell>
                                </TableRow>
                                
                                </TableFooter>
                            </Table>
                        </TableContainer>
                     
                        
                        </Box>
                    </Paper>
                </Grid>

                {/* Recent Orders */}
                    <Grid item xs={12}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <Orders />
                        </Paper>
                    </Grid>
                </Grid>

                <Footer sx={{ pt: 4 }} />

            </Container>
            </Box>
        </Box>

        {/* 모달 */}
             <Modal
                open={modalopen}
                onClose={handleModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalstyle}>
                    {/* {as.map(inquList => ( */}
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '50ch' },
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center', // 수직으로 배치하도록 설정
                        }}
                        noValidate
                        autoComplete="off"
                        >
                            <TextField
                                required
                                id="outlined-required"
                                label="제목"
                                defaultValue={as.inquiries_title}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="이름"
                                defaultValue={as.mem_name}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="문의 날짜"
                                defaultValue={as.inquiries_date}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                            
                            {/* <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '50ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            > */}
                            <TextField
                                id="outlined-multiline-static"
                                label="질문내용"
                                multiline
                                rows={8}
                                defaultValue={as.inquiries_content}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                            <Divider sx={{ width: '100%' }}/>
                            <TextField
                                id="outlined-multiline-static"
                                label="답변작성"
                                multiline
                                rows={8}
                                defaultValue=""
                                onChange={handleChange2}
                            />
                            {/* </Box> */}
                            <br/>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    maxWidth: '200px', // 적당한 너비 조절
                                    '& button': { m: 1 }
                                }}
                            >
                                <Button variant="contained" size="medium" onClick={handleUpdate}>
                                    답변하기
                                </Button>
                                <Button variant="contained" color="error" size="medium">
                                    취소
                                </Button>
                            </Box>
                        </Box>
                    {/*  ))} */}
                </Box>
            </Modal>
        </ThemeProvider>
    );
}