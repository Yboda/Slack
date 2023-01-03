import styled from "styled-components";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";

const SignAlert = ({ children }) => {
  return (
    <StContainer>
      <WarningAmberOutlinedIcon style={{ margin: "0 10px" }} />
      {children}
    </StContainer>
  );
};

export default SignAlert;

const StContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  padding: 10px 5px;
  border-radius: 5px;
  font-size: 14px;
  color: #5f2120;
  background-color: #fdeded;
`;
