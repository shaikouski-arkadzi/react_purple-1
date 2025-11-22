import { CardButton } from "../CardButton/CardButton";
import "./JournalAddButton.css";

export function JournalAddButton() {
  return (
    <CardButton className="journal-add">
      <img className="plus" src="/plus.svg" alt="Новое воспоминание" />
      Новое воспоминание
    </CardButton>
  );
}
