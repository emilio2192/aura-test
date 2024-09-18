'use client';

import { useState, FormEvent } from 'react';
import styles from './login.module.css';


export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [canContinue, setCanContinue] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid user');
    } else {
      setError('');
      setCanContinue(true);
      // Handle login logic here
    }
  };

  const handleUsernameChange = () => {

    if (!/\S+@\S+\.\S+/.test(email) && email.length > 5) {
      setError('Invalid user');
      setCanContinue(false);
    } else {
      setError('');
      setCanContinue(true);
    }
  }


  return (
    <div className={styles.container}>
      <img 
        src="/logo-white.svg" 
        alt="Logo" 
        className={styles.logo}
        />
      <h1 className={styles.title}>Welcome</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="username">User</label>
        </div>
        <div className={styles.inputGroup}>
          <input
            id="username"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleUsernameChange}
            className={styles.input}
          />
          {error && <span className={styles.error}>{error}</span>}
        </div>
        <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
        </div>
        <div className={styles.inputGroup}>
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
        </div>
        <button disabled={!canContinue} type="submit" className={styles.button}>Continue</button>
      </form>
    </div>
  );
}