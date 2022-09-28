import styled from "styled-components";

export const IconsWrap = styled.div`
  margin-left: 10%;
  display: flex;
  border: 1px solid red;
  width: 80%;
  height: 450px;
  line-height: 15px;
  h3 {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    :hover {
      color: red;
      cursor: pointer;
    }
  }
  h1 {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    color: #7373d7;
    word-spacing: 10px;
    :hover {
      color: red;
      cursor: pointer;
    }
  }
  h2 {
    display: flex;
    word-spacing: 10px;
    text-align: center;
    justify-content: center;
    align-items: center;
    :hover {
      color: red;
      cursor: pointer;
    }
  }
`;

export const IconWrapper = styled.div`
  width: 70%;
  margin-left: 15%;
`;
export const IconContain = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  align-items: center;
  margin-top: 20px;
  p {
    text-align: center;
    line-height: 20px;
  }
`;
export const Beauty1 = styled.img`
  cursor: pointer;
  width: 100px;
`;
export const CreamWrapper = styled.div`
  display: flex;
  gap: 40px;
`;
