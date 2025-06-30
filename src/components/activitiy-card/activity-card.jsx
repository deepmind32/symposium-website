import { BsArrowRight } from 'react-icons/bs';
import styles from './activity-card.module.css';

export default function ActivityCard({ activity, charLimit }) {
  // Helper to truncate description if charLimit is provided
  const getDescription = () => {
    if (charLimit && activity.description.length > charLimit) {
      return activity.description.slice(0, charLimit) + '...';
    }
    return activity.description;
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={activity.image || 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000'}
          alt={activity.title}
          fill
          className={styles.image}
        />
        <small className={styles.typeTag}>
          {activity.type}
        </small>
      </div>
      <div className={styles.content}>
        <small className={styles.dateTag}>
          {activity.date}
        </small>
        <h4 className={styles.title}>{activity.title}</h4>
        <p className={styles.description}>{getDescription()}</p>
        <a href={activity.link} className={styles.link}>
          Read More 
          <BsArrowRight className={styles.arrow} />
        </a>
      </div>
    </div>
  );
}
