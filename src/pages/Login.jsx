import { Icon } from "@mui/material";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Loading from "../components/Loading";
import SignAlert from "../components/SignAlert";
import SignInput from "../components/SignInput";
import Flex from "../elements/Flex";
import { useInput } from "../hooks/useInput";
import { setUser } from "../Redux/modules/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePW] = useInput("");

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const loginHandler = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("모든 항목을 입력해주세요");
    }
    loginUser(email, password);
  };

  const loginUser = async (email, password) => {
    setIsLoading(true);
    try {
      const { user } = await signInWithEmailAndPassword(
        getAuth(),
        email,
        password
      );
      dispatch(setUser(user));
    } catch (err) {
      console.log(err);
      setError(err.message);
      setIsLoading(false);
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
    <Flex height="100vh">
      <Flex>
        <Icon>#</Icon>
        <h2>로그인</h2>
      </Flex>
      <Flex>
        <form onSubmit={loginHandler}>
          <Grid>
            <SignInput
              label="이메일 주소"
              name="email"
              value={email}
              onChange={onChangeEmail}
            />
            <SignInput
              label="비밀번호"
              name="password"
              value={password}
              type="password"
              onChange={onChangePW}
            />
          </Grid>
          {error && <SignAlert>{error}</SignAlert>}
          {isLoading ? (
            <StBtn type="button" bc="grey" op="1">
              <Loading />
            </StBtn>
          ) : (
            <StBtn type="submit">
              <span>로그인</span>
            </StBtn>
          )}
          <Flex>
            <Link
              to="/join"
              style={{
                textDecoration: "none",
                color: "blue",
              }}
            >
              계정이 없나요? 회원가입으로 이동
            </Link>
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
};

export default Login;

const Grid = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
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
