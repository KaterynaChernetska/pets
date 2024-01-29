import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBreedsImages } from "../../../services/breeds";

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
    <>
      <p>{breedId}</p>
      {breedInfo.length > 0 &&
        breedInfo.map((item) => (
          <img key={item.id} src={item.url} alt={item.breeds[0].name} />
        ))}
      {breedInfo.length > 0 && (
        <div>
          <h2>{breedInfo[0].breeds[0].name}</h2>
          <div>
            <h3>Temperamnet</h3>
            <p> {breedInfo[0].breeds[0].temperament}</p>
            <p>Origin: {breedInfo[0].breeds[0].origin}</p>
            <p>weight: {breedInfo[0].breeds[0].weight.metric} kg</p>
            <p>life span: {breedInfo[0].breeds[0].life_span} years</p>
          </div>
        </div>
      )}
    </>
  );
};
export default BreedDetails;
