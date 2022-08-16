import { useButtomContext } from './ButtonContext';

export const Button = () => {
  const { setIsClicked, isClicked } = useButtomContext();

  return (
    <button onClick={() => setIsClicked(!isClicked)}>
      View {isClicked ? "more" : "less"}
    </button>
  );
};