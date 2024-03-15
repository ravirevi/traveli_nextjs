'use client'
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
import Title from '@/component/Title';


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

export default function Member() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const [type, setType] = useState("");
  const [value, setValue] = useState("");
  const [checked, setChecked] = useState(true);

  // 경로
  const api_uri = '/admin/member';

  const [ar, setMemberList] = useState([]); /* 반복문 굴릴 때 ar로 굴리기 위해 이름 이렇게 함. */
  //const [searchResult, setSearchResult] = useState([]);

  const checkedChange = (event) => {
      setChecked(event.target.checked);
  };

  // 회원 목록
  function memListData(){
      axios.get(api_uri).then(json => {
          console.log("memListData함수호출");
          setMemberList(json.data.memberList);
      });
  }

  // 검색 부분 함수
  function SearchMember(){
      console.log(checked);
      console.log("SearchMember함수호출");

      axios.get(
          `/admin/searchMember?type=${type}&value=${value}&checked=${checked}`
      ).then(json =>{
          setMemberList(json.data.searchMemList); 
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

  useEffect(() => {
      memListData();
  }, []);



  return (
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
              <Grid item xs={12} md={12} lg={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 700,
                  }}
                >
                  <Title>회원 검색</Title>
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
                            <Grid item xs={1} sm={1}>
                                <Button type="submit" variant="contained" sx={{ mt: 0, mb: 0 }} onClick={SearchMember}>검색</Button>
                            </Grid>
                            <Grid item xs={4} sm={3}>
                              <FormControlLabel control={
                                    <Checkbox checked={checked} 
                                    onChange={() => setChecked(!checked)}/>} 
                              label="삭제된 회원 포함" />
                            </Grid>
                        </Grid>
                    </FormControl>
                    
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 1050 }} aria-label="simple table">
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
    </ThemeProvider>
  );
}
