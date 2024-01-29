import GoBackBtn from "../../components/GoBackBtn/GoBackBtn";
import "./Breeds.scss";
import { useEffect, useState } from "react";
import { getBreedsImages } from "../../services/breeds";
import BreedsList from "../../components/BreedsList/BreedsList";
import PageInfo from "../../components/PageInfo/PageInfo";

const Breeds = () => {
  // const params = useParams();
  // console.log(params)
  const [listOfBreeds, setListOfBreeds] = useState([]);
  // useEffect(() => {
  //   const getAllBreeds = async () => {
  //     try {
  //       const data = await getBreeds();
  //       setListOfBreeds(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   getAllBreeds();
  // }, []);

  useEffect(() => {
    const getAllBreeds = async () => {
      try {
        const data = await getBreedsImages();

        setListOfBreeds(data);
      } catch (error) {
        console.log(error);
      }
    };

    getAllBreeds();
  }, []);

  return (
    <>
      <section>
        <div className="panelContainer">
          <GoBackBtn />
          <PageInfo color={"active"}>BREEDS</PageInfo>
        </div>
        <BreedsList listOfBreeds={listOfBreeds} />
      </section>
    </>
  );
};
export default Breeds;
