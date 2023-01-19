import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Header = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <Container>
      <ContentsWrap>
        <Content ml="10px">
          <div>#</div>
          <span>SLACK</span>
        </Content>
        <Content mr="10px" fs="15px">
          {/* <span>{user.currentUser?.displayName}</span> */}
          <span>1234</span>
          <ProfileImg />
        </Content>
      </ContentsWrap>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: fixed;
  top: 0;
  z-index: 5;
  color: #9a939b;
  background-color: #350d36;
  width: 100vw;
  height: 40px;
`;

const ContentsWrap = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
`;

const Content = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: ${({ ml }) => (ml ? ml : "")};
  margin-right: ${({ mr }) => (mr ? mr : "")};
  font-size: ${({ fs }) => (fs ? fs : "")};
`;

const ProfileImg = styled.div`
  margin-left: 5px;
  width: 30px;
  height: 30px;
  background-image: ${(props) => props.bg};
  background-color: aqua;
  border-radius: 30px;
`;
