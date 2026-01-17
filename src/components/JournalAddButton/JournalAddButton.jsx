import { CardButton } from "../CardButton/CardButton";
import "./JournalAddButton.css";

export function JournalAddButton({ clearForm }) {
  return (
    <CardButton className="journal-add" onClick={clearForm}>
      <img className="plus" src="/plus.svg" alt="Новое воспоминание" />
      Новое воспоминание
    </CardButton>
  );
}
