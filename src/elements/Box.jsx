import React from "react";
import styled from "styled-components";

const Box = ({ children, ...props }) => {
  return <StDiv {...props}>{children}</StDiv>;
};

export default Box;

const StDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: ${({ height }) => (height ? height : "")};
`;
