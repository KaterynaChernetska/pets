import { useParams } from "react-router-dom";
import GoBackBtn from "../../components/GoBackBtn/GoBackBtn";
import "./Breeds.scss";
import { useEffect, useState } from "react";
import { getBreeds, getBreedsImages, getCatsImagesByBreed } from "../../services/breeds";
import BreedsList from "../../components/BreedsList/BreedsList";

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
          console.log('data',  data)
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
        <GoBackBtn />
        <BreedsList listOfBreeds={listOfBreeds} />
      </section>
    </>
  );
};
export default Breeds;
