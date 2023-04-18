import styles from "@/styles/header.module.css";
import Rati from "@/public/images/myPic.jpg";
import Image from 'next/image'

export default function Header(props: any) {
  return (
    <>
      
      <div className={styles.header_wrapper}>

      <div className={styles.title}>Title Text</div>

        <div className={styles.autobiogrophy}>
          <div ><Image src={Rati} alt="IDK"  className={styles.picture}/></div>
          <div className={styles.bio}>bio</div>
        </div>

        <div className={styles.buttons}>
          <a className={styles.dropdown}>My Experience</a>
          <a className={styles.dropdown}>My Accomplishments</a>
          <a className={styles.dropdown}>Personal Life
          <div className={styles.dropdown_content}> Random facts</div></a>
        </div>

      </div>
    </>
  );
}
