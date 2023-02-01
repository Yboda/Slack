import styled from "styled-components";

const Icon = ({ children, ...props }) => {
  return <StDiv {...props}>{children}</StDiv>;
};

export default Icon;

const StDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #9610ad;
  /* height: ${({ height }) => (height ? height : "")}; */
`;
