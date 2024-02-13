import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBreedsImages } from "../../../services/breeds";
import GoBackBtn from "../../../components/GoBackBtn/GoBackBtn";
import PageInfo from "../../../components/PageInfo/PageInfo";
import "../Breeds.scss";
import PictureSlider from "../../../components/Slider/Slider";

const BreedDetails = () => {
  const { breedId } = useParams();
  const [breedInfo, setBreedsInfo] = useState([]);

  useEffect(() => {
    const getBreedInfo = async () => {
      try {
        const data = await getBreedsImages(breedId);

        setBreedsInfo(data);
      } catch (error) {
        console.log(error);
      }
    };

    getBreedInfo();
  }, [breedId]);

  return (
    <section>
      <div className="panelContainer">
        <GoBackBtn />
        <PageInfo color="disable">BREEDS</PageInfo>
        <PageInfo color="active">{breedId}</PageInfo>
      </div>

      <PictureSlider breedInfo={breedInfo} />

      <div>
        {breedInfo.length > 0 && (
          <div>
            <h2>{breedInfo[0].breeds[0].name}</h2>
            <div>
              <h3>Temperament</h3>
              <p> {breedInfo[0].breeds[0].temperament}</p>
              <p>Origin: {breedInfo[0].breeds[0].origin}</p>
              <p>weight: {breedInfo[0].breeds[0].weight.metric} kg</p>
              <p>life span: {breedInfo[0].breeds[0].life_span} years</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default BreedDetails;
