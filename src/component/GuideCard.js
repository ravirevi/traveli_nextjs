import React from "react";
import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Stack, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ExpandMore } from "@mui/icons-material";
import { useState } from "react";

export default function GuideCard({props}){

    const [guide, setGuide] = useState({});
    // axios 로 가이드신청 데이터 받아오기

    return(
        <Stack spacing={2} direction="row">            
            <Box>
            <Card sx={{maxWidth: 310}}>
                    <CardHeader avatar={
                        <Avatar sx={{bgcolor:red[500]}}>관</Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title="가이드 신청합니다"
                        subheader="on 15 March, 2024"
                    />
                    <CardMedia component="img" height='200'
                        image="http://source.unsplash.com/random"
                        alt="unsplash image"/>
                    <CardContent>
                        <Typography variant="h5" component='div'>
                            가이드 신청합니다.
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            on 15 March, 2024
                        </Typography>
                        <Typography variant="body2">
                         well meaning and kindly.
                         <br />
                         {'"a benevolent smile"'}
                        </Typography>

                        <CardActions>
                            <Button variant="outlined" color="success" onClick={() => {}}>승인</Button>
                            <Button variant="outlined" color="error" onClick={() => {}}>반려</Button>                           
                        </CardActions>
                    </CardContent>
                </Card>
            </Box>
            <Box>
            <Card sx={{maxWidth: 310}}>
                    <CardHeader avatar={
                        <Avatar sx={{bgcolor:red[500]}}>관</Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title="가이드 신청합니다"
                        subheader="on 15 March, 2024"
                    />
                    <CardMedia component="img" height='200'
                        image="http://source.unsplash.com/random"
                        alt="unsplash image"/>
                    <CardContent>
                        <Typography variant="h5" component='div'>
                            가이드 신청합니다.
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            on 15 March, 2024
                        </Typography>
                        <Typography variant="body2">
                         well meaning and kindly.
                         <br />
                         {'"a benevolent smile"'}
                        </Typography>

                        <CardActions>
                            <Button variant="outlined" color="success" onClick={() => {}}>승인</Button>
                            <Button variant="outlined" color="error" onClick={() => {}}>반려</Button>                           
                        </CardActions>
                    </CardContent>
                </Card>
            </Box>
            <Box>
            <Card sx={{maxWidth: 310}}>
                    <CardHeader avatar={
                        <Avatar sx={{bgcolor:red[500]}}>관</Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title="가이드 신청합니다"
                        subheader="on 15 March, 2024"
                    />
                    <CardMedia component="img" height='200'
                        image="http://source.unsplash.com/random"
                        alt="unsplash image"/>
                    <CardContent>
                        <Typography variant="h5" component='div'>
                            가이드 신청합니다.
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            on 15 March, 2024
                        </Typography>
                        <Typography variant="body2">
                         well meaning and kindly.
                         <br />
                         {'"a benevolent smile"'}
                        </Typography>

                        <CardActions>
                            <Button variant="outlined" color="success" onClick={() => {}}>승인</Button>
                            <Button variant="outlined" color="error" onClick={() => {}}>반려</Button>                           
                        </CardActions>
                    </CardContent>
                </Card>
            </Box>
            <Box>
            <Card sx={{maxWidth: 310}}>
                    <CardHeader avatar={
                        <Avatar sx={{bgcolor:red[500]}}>관</Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title="가이드 신청합니다"
                        subheader="on 15 March, 2024"
                    />
                    <CardMedia component="img" height='200'
                        image="http://source.unsplash.com/random"
                        alt="unsplash image"/>
                    <CardContent>
                        <Typography variant="h5" component='div'>
                            가이드 신청합니다.
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            on 15 March, 2024
                        </Typography>
                        <Typography variant="body2">
                         well meaning and kindly.
                         <br />
                         {'"a benevolent smile"'}
                        </Typography>

                        <CardActions>
                            <Button variant="outlined" color="success" onClick={() => {}}>승인</Button>
                            <Button variant="outlined" color="error" onClick={() => {}}>반려</Button>                           
                        </CardActions>
                    </CardContent>
                </Card>
            </Box>
            
        </Stack>
    );
}
