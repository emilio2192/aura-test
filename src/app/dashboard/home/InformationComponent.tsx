import styles from './home.module.css';

export default function InformationComponent() {
  return (
    <div className={styles.container} key="info">
      <h1 className={styles.title}>AURA</h1>
      <h2 className={styles.subHeader}>Augmented Universal Research Assistant</h2>
      <p className={styles.description}>Your in one single intuitive platform along side with your team.</p>
      <div className={styles.boxContainer}>
        <a className={styles.box} href='/dashboard/search'>
          <img src="/box1.png" alt="Box 1 Image" className={styles.boxImage} />
          <span className={styles.boxText}>Search Data</span>
        </a>
        <a className={styles.box} href="/dashboard/upload-data">
          <img src="/box2.png" alt="Box 2 Image" className={styles.boxImage} />
          <span className={styles.boxText}>Upload your Data</span>
        </a>
        <a className={styles.box} href='/dashboard/ai'>
          <img src="/box3.png" alt="Box 3 Image" className={styles.boxImage} />
          <span className={styles.boxText}>Try our AI Tool</span>
        </a>
      </div>
    </div>
  );
}