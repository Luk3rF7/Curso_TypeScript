import { useLocation } from "react-router-dom";
import "./About.css";

export const About = () => {
  const { state } = useLocation();
  return (
    <div>
      <h1>About</h1>
      <p>{state as string} </p>
    </div>
  );
};
