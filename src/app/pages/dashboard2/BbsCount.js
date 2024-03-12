import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from '@/component/Title';
import axios from 'axios'; // axios 임포트 추가

function preventDefault(event) {
  event.preventDefault();
}

export default function BbsCount() {
  const [memberCount, setMemberCount] = React.useState(0); // useState를 React.useState로 수정
  const [totalCount, setTotalCount] = React.useState(); // totalCount는 초기값을 지정하지 않음

  // 데이터를 가져오는 함수
  function fetchData() {
    axios.get('/admin/dashboard')
      .then(json => {
        console.log(json);
        setMemberCount(json.data.memberCount);
        setTotalCount(json.data.totalCount);
      })
      .catch(error => {
        console.error('데이터가 조회가 안된다.', error);
      });
  }

  // 컴포넌트가 처음으로 렌더링될 때 데이터를 가져오도록 useEffect 사용
  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <Title>총 게시물 수</Title>
      <Typography component="p" variant="h4">
        {totalCount}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2024
      </Typography>
      <div>
        <Link color="primary" href="/pages/bbs" onClick={preventDefault}>
          게시물 관리 바로가기
        </Link>
      </div>
    </React.Fragment>
  );
}
