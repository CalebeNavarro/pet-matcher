import styled from "styled-components";

export const Panel3Div = styled.div`
  color: #694b3c;
  font-family: Roboto, "Open Sans", sans-serif;
  width: 90%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 10px auto;

  h2 {
    font-size: 45px;
    color: #7a3b6c;
    font-family: Taviraj;
    text-align: center;
    margin-bottom: 0.5em;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    h2 {
      font-size: 25px;
    }
  }

  @media screen and (max-width: 767px) {
    h2 {
      font-size: 30px;
    }
  }

  @media screen and (max-width: 399px) {
    h2 {
      font-size: 25px;
    }
  }
`;

export const PanelDivInterna = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    flex-direction: row;
    margin: 10px;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    margin: 7px;
  }

  @media screen and (max-width: 399px) {
    flex-direction: column;
    margin: 5px;
  }
`;

export const ImgCard = styled.img`
  width: 300px;
  height: 250x;
  margin: 0 1.5em;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 200px;
    height: 150x;
    margin: 0 1.5em;
  }

  @media screen and (max-width: 767px) {
    margin: 1em;
    width: 200px;
    height: 150x;
  }

  @media screen and (max-width: 399px) {
    width: 170px;
    height: 120x;
    margin: 1em;
  }
`;
