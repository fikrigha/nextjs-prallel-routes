import styles from "@/components/modal.module.css";

export default function Modal({ children }) {
  return (
    <div className={styles.Modal}>
      <div className={styles.modalContent}>{children}</div>
    </div>
  );
}
