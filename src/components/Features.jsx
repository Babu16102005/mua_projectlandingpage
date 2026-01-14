import styles from "./Features.module.css"

const features = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Fastest Delivery",
    description: "The majority have the best quality food and amazing offers.",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <path d="M12 18h.01" />
        <path d="M9 6h6" />
        <path d="M9 10h6" />
      </svg>
    ),
    title: "Easy to Order",
    description: "The majority have the best quality food and amazing offers.",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Wide Coverage Map",
    description: "The majority have the best quality food and amazing offers.",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8" />
        <path d="M12 8v8" />
      </svg>
    ),
    title: "More Than 160+ Dish",
    description: "The majority have the best quality food and amazing offers.",
  },
]

export default function Features() {
  return (
    <section className={styles.features} id="services">
      <div className={styles.featuresContainer}>
        <h2 className={styles.featuresTitle}>
          Chill At Home We Will <span className={styles.highlight}>Take Care</span>
        </h2>

        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div className={styles.featureCard} key={index}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
