import React from "react";
import styles from '../home.module.css';
import CheckListItemComponent from "./CheckListItemComponent";

const WelcomeComponent = () => (
    <div className={styles.actionContainer} key="action">
        <div className={styles.action}>
            <div className={styles.actionHeader}>
                Welcome John!
            </div>
            <span className={styles.descriptionAction}>
                We are so glad to have in Aura.
            </span>
            <span className={styles.descriptionAction}>
                We have 500+ companies with interviews and data for your investment analysis and research.
            </span>
            <span className={styles.descriptionAction}>
                You will be able to:
            </span>
            <div className={styles.checkListContainer}>
                <CheckListItemComponent text="Save  companies of your interest and see new entries" />
                <CheckListItemComponent text="Use our AI tool to summarize interviews" />
                <CheckListItemComponent text="Get exclusive data" />
                <CheckListItemComponent text="Common questions" />
                <CheckListItemComponent text="Make reports" />
            </div>
            <button className={styles.buttonLetsStart}>
                Let&rsquo;s begin!
            </button>
        </div>
        <div className={styles.infoImage}>
          <img src="/welcome.svg" alt="AI Picture" />
        </div>
    </div>
)

export default WelcomeComponent;