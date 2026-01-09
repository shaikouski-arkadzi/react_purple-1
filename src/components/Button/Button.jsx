import { memo } from "react";
import "./Button.css";

export const Button = memo(function Button({ text, onClick }) {
  return (
    <button className="button accent" onClick={onClick}>
      {text}
    </button>
  );
});
