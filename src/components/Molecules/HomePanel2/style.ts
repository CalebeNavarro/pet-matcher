import styled from "styled-components";

export const Panel2Div = styled.div`
  color: #694b3c;
  font-family: var(--font-family-fourth);
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 100px auto;
  background-size: cover;
  padding-top: 50px;
  text-align: justify;

  img {
    width: 400px;
  }

  div {
    text-align: center;
    padding: 10px;
  }

  h2 {
    font-size: 40px;
    color: #7a3b6c;
    font-family: Taviraj;
  }

  h4 {
    font-size: 20px;
    color: #8b8b8b;
    margin: 20px 80px;
    font-weight: 300;
    font-family: Taviraj;
    text-align: justify;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 10px;
    display: flex;
    flex-direction: row;
    margin: 0 auto;

    img {
      width: 300px;
      height: 260px;
    }

    div {
      text-align: center;
      padding: 10px;
    }

    h2 {
      font-size: 30px;
      color: #7a3b6c;
      font-family: Taviraj;
    }

    h4 {
      font-size: 13px;
      color: #8b8b8b;
      font-family: Taviraj;
      margin: 15px;
    }
  }

  @media screen and (min-width: 400px) and (max-width: 767px) {
    padding: 10px;
    display: flex;
    flex-direction: column;
    margin: 50px auto;

    img {
      width: 250px;
      height: 210px;
    }

    div {
      text-align: center;
      padding: 10px;
    }

    h2 {
      font-size: 30px;
      color: #7a3b6c;
      font-family: Taviraj;
    }

    h4 {
      font-size: 13px;
      color: #8b8b8b;
      font-family: Taviraj;
      margin: 15px;
    }
  }

  @media screen and (min-width: 400px) and (max-width: 767px) {
    padding: 10px;
    display: flex;
    flex-direction: column;
    margin: 50px auto;

    img {
      width: 250px;
      height: 210px;
    }

    img {
      width: 250px;
      height: 210px;
    }

    div {
      text-align: center;
      padding: 10px;
    }

    h2 {
      font-size: 25px;
      color: #7a3b6c;
      font-family: Taviraj;
    }

    @media screen and (max-width: 399px) {
      display: flex;
      flex-direction: column;
      margin: 0 auto;

      img {
        width: 250px;
        height: 210px;
      }

      div {
        text-align: center;
        padding: 10px;
      }

      h2 {
        font-size: 25px;
        color: #7a3b6c;
        font-family: Taviraj;
      }

      h4 {
        font-size: 10px;
        color: #8b8b8b;
        font-family: Taviraj;
        margin: 15px;
      }
    }
  }
`;
