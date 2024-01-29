import BreedListItem from "../BreedListItem/BreedListItem";

const BreedsList = ({ listOfBreeds }) => {
  console.log("listOfBreeds", listOfBreeds);

  return (
    <>
      <ul>
        {listOfBreeds.map((item) => (
          <BreedListItem key={item.breeds[0].id} item={item} />
        ))}
      </ul>
    </>
  );
};
export default BreedsList;
