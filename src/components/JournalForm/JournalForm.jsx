import { useEffect, useReducer, useRef } from "react";
import cn from "classnames";
import { Button } from "../Button/Button";
import Input from "../Input/Input";
import { INITIAL_STATE, formReducer } from "./JournalForm.state";
import styles from "./JournalForm.module.css";

export function JournalForm({ onSubmit }) {
  const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
  const { isValid, isFormReadyToSubmit, values } = formState;

  const titleRef = useRef();
  const dateRef = useRef();
  const postRef = useRef();

  const focusError = (isValid) => {
    switch (true) {
      case !isValid.title:
        titleRef.current.focus();
        break;
      case !isValid.date:
        dateRef.current.focus();
        break;
      case !isValid.post:
        postRef.current.focus();
        break;
    }
  };

  useEffect(() => {
    let timerId;
    if (!isValid.date || !isValid.post || !isValid.title) {
      focusError(isValid);
      timerId = setTimeout(() => {
        console.log("Очистка состояния");
        dispatchForm({ type: "RESET_VALIDITY" });
      }, 2000);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [isValid]);

  useEffect(() => {
    if (isFormReadyToSubmit) {
      onSubmit(values);
      dispatchForm({ type: "CLEAR" });
    }
  }, [isFormReadyToSubmit, onSubmit, values]);

  const onChange = (e) => {
    dispatchForm({
      type: "SET_VALUE",
      payload: { [e.target.name]: e.target.value },
    });
  };

  const addJournalItem = (e) => {
    e.preventDefault();
    dispatchForm({ type: "SUBMIT" });
  };

  return (
    <form className={styles["journal-form"]} onSubmit={addJournalItem}>
      <div>
        <Input
          type="text"
          ref={titleRef}
          onChange={onChange}
          value={values.title}
          name="title"
          isValid={!isValid.title}
        />
      </div>
      <div className={styles["form-row"]}>
        <label htmlFor="date" className={styles["form-label"]}>
          <img src="/calendar.svg" alt="Иконка календаря" />
          <span>Дата</span>
        </label>
        <Input
          type="date"
          ref={dateRef}
          onChange={onChange}
          name="date"
          value={values.date}
          id="date"
          isValid={!isValid.title}
        />
      </div>
      <div className={styles["form-row"]}>
        <label htmlFor="tag" className={styles["form-label"]}>
          <img src="/folder.svg" alt="Иконка папки" />
          <span>Метки</span>
        </label>
        <Input
          type="text"
          onChange={onChange}
          id="tag"
          value={values.tag}
          name="tag"
        />
      </div>
      <textarea
        name="post"
        id=""
        cols="30"
        rows="10"
        onChange={onChange}
        value={values.post}
        className={cn(styles["input"], {
          [styles["invalid"]]: !isValid.post,
        })}
        ref={postRef}
      ></textarea>
      <Button text="Сохранить" onClick={() => {}} />
    </form>
  );
}
