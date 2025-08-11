import React, { useState } from 'react';
// Need to replace these with components from your project
// import Input from '../../_components/input/input';
import Button from '../../button/button';
import styles from './footer.module.css';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email subscription logic here
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.footer__form} autoComplete="off">
      <div className={styles.footer__formInput}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="off"
          className={styles.input}
        />
        <Button type="submit" variant="primary" className={styles.footer__formButton}>
          Subscribe
        </Button>
      </div>
      <p className={styles.footer__formDisclaimer}>
        By submitting your email, you opt-in to receive news and updates from HaiNet.
      </p>
    </form>
  );
}