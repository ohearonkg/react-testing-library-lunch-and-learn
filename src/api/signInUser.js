import axios from "axios";

export const signInUser = async ({ username, password }) => {
  const { data } = await axios.post(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return data;
};
