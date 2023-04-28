import styles from "@/styles/header.module.css";
import Rati from "@/public/images/myPic.jpg";
import Image from "next/image";
import Github from "@/public/images/GitHub.png";
import Linkedin from "@/public/images/linkedin.png";

export default function Header(props: any) {
  return (
    <>
      <div className={styles.header_wrapper}>
        <div className={styles.title}>My Portfolio</div>

        <div className={styles.autobiogrophy}>
          <div>
            <Image src={Rati} alt="MyImage" className={styles.picture} />
          </div>
          <div className={styles.bio}>bio</div>
        </div>

        <div className={styles.button_wrapper}>
          <select name="dropdown" id="dropdown" className={styles.buttons}>
            <option>My Experience</option>
            <option>info</option>
            <option>info</option>
            <option>info</option>
          </select>

          <select className={styles.buttons}>
            <option>My Skillset</option>
            <option>info</option>
            <option>info</option>
            <option>info</option>
          </select>
          <select className={styles.buttons}>
            <option>Personal Life</option>
            <option>info</option>
            <option>info</option>
            <option>info</option>
          </select>
        </div>
        <div className={styles.contact_wrapper}>
          <div className={styles.contact_text}>Contact me on:</div>
          <a
            href="https://www.linkedin.com/in/rati-kereselidze-729969250/"
            className={styles.contacts}
          >
            <Image
              src={Linkedin}
              alt="LinkedinLogo"
              className={styles.contact_image}
            />{" "}
            LinkedIn
          </a>
          <a href="https://github.com/Ratiyoo" className={styles.contacts}>
            <Image
              src={Github}
              alt="GithubLogo"
              className={styles.contact_image}
            />{" "}
            Github
          </a>
          <div className={styles.contact_text}>
            {" "}
            or email me at: rati.kereselidze20@gmail.com
          </div>
        </div>
      </div>
    </>
  );
}
