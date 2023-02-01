import { useState } from "react";
import styled from "styled-components";

const SignInput = ({ label, value, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const onFocusHandler = () => {
    setIsFocused(!isFocused);
  };
  return (
    <Container bc={isFocused && "#9c27b0"} bw={isFocused && "2px"}>
      <StInput
        {...props}
        value={value}
        onFocus={onFocusHandler}
        onBlur={onFocusHandler}
      />
      <Label dp={isFocused || value ? "block" : null}>
        <span style={{ color: "#fff" }}>{label}</span>
      </Label>
      <StSpan
        top={isFocused || value ? "-7px" : null}
        fs={isFocused || value ? "12px" : null}
        color={isFocused ? "#9c27b0" : null}
      >
        {label}
      </StSpan>
    </Container>
  );
};

export default SignInput;

const Container = styled.div`
  position: relative;
  width: 400px;
  height: 55px;
  padding: 5px 10px;
  border: 1px solid #c4c4c4;
  border-color: ${({ bc }) => bc};
  border-width: ${({ bw }) => bw};
  border-radius: 5px;
`;

const StInput = styled.input`
  width: 100%;
  height: 100%;
  border: 0;
  outline: none;
  ::placeholder {
    font-size: 16px;
  }
`;

const Label = styled.div`
  display: ${({ dp }) => (dp ? dp : "none")};
  height: 10px;
  position: absolute;
  top: -7px;
  left: 13px;
  padding: 0 3px;
  font-size: 12px;
  background-color: #fff;
  pointer-events: none;
`;

const StSpan = styled.span`
  position: absolute;
  top: ${({ top }) => (top ? top : "16px")};
  left: 13px;
  padding: 0 3px;
  font-size: ${({ fs }) => (fs ? fs : "16px")};
  color: ${({ color }) => (color ? color : "#707070")};
  font-weight: 300;
  pointer-events: none;
  transition: 0.2s;
`;
