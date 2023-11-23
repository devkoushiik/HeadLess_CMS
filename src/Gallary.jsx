import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_KEY } from "./apiKey";
import { useGlobalContext } from "./context/context";

// const url = `https://api.unsplash.com/search/photos?client_id=${API_KEY}=${searchTerm}`;

const Gallary = () => {
  const { searchValue } = useGlobalContext();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["image", searchValue],
    queryFn: async () => {
      const result = await axios.get(
        `https://api.unsplash.com/search/photos?client_id=${API_KEY}&query=${searchValue}`
      );
      return result.data;
    },
  });
  console.log(data);

  if (isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }
  if (isError) {
    return (
      <section className="image-container">
        <h4>There was an error...</h4>
      </section>
    );
  }
  if (data.length < 1) {
    return (
      <section className="image-container">
        <h4>No Results Found!!!</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {data.results.map((item) => {
        const url = item?.urls?.regular;
        return (
          <div key={item.id}>
            <img width={400} src={url} alt={item.slug}></img>
          </div>
        );
      })}
    </section>
  );
};
export default Gallary;
