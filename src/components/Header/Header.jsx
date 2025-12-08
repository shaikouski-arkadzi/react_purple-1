import styles from "./Header.module.css";

export function Header() {
  return <img className={styles.logo} src="/logo.svg" alt="Логотип журнала" />;
}
