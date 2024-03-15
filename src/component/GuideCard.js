import React from "react";
import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, IconButton, Stack, Typography } from "@mui/material";
import { blue, purple, red, yellow } from "@mui/material/colors";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import Title from "@/component/Title";

export default function GuideCard({props}){

    const [guide, setGuide] = useState({});
    // axios 로 가이드신청 데이터 받아오기

    const [cardsVisibility, setCardsVisibility] = useState({
        card1: true,
        card2: true,
        card3: true,
        card4: true
    });

    const handleApprove = (card) => {
        setCardsVisibility(prevState => ({
            ...prevState,
            [card]: false
        }));

        window.alert("가이드 승인 성공")
    };

    const handleReject = (card) => {        
        const confirmation = window.confirm("정말 반려하시겠습니까?");
            if (confirmation) {
                setCardsVisibility(prevState => ({
                    ...prevState,
                    [card]: false
                })
            );
        }
    };

    const allCardsHidden = !Object.values(cardsVisibility).some(visible => visible);

    return(
    <React.Fragment>
        <Title>가이드 신청</Title>
        <Stack spacing={2} direction="row">  
        {allCardsHidden ? (
                    <Typography variant="h5" component="div" align="center">
                        가이드 신청 현황이 없습니다.
                    </Typography>
                ) : (
                    <>      
            <Box>
            {cardsVisibility.card1 && (
                <Card sx={{maxWidth: 310}}>
                    <CardHeader avatar={
                        <Avatar sx={{bgcolor:blue[700]}}>힝</Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title="제주 택시경력30년"
                        subheader="on 15 March, 2024"
                    />
                    <CardMedia component="img" height='200'
                        image="https://lh3.googleusercontent.com/proxy/064Ze9IgvFmQmnoo91-EhyIc1waAh1inf44gqKqtxF5qJS2I76dpdNs6ZBqims1r5QZ482ucWyIGS7xL5VY"
                        alt="unsplash image"/>
                    <CardContent>
                        <Typography variant="h5" component='div'>
                            제주 택시경력30년
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            [제주도]
                        </Typography>
                        <Typography variant="body2">
                         공항에서 성산일출봉까지 30분컷
                         <br />
                         잊지못할 추억을 선사드립니다.
                          
                        </Typography>

                        <CardActions sx={{ justifyContent: 'center', textAlign: 'center', pt:2 }}>
                            <Button variant="outlined" color="success" onClick={() => handleApprove("card1")}>승인</Button>
                            <Button variant="outlined" color="error" onClick={() => handleReject("card1")}>반려</Button>                           
                        </CardActions>
                    </CardContent>
                </Card>
            )}
            </Box>
            <Box>
            {cardsVisibility.card2 && (
            <Card sx={{maxWidth: 310}}>
                    <CardHeader avatar={
                        <Avatar sx={{bgcolor:purple[800]}}>H</Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title="해외가이드 경력有"
                        subheader="on 14 March, 2024"
                    />
                    <CardMedia component="img" height='200'
                        image="https://heraldk.com/wp-content/uploads/2015/05/%EA%B0%80%EC%9D%B4%EB%93%9C.jpg"
                        alt="unsplash image"/>
                    <CardContent>
                        <Typography variant="h5" component='div'>
                            해외가이드 경력有
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            [제주도, 여수, 목포]
                        </Typography>
                        <Typography variant="body2">
                         well meaning and kindly.<br />
                         a benevolent smile :)
                         <br />
                         {'"No Tip & No Shopping"'}
                        </Typography>
                        <CardActions sx={{ justifyContent: 'center', textAlign: 'center', pt:2 }}>
                            <Button variant="outlined" color="success" onClick={() => handleApprove("card2")}>승인</Button>
                            <Button variant="outlined" color="error" onClick={() => handleReject("card2")}>반려</Button>                           
                        </CardActions>
                    </CardContent>
                </Card>
            )}
            </Box>
            <Box>
            {cardsVisibility.card3 && (
            <Card sx={{maxWidth: 310}}>
                    <CardHeader avatar={
                        <Avatar sx={{bgcolor:yellow[700]}}>백</Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title="제주 현지가이드"
                        subheader="on 14 March, 2024"
                    />
                    <CardMedia component="img" height='200'
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROgvUy5unqioxuySEuG3l7IZiOWwo6mbvBKw&usqp=CAU"
                        alt="unsplash image"/>
                    <CardContent>
                        <Typography variant="h5" component='div'>
                              제주 현지가이드
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            [제주도]
                        </Typography>
                        <Typography variant="body2">
                         현지인만 알고있는 찐맛집 공유 <br/>
                         운전경력 10년<br/> 8인승 승합차 24시간 대기중                         
                        </Typography>

                        <CardActions sx={{ justifyContent: 'center', textAlign: 'center', pt:2 }}>
                            <Button variant="outlined" color="success" onClick={() => handleApprove("card3")}>승인</Button>
                            <Button variant="outlined" color="error" onClick={() => handleReject("card3")}>반려</Button>                           
                        </CardActions>
                    </CardContent>
                </Card>
            )}
            </Box>
            <Box>
            {cardsVisibility.card4 && (
            <Card sx={{maxWidth: 310}}>
                    <CardHeader avatar={
                        <Avatar sx={{bgcolor:red[500]}}>권</Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title="가이드 신청합니다"
                        subheader="on 13 March, 2024"
                    />
                    <CardMedia component="img" height='200'
                        image="http://source.unsplash.com/random"
                        alt="unsplash image"/>
                    <CardContent>
                        <Typography variant="h5" component='div'>
                            가이드 신청합니다.
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            [서울, 경주]
                        </Typography>
                        <Typography variant="body2">
                        상경하여 7년째 서울 거주중인
                         <br />
                         경주사람
                        </Typography>

                        <CardActions sx={{ justifyContent: 'center', textAlign: 'center', pt:2 }}>
                            <Button variant="outlined" color="success" onClick={() => handleApprove("card4")}>승인</Button>
                            <Button variant="outlined" color="error" onClick={() => handleReject("card4")}>반려</Button>                           
                        </CardActions>
                    </CardContent>
                </Card>
                )}
            </Box>
            </>    
         )}
        </Stack>
    </React.Fragment>
    );
}
