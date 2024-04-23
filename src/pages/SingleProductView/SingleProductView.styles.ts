import styled from "styled-components";

export const SingleProductStyles = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  padding: 50px 0px;
  display: flex;
  flex-direction: column;
  a {
    position: absolute;
    right: 195px;
    padding: 20px;
    border-radius: 10px;
    color: #000;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
    &:active {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
        rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    }
  }
  .mainBx {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .mainBx div {
    display: flex;
    align-items: center;
  }
  .mainBx div img {
    height: 400px;
    max-width: 400px;
  }
  .mainBx div section {
    width: 400px;
    height: 250px;
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
