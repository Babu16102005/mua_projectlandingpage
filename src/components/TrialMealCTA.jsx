import styles from "./TrialMealCTA.module.css";

export default function TrialMealCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Try a Trial Meal Before You Subscribe</h2>
          <p className={styles.description}>
            Not sure yet? Taste our premium quality food with a one-time trial
            meal. Experience the flavor, freshness, and convenience firsthand.
          </p>
          <button className={styles.ctaButton}>Book Trial Meal</button>
        </div>
      </div>
    </section>
  );
}
