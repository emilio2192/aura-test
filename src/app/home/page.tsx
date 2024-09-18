import LoggedLayout from '../components/PrincipalLayout';
import InformationComponent from './InformationComponent';
import styles from './home.module.css';

export default function HomePage() {
  return (
    <LoggedLayout>
      <InformationComponent />
      <div className={styles.actionContainer} key="action">
      <div className={styles.action}>
        <div className={styles.actionHeader}>
          5,000+ companies with data and insight for you
        </div>
        <span className={styles.descriptionAction}>
          Find the company you are interested in.<br />
          This will help us customize your experience.
        </span>
        <input type='text' className={styles.actionInput} placeholder='Search company or ticket' />
        <div className={styles.itemsContainer}>
          <div className={styles.items}>
            <div className={styles.item}>
              <span className={styles.abbr}>AMZN</span>
              <span className={styles.nameItem}>Amazon</span>
              <img src='/plus.png' alt='Plus' />
            </div>
            <div className={styles.item}>
              <span className={styles.abbr}>MSFT</span>
              <span className={styles.nameItem}>Microsoft</span>
              <img src='/plus.png' alt='Plus' />
            </div>

            <div className={styles.item}>
              <span className={styles.abbr}>EPAM</span>
              <span className={styles.nameItem}>EPAM Systems</span>
              <img src='/plus.png' alt='Plus' />
            </div>
            <div className={styles.item}>
              <span className={styles.abbr}>WBD</span>
              <span className={styles.nameItem}>Warner Bros</span>
              <img src='/plus.png' alt='Plus' />
            </div>
          </div>
          <div className={styles.actionableContainer}>
            <a href="#" >0 Companies saved</a>
            <a href="#" >Refresh companies</a>
          </div>
        </div>
      </div>
      <div className={styles.infoImage}>
        <img src="/aiPicture.svg" alt="AI Picture" />
      </div>
      
    </div>
    </LoggedLayout>
  );
}