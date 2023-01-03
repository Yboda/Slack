import Avatar from "@mui/material/Avatar";
import Alert from "@mui/material/Alert";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SignInput from "../components/SignInput";

const Join = () => {
  const handleSubmit = () => {};
  return (
    <Box height="100vh">
      <Box>
        <Avatar sx={{ m: 0, bgcolor: "secondary.main" }}>#</Avatar>
        <h2>회원가입</h2>
      </Box>
      <Box>
        <form onSubmit={handleSubmit}>
          <Grid>
            <SignInput label="닉네임" name="name" autoFocus />
            <SignInput label="이메일 주소" name="email" />
            <SignInput label="비밀번호" name="password" />
            <SignInput label="비밀번호 확인" name="confirmPassword" />
          </Grid>
          <Alert severity="error">에러메세지</Alert>
          <StBtn type="submit">
            <span>회원가입</span>
          </StBtn>
          <Link
            to="/login"
            style={{
              textDecoration: "none",
              color: "blue",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            이미 계정이 있나요? 로그인으로 이동
          </Link>
        </form>
      </Box>
    </Box>
  );
};

export default Join;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: ${({ height }) => (height ? height : "")};
`;

const Grid = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 10px;
  justify-content: ${({ jc }) => (jc ? jc : "center")}; ;
`;

const StBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  margin: 15px 0;
  border: 0;
  border-radius: 5px;
  color: #fff;
  background-color: #9c27b0;
  :hover {
    background-color: #751e85;
  }
`;
const StSpan = styled.span``;
