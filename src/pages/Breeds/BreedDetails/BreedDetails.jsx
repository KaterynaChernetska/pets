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
        console.log("sssssss", data);
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

      <div className="breedInfo">
        {breedInfo.length > 0 && (
          <div>
            <h2 className="breedName">{breedInfo[0].breeds[0].name}</h2>
            <h3 className="breedDescription">
              {breedInfo[0].breeds[0].description}
            </h3>
            <div className="breedFlexContainer">
              <div>
                <h3>
                  Temperament:{" "}
                  <p className="breedTemperament">
                    {breedInfo[0].breeds[0].temperament}
                  </p>
                </h3>
              </div>
              <div>
                <h3>
                  Origin:{" "}
                  <span className="breedDescription">
                    {breedInfo[0].breeds[0].origin}
                  </span>
                </h3>
                <h3>
                  Weight:
                  <span className="breedDescription">
                    {" "}
                    {breedInfo[0].breeds[0].weight.metric} kg
                  </span>
                </h3>
                <h3>
                  Life span:{" "}
                  <span className="breedDescription">
                    {breedInfo[0].breeds[0].life_span} years
                  </span>
                </h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default BreedDetails;
