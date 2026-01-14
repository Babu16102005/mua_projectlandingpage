
import styles from "./Hero.module.css"

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroDecoration}>
        <div className={`${styles.waveLine} ${styles.wave1}`}></div>
        <div className={`${styles.waveLine} ${styles.wave2}`}></div>
        <div className={styles.dotsPattern}></div>
      </div>

      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.tagline}>
            <span className={styles.taglineIcon}>🌿</span>
            <span>Good Food Good Mood</span>
          </div>

          <h1 className={styles.heroTitle}>
            We Are Best In <br />
            <span className={styles.highlight}>FOOD</span> Delivery
          </h1>

          <p className={styles.heroDescription}>
            A moments of delivered on time and drive on the platform with the largest network of active food delivery
            riders. Demo is the best, its on time.
          </p>

          <div className={styles.heroActions}>
            <button className={styles.btnPrimary}>Order Now</button>
            <button className={styles.btnSecondary}>
              <span className={styles.playIcon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </span>
              How it works
            </button>
          </div>

          <div className={styles.heroStats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>4000+</span>
              <span className={styles.statLabel}>Customer</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>70509+</span>
              <span className={styles.statLabel}>Delivery</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>12k+</span>
              <span className={styles.statLabel}>Ratings</span>
            </div>
          </div>
        </div>

        <div className={styles.heroImage}>
          <div className={styles.imageCircle}>
            <img
              src="/delivery-person.jpg"
              alt="Delivery person with food"
              width={400}
              height={450}
              className={styles.deliveryImage}
            />
          </div>

          <div className={styles.floatingHeart}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--color-dark-green)">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>

          <div className={styles.testimonialCard}>
            <div className={styles.testimonialAvatar}>
              <img src="/avatar.jpg" alt="Jennifer" width={40} height={40} />
            </div>
            <div className={styles.testimonialInfo}>
              <span className={styles.testimonialName}>Jennifer Sina Lucia</span>
              <div className={styles.testimonialStars}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="var(--color-dark-green)">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
