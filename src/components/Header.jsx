import { getAuth, signOut } from "firebase/auth";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Header = () => {
  const user = useSelector((state) => state.user);
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = () => {
    setIsOpen(!isOpen);
  };

  const logoutHandler = async () => {
    await signOut(getAuth());
  };

  console.log(user);

  return (
    <Container>
      <ContentsWrap>
        <Content ml="10px">
          <div>#</div>
          <span>SLACK</span>
        </Content>
        <Content mr="10px" fs="16px" onClick={openHandler}>
          <span>{user.currentUser?.displayName}</span>
          <ProfileImg src={user.currentUser?.photoURL} />
        </Content>
      </ContentsWrap>
      {isOpen && (
        <Dropdown>
          <Dropmenu>프로필 이미지</Dropmenu>
          <Dropmenu onClick={logoutHandler}>Logout</Dropmenu>
        </Dropdown>
      )}
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
  height: 50px;
`;

const ContentsWrap = styled.div`
  padding: 0 15px;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
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
  cursor: pointer;
`;

const ProfileImg = styled.img`
  margin-left: 5px;
  width: 30px;
  height: 30px;
  border-radius: 30px;
`;

const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 43px;
  right: 10px;
  border-radius: 3px;
  font-size: 12px;
  color: #272727;
  background-color: #fff;
  width: 100px;
  height: 60px;
  box-shadow: 0px 0px 3px 0px gray;
`;

const Dropmenu = styled.div`
  width: 100%;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: #e2e1e1;
  }
`;
