import { Link } from "react-router-dom";

const BreedListItem = ({ item }) => {
  return (
    <li>
      <Link to={`${item.breeds[0].id}`}>
        <img src={item?.url} alt="cat" />
      </Link>
    </li>
  );
};
export default BreedListItem;
