import { Panel1Div } from "./style";
import dogHome from "../../../assets/dogHome.png";
import heartButton from "../../../assets/heartButton.png";
import ButtonHome from "../../Atomos/ButtonHome";
import { Link } from "react-router-dom";

const HomePanel1 = () => {
  return (
    <>
      <Panel1Div>
        <img src={dogHome} />
        <div>
          <h2>Encontre o Amigo </h2>
          <h2>Ideal para Você!</h2>
          <h4>Ajude a fazer uma Boa Ação.</h4>
          <Link to="/signup">
            <ButtonHome
              label="REGISTRE-SE"
              image_source={heartButton}
            ></ButtonHome>
          </Link>
        </div>
      </Panel1Div>
    </>
  );
};

export default HomePanel1;
