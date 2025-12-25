import styles from "./Input.module.css";
import cn from "classnames";

function Input({ isValid, appearence = "text", className, ...props }) {
  return (
    <input
      className={cn(className, {
        [styles["invalid"]]: isValid,
        [styles["input-title"]]: appearence == "title",
        [styles["input"]]: appearence == "text",
      })}
      {...props}
    />
  );
}

export default Input;
