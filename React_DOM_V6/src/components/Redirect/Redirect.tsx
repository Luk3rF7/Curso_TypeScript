import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Redirect.css";

export const Redirect = () => {
  const [time, setTime] = useState(3);
  const timeReset: any = useRef(0);
  const navigate = useNavigate();

  useEffect(() => {
    clearTimeout(timeReset.current);

    timeReset.current = setTimeout(() => {
      setTime((t) => t - 1);
    }, 1000);

    if (time <= 0) {
      navigate("/about", {
        state: `This is the state: ${Math.random()}`,
      });
    }
    return () => {
      clearTimeout(timeReset.current);
    };
  }, [navigate, time]);

  return (
    <div>
      <h1>get out of here in : {time}</h1>
    </div>
  );
};
