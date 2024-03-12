'use client'
import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from '@/component/Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>누적 결제금액<br/>(양도&가이드)</Title>
      <Typography component="p" variant="h4">
        3,024,000 ₩
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
          on 15 March, 2024
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          상세보기 / 레포트 바로가기
        </Link>
      </div>
    </React.Fragment>
  );
}