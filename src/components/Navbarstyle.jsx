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
  cursor: pointer;
  font-weight: 500;
  font-size: 24px;
  line-height: 160%;
  border-bottom: 1px solid white;
  margin: 10px 70px;
  > b {
    cursor: pointer;
    margin-left: 23%;
    :hover {
      color: red;
    }
  }
`;
export const TopTwo = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 10px;

  > h3 {
    margin: 0 80px;
    cursor: pointer;
    font-size: 40px;
    :hover {
      color: red;
    }
  }
  > b {
    :hover {
      color: red;
    }
  }
`;

export const TopThree = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 500px;
  margin-top: 33%;
  margin-left: 23%;
  line-height: 0px;
  > h2 {
    text-align: center;
    width: 400px;
    font-size: 50px;
    cursor: pointer;
    line-height: 40px;
    :hover {
      color: red;
    }
  }
  > button {
    background-color: #7373d7;
    border-radius: 28px;
    width: 100px;
    height: 40px;
    color: white;
    transition: ease-in;
    cursor: pointer;
    :hover {
      color: red;
    }
  }
`;
