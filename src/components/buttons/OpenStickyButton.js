import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

export default function OpenStickyButton() {
  return (
    <Link to={useBaseUrl("docs/contribute/portal-contribute/")}>
      <button className={`${styles.iconBtn} ${styles.addBtn}`}>
        <div className={styles.addIcon}></div>
        <div className={styles.btnText}>
          <span className={styles.btnSpan}>CONTRIBUTE NOW</span>
        </div>
      </button>
    </Link>
  );
}
