import styled from "styled-components";

export const Panel4Div = styled.div`
  font-family: Taviraj;
  width: 80vw;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 20px auto;
  text-align: center;

  h2 {
    font-size: 30px;
    color: #7a3b6c;
  }

  h4 {
    font-size: 20px;
    color: #8b8b8b;
    margin: 15px;
    font-weight: 300;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    flex-direction: row;

    h2 {
      font-size: 25px;
      color: #7a3b6c;
    }

    h4 {
      font-size: 15px;
      color: #8b8b8b;
      margin: 15px;
    }
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;

    h2 {
      font-size: 30px;
      color: #7a3b6c;
    }

    h4 {
      font-size: 16px;
      color: #8b8b8b;
      margin: 15px;
    }
  }

  @media screen and (max-width: 399px) {
    flex-direction: column;

    h2 {
      font-size: 25px;
      color: #7a3b6c;
    }

    h4 {
      font-size: 13px;
      color: #8b8b8b;
      margin: 15px;
    }

    @media screen and (max-width: 399px) {
      flex-direction: column;

      h2 {
        font-size: 25px;
        color: #7a3b6c;
      }

      h4 {
        font-size: 13px;
        color: #8b8b8b;
        margin: 15px;
      }
    }
  }
`;

export const PanelDivInterna = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImgLayout = styled.img`
  width: 550px;
  margin: 10px 20px;

  @media screen and (max-width: 767px) {
    width: 300px;
  }

  @media screen and (max-width: 767px) {
    width: 300px;
  }

  @media screen and (max-width: 399px) {
    width: 250px;
  }
`;
