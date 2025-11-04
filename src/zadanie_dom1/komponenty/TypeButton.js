import { useState } from "react";


function TypeButton({ type, onClick }) {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
    if (onClick) onClick(type);
  };

  const btnClass = selected ? "btn btn-primary" : "btn btn-outline-primary";

  return (
    <button className={btnClass} onClick={handleClick}>
      {type}
    </button>
  );
}

export default TypeButton;
