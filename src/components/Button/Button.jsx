import "./Button.css";

export function Button({ text, onClick }) {
  return (
    <button className="button accent" onClick={onClick}>
      {text}
    </button>
  );
}
