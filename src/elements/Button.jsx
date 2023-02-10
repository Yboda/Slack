import styled, { css } from "styled-components";

const Button = ({ children, ...props }) => {
  return <StBtn {...props}>{children}</StBtn>;
};

export default Button;

const StBtn = styled.button`
  cursor: pointer;
  border: 0px;
  border-radius: 5px;
  background-color: transparent;
  color: 
  transition: 0.3s;
  width: 50px;
  height: 35px;
  :hover {
    background-color: #e2e1e1;
  }
  ${({ variant }) => {
    switch (variant) {
      case "medium":
        return css`
          width: 100px;
          height: 50px;
          font-size: 16px;
        `;
      default:
        break;
    }
  }}
`;
