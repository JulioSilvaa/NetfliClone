import { API_KEY, Base_URL } from "../Constants/keys_API";

const basicFetch = async (endpoint) => {
  const req = await fetch(`${Base_URL}${endpoint}`);
  const json = await req.json();
  return json;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Originais do Netflix",
        items: await basicFetch(
          `/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "trending",
        title: "Documentário",
        items: await basicFetch(
          `/trending/all/week?&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "toprad",
        title: "Em Alta",
        items: await basicFetch(
          `/movie/top_rated?&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "action",
        title: "Ação",
        items: await basicFetch(
          `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: await basicFetch(
          `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "horror",
        title: "Terror",
        items: await basicFetch(
          `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "romance",
        title: "Romance",
        items: await basicFetch(
          `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "documentary",
        title: "Documentário",
        items: await basicFetch(
          `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`
        ),
      },
    ];
  },
};
