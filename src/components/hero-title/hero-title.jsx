"use client";

import { motion } from "framer-motion";
import styles from "./hero-title.module.css";

export default function HeroTitle({ content, title, subtitle }) {
  // Support both old and new prop formats
  const displayContent = content || title;
  
  return (
    <div className={styles.titleWrapper}>
      <motion.h1
        className={styles.mainTitle}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        {displayContent}
      </motion.h1>
      
      {subtitle && (
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
