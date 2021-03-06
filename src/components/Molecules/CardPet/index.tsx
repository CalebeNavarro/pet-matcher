import { Card, CardDescription, ButtonContainer, CardInfo } from "./style";
import ButtonFavorites from "../../Atomos/ButtonFavorites";
import { useHistory } from "react-router-dom";
import { useUserInfo } from "./../../../Providers/UserInfo";
import { toast } from "react-toastify";

interface CardPetProps {
  img: string;
  name: string;
  breed: string;
  gender: string;
  age: number;
  id: number;
}

const CardPet = ({ img, name, breed, gender, age, id }: CardPetProps) => {
  const { isLogin } = useUserInfo();
  const history = useHistory();

  const handleClick = () => {
    if (isLogin) {
      history.push(`/dashboard/${id}`);
    } else {
      toast.info("É obrigatório estar logado!!");
    }
  };

  return (
    <Card img={img} onClick={handleClick}>
      {isLogin && (
        <ButtonContainer onClick={(e) => e.stopPropagation()}>
          <ButtonFavorites
            pet={{
              img: img,
              name: name,
              breed: breed,
              gender: gender,
              age: age,
              id: id,
            }}
          />
        </ButtonContainer>
      )}

      <CardInfo>
        <CardDescription>
          <h1>{name}</h1>
          <div>
            <h2>Raca</h2>
            <h2>{breed}</h2>
          </div>
          <div>
            <h2>Genero</h2>
            <h2>{gender}</h2>
          </div>
          <div>
            <h2>Idade</h2>
            <h2>{age}</h2>
          </div>
        </CardDescription>
      </CardInfo>
    </Card>
  );
};
export default CardPet;
