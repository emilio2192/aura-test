import '../globals.css';
import styles from './principalLayout.module.css';
import React, { ReactNode } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <a href="/dashboard/home">
          <img src="/logo-white-compact.svg" alt="Logo" className={styles.logo} />
        </a>
        <div className={styles.menu}>
          <img src="/icon-image.png" alt="Menu Item 1" className={styles.icon} />
          <img src="/icon-image.png" alt="Menu Item 2" className={styles.icon} />
          <img src="/icon-image.png" alt="Menu Item 3" className={styles.icon} />
        </div>
        <div className={styles.bottomMenu}>
          <img src="/icon-image.png" alt="Menu Item 4" className={styles.icon} />
          <img src="/icon-image.png" alt="Menu Item 5" className={styles.icon} />
          <img src="/icon-image.png" alt="Menu Item 6" className={styles.icon} />
        </div>
      </nav>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
}