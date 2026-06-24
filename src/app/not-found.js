import Link from "next/link";
import styles from "../styles/not-found.module.css"
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className={styles.page}>
      <div className={styles.grid}></div>

      <section className={styles.container}>

        <div className={styles.left}>

          <div className={styles.label}>
            ▲ SYSTEM OVERRIDE
          </div>

          <h1 className={styles.code}>404</h1>

          <h2 className={styles.title}>
            SECTOR
            <br />
            UNCHARTED
          </h2>

          <p className={styles.description}>
            The coordinates requested do not exist within the
            current architectural framework. The node may
            have been severed or relocated during the last
            system restructure.
          </p>

          <div className={styles.panel}>
            <div>
              <span>ERR_CODE:</span>
              <strong>0.DIAGNOSTIC</strong>
            </div>

            <div>
              <span>LOCATION:</span>
              <strong>NULL_POINTER</strong>
            </div>

            <div>
              <span>STATUS:</span>
              <strong>AWAITING_INPUT</strong>
            </div>
          </div>

          <Link href="/" className={styles.button}>
            <ArrowLeft size={18} />
            RETURN HOME
          </Link>

        </div>

        

      </section>
    </main>
  );
}