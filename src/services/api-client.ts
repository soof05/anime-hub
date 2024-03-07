import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    key: "0311541c1580003f9de62a2dc003bbed",
  },
});
