import styled from "styled-components";

const Flex = ({ children, ...props }) => {
  return <StDiv {...props}>{children}</StDiv>;
};

export default Flex;

const StDiv = styled.div`
  display: flex;
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  align-items: ${({ ai }) => (ai ? ai : "center")};
  justify-content: ${({ jc }) => (jc ? jc : "center")};
  width: ${({ width }) => (width ? width : "")};
  height: ${({ height }) => (height ? height : "")};
  margin: ${({ mg }) => (mg ? mg : "")};
  padding: ${({ pd }) => (pd ? pd : "")};
`;
