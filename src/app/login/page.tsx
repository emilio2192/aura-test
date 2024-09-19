'use client';

import { useState, FormEvent, useEffect } from 'react';
import styles from './login.module.css';
import users from '../users.json';

type User = {
  email: string;
  password: string; 
  id: number;
}

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loginError, setLoginError] = useState('');
  const [canContinue, setCanContinue] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = users.find((user:User) => user.email === email && user.password === password);
    if(user) {
      console.log('User found', user);
    }
    setLoginError('Invalid credentials');
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

  useEffect(() => {
    if(email.length > 5 && password.length > 3) {
      setCanContinue(true);
    }
  },[email, password])


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
        {error && <span className={styles.error}>{loginError}</span>}
        <button disabled={!canContinue} type="submit" className={styles.button}>Continue</button>
      </form>
    </div>
  );
}