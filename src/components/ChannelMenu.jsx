import styled from "styled-components";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import AddIcon from "@mui/icons-material/Add";
import { Button, Flex, Margin } from "../elements";
import { useState } from "react";
import SignInput from "./SignInput";

const ChannelMenu = () => {
  const [channelList, setChannelList] = useState(false);
  const [addModal, setAddModal] = useState(false);

  return (
    <>
      <Container>
        <Flex
          width="100%"
          fd="row"
          ai="flex-start"
          jc="space-between"
          pd="10px"
        >
          <Flex fd="row">
            {channelList ? (
              <IconBox>
                <ArrowDropDownIcon
                  sx={{ fontSize: 22 }}
                  onClick={() => setChannelList(!channelList)}
                />
              </IconBox>
            ) : (
              <IconBox>
                <ArrowRightIcon
                  sx={{ fontSize: 22 }}
                  onClick={() => setChannelList(!channelList)}
                />
              </IconBox>
            )}

            <Margin mg="5px" />
            <span>채널</span>
          </Flex>
          <IconBox>
            <AddIcon
              sx={{ fontSize: 22 }}
              onClick={() => {
                setAddModal(true);
              }}
            />
          </IconBox>
        </Flex>
        {channelList && (
          <>
            <Channel>
              <IconBox bc="transparents" mr="8px">
                #
              </IconBox>
              채널1
            </Channel>
            <Channel>
              <IconBox bc="transparents" mr="8px">
                #
              </IconBox>
              채널2
            </Channel>
          </>
        )}
      </Container>
      {addModal && (
        <>
          <Background>
            <Modal>
              <h2>채널 추가</h2>
              <span>생성할 채널명과 설명을 입력해주세요.</span>
              <StInput></StInput>
              <Flex fd="row" jc="flex-end">
                <Button onClick={() => setAddModal(false)}>취소</Button>
                <Button onClick={() => setAddModal(false)}>생성</Button>
              </Flex>
            </Modal>
          </Background>
        </>
      )}
    </>
  );
};

export default ChannelMenu;

const Container = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 240px;
  height: calc(100vh - 50px);
  background-color: #3f0e40;
  color: #ab96ac;
  font-size: 15px;
  font-weight: bold;
  box-shadow: 0 0.5px #ddd;
`;
const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: 5px;
  margin-right: ${({ mr }) => (mr ? mr : "")};
  background-color: ${({ bc }) => (bc ? bc : "#3f0e40")};
  font-size: 20px;
  cursor: pointer;
  :hover {
    background-color: #350d36;
  }
`;

const Channel = styled.span`
  padding-left: 10px;
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  font-weight: 400;
  cursor: pointer;
  :hover {
    background-color: #350d36;
  }
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #1d1d1d;
  z-index: 10;
  opacity: 0.7;
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: 0 15px 15px;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 250px;
  color: #000;
  background-color: #fff;
  z-index: 11;
  opacity: 1;
  box-shadow: 1px 1px 3px 1px #000;
  border-radius: 4px;
`;

const StInput = styled.input`
  border: 0;
  border-bottom: 1px solid #6f8bb7;
`;
