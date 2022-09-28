import styled from "styled-components";

export const Container = styled.div`
  margin-left: 10%;
  display: flex;
  border: 1px solid red;
  width: 80%;
  height: 520px;
`;
export const CreamWrap = styled.div`
  width: 70%;
  height: 430px;
  margin-left: 15%;
`;
export const TopCream = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  > h2 {
    margin-right: auto;
    margin-left: 20px;
  }
  > p {
    color: #222222;
    border-bottom: 1px solid blue;
  }
  > i {
    background-color: grey;
    border-radius: 50%;
    color: white;
    :hover {
      background-color: blue;
      cursor: pointer;
    }
  }
`;
export const Icon = styled.i`
  margin-right: 20px;
`;
export const CreamWrapMiddle = styled.div`
  display: flex;
`;
export const Creams = styled.div`
  background-color: #7373d7;
  margin: 20px;
  padding-bottom: 3px;
  > h4 {
    color: white;
    text-align: center;
    border-top: 1px solid green;
    margin: 20px 20px;
    border-color: white;
  }
  > div {
    background-color: white;
    width: 60px;
    height: 40px;
    border-radius: 50%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-top: 10px;
    margin-right: 20px;
    color: #5d5d5d;
  }
  > p {
    margin-top: 230px;
    color: white;
  }
`;

export const Crem1 = styled.img`
  margin: 20px;
  width: 220px;
  height: 130px;
`;
export const BottomText = styled.div`
  line-height: 10px;
  margin-left: 20px;
`;
export const BottomText2 = styled.div`
  display: flex;
  align-items: center;
`;

export const Right = styled.div`
  background-color: #7373d7;
  margin-top: 20px;
  margin-bottom: 70px;
  margin-right: 10px;
  >p{
    margin-top: 217px;
    color: white;
  }
`;