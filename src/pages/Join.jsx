import Avatar from "@mui/material/Avatar";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SignInput from "../components/SignInput";
import SignAlert from "../components/SignAlert";
import { useEffect, useState } from "react";
import "../firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import md5 from "md5";
import { getDatabase, ref, set } from "firebase/database";
import { useDispatch } from "react-redux";
import { setUser } from "../Redux/modules/userSlice";

const IsPasswordValid = (password, confirmPassword) => {
  if (password.length < 6 || confirmPassword.length < 6) {
    return false;
  }
  if (password !== confirmPassword) {
    return false;
  }
  return true;
};

const Join = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [userInfo, setUserInfo] = useState({
    nickname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoding, setIsLoding] = useState(false);

  const { nickname, email, password, confirmPassword } = userInfo;
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!nickname || !email || !password || !confirmPassword) {
      setError("모든 항목을 입력해주세요.");
      return;
    }
    if (!IsPasswordValid(password, confirmPassword)) {
      setError("비밀번호를 확인하세요.");
      return;
    }
    postUserData(nickname, email, password);
  };

  const postUserData = async (nickname, email, password) => {
    setIsLoding(true);
    try {
      const { user } = await createUserWithEmailAndPassword(
        getAuth(),
        email,
        password
      );
      await updateProfile(user, {
        displayName: nickname,
        photoURL: `https://www.gravatar.com/avatar/${md5(email)}?d=retro`,
      });
      await set(ref(getDatabase(), "users/" + user.uid), {
        nickname: user.displayName,
        avatar: user.photoURL,
      });
      dispatch(setUser(user));
    } catch (e) {
      setIsLoding(false);
      console.log(e);
    }
  };

  useEffect(() => {
    if (!error) return;
    const timer = setTimeout(() => {
      setError("");
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [error]);

  return (
    <Box height="100vh">
      <Box>
        <Avatar sx={{ m: 0, bgcolor: "secondary.main" }}>#</Avatar>
        <h2>회원가입</h2>
      </Box>
      <Box>
        <form onSubmit={onSubmitHandler}>
          <Grid>
            <SignInput
              label="닉네임"
              name="nickname"
              value={userInfo.nickname}
              onChange={onChangeHandler}
              autoFocus
            />
            <SignInput
              label="이메일 주소"
              name="email"
              value={userInfo.email}
              onChange={onChangeHandler}
            />
            <SignInput
              label="비밀번호"
              name="password"
              value={userInfo.password}
              type="password"
              onChange={onChangeHandler}
            />
            <SignInput
              label="비밀번호 확인"
              name="confirmPassword"
              value={userInfo.confirmPassword}
              type="password"
              onChange={onChangeHandler}
            />
          </Grid>
          {error && <SignAlert>{error}</SignAlert>}
          {isLoding ? (
            <StBtn type="button" bc="grey" op="1">
              <LoadingBg>
                <LoadingBody></LoadingBody>
              </LoadingBg>
            </StBtn>
          ) : (
            <StBtn type="submit">
              <span>회원가입</span>
            </StBtn>
          )}
          <Flex>
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                color: "blue",
              }}
            >
              이미 계정이 있나요? 로그인으로 이동
            </Link>
          </Flex>
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
  background-color: ${({ bc }) => (bc ? bc : "#9610ad")};
  opacity: ${({ op }) => (op ? op : "0.8")};
  cursor: pointer;
  :hover {
    opacity: 1;
  }
`;
const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const LoadingBg = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  margin: 0 auto;
  padding: 10px;
`;

const LoadingBody = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 15px;
  height: 15px;
  margin: auto;
  border: 5px solid;
  border-color: rgba(255, 255, 255, 1) rgba(255, 255, 255, 0.3)
    rgba(255, 255, 255, 0.3) rgba(255, 255, 255, 0.3);
  border-radius: 48px;
  animation: circle 1s linear infinite;
  @keyframes circle {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
