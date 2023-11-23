import { useGlobalContext } from "./context/context";

const SearchForm = () => {
  const { setSearchValue } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.search.value;
    if (!value) return;
    setSearchValue(value);
  };
  return (
    <section>
      <h1 className="title">Unsplash Image Search</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="form-input search-input"
          placeholder="cat"
          type="text"
          name="search"
        />
        <button className="btn" type="submit">
          search
        </button>
      </form>
    </section>
  );
};
export default SearchForm;
