import styled from "styled-components";

const Loading = () => {
  return (
    <LoadingBg>
      <LoadingBody></LoadingBody>
    </LoadingBg>
  );
};

export default Loading;

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
