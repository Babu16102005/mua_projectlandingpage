
import styles from "./About.module.css"

export default function About() {
  return (
    <section className={styles.about} id="why-us">
      <div className={styles.aboutContainer}>
        <div className={styles.aboutImage}>
          <div className={styles.imageWrapper}>
            <img src="/about-person.jpg" alt="Delivery person" width={400} height={500} className={styles.aboutImg} />
          </div>
          <div className={styles.floatingEmoji}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--color-dark-green)">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>
        </div>

        <div className={styles.aboutContent}>
          <h2 className={styles.aboutTitle}>
            We Are Fastest Online <br />
            <span className={styles.highlight}>Food Delivery</span> Service
          </h2>

          <p className={styles.aboutDescription}>
            We deliver your food in the fastest way possible. Our dedicated team of riders ensures your food arrives hot
            and fresh, right at your doorstep.
          </p>

          <div className={styles.aboutFeatures}>
            <div className={styles.aboutFeature}>
              <div className={styles.checkIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span>30-minute delivery guarantee</span>
            </div>
            <div className={styles.aboutFeature}>
              <div className={styles.checkIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span>Real-time order tracking</span>
            </div>
            <div className={styles.aboutFeature}>
              <div className={styles.checkIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span>Safe and hygienic packaging</span>
            </div>
          </div>

          <button className={styles.btnLearnMore}>
            Learn More
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
