import axios from "axios";
axios.defaults.baseURL = "https://api.thecatapi.com/v1";
axios.defaults.headers.common["x-api-key"] = process.env.REACT_APP_API_KEY;

export const getBreeds = async () => {
  const res = await axios("/breeds");
  return res.data;
};

export const getBreedsImages = async (
  breedId,
  limit = 10,
  page = 1,
  order = "RAND"
) => {
  const res = breedId
    ? await axios(
        `/images/search?has_breeds=true&breed_id=${breedId}&order=${order}&page=${page}&limit=${limit}`
      )
    : await axios(
        `/images/search?has_breeds=true&breed_id=&order=${order}&page=${page}&limit=${limit}`
      );

  console.log("res", res.data);
  return res.data;
};
// export const  getCatsImagesByBreed = async (breed_id=0, amount=10) => {
//     const res = await axios('/images/search?breed_ids='+breed_id + "&limit="+ amount);

//     console.table(res.data)
//     return res.data;
// }
