import styles from "@/styles/header.module.css";

export default function Header() {
  return (
    <>
      <div className={styles.title}>Title Text</div>
      <div className={styles.header_wrapper}>
        <div className={styles.synopsis}>
          <div>image</div>
          <div>Test</div>
        </div>
      </div>
    </>
  );
}
