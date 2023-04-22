import styles from "@/styles/header.module.css";
import Rati from "@/public/images/myPic.jpg";
import Image from 'next/image'

export default function Header(props: any) {
  return (
    <>
      
      <div className={styles.header_wrapper}>

        <div className={styles.title}>My Portfolio</div>

        <div className={styles.autobiogrophy}>
          <div ><Image src={Rati} alt="IDK"  className={styles.picture}/></div>
          <div className={styles.bio}>bio</div>
        </div>

        <div className={styles.button_wrapper}>
          <a className={styles.buttons}>My Experience</a>
          <a className={styles.buttons}>My Accomplishments</a>
          <a className={styles.buttons}>Personal Life</a>
        </div>
        <div className={styles.contact_wrapper}>
          <div>Contact me on:</div>
          <a href="https://www.linkedin.com/in/rati-kereselidze-729969250/" className={styles.contacts}> LinkedIn</a>
          <a href= "https://github.com/Ratiyoo" className={styles.contacts}> Github</a>
          <div> or email me at: rati.kereselidze20@gmail.com</div>
        </div>
      </div>
    </>
  );
}
