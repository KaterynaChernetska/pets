import { Link } from "react-router-dom";

const BreedListItem = ({ item }) => {
  return (
    <li>
      <Link to={`${item.breeds[0].id}`}>
        {item.url ? (
          <img src={item?.url} alt={item.breeds[0].name} />
        ) : (
          <img src="../../assets/placeholder.jpg" alt="Placeholder Image" />
        )}
      </Link>
    </li>
  );
};
export default BreedListItem;
