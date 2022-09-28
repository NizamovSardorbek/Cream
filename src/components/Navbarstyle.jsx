import styled from "styled-components";
import Girl from "./assets/back.png";

export const ContainBack = styled.div`
  margin-left: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
  align-items: center;
  width: 80%;
  height: 800px;
`;
export const Back = styled.div`
  width: 70%;
  height: 700px;
  background-image: url(${Girl});
  background-size: cover;
`;
export const Top = styled.div`
  color: white;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 160%;
  border-bottom: 1px solid white;
  margin: 10px 70px;
  > b {
    margin-left: 23%;
  }
`;
export const TopTwo = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  > h3 {
    margin: 0 80px;
    font-size: 40px;
  }
 
`;
