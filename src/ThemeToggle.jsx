import { useGlobalContext } from "./context/context";

const ThemeToggle = () => {
  const { greeting } = useGlobalContext();
  return (
    <h2>
      ThemeToggle
      {console.log(greeting)}
    </h2>
  );
};
export default ThemeToggle;
