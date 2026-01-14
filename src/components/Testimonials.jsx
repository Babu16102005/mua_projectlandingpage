import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Verified Customer",
      image: "/avatar.jpg",
      rating: 5,
      text: "The food is absolutely amazing! I've been a subscriber for 3 months now and I love every meal. It saves me so much time.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Fitness Enthusiast",
      image: null,
      rating: 5,
      text: "Great portion sizes and nutritional balance. Perfect for my workout routine. Highly recommended!",
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "Busy Mom",
      image: "/placeholder-user.jpg",
      rating: 4,
      text: "Delicious and healthy. My kids even love the veggies! The delivery is always on time which is a huge plus.",
    },
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill={i < rating ? "#FFD700" : "#E0E0E0"}
        className={styles.star}
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ));
  };

  return (
    <section className={styles.section} id="reviews">
      <div className={styles.container}>
        <h2 className={styles.title}>What Our Customers Say</h2>
        <div className={styles.grid}>
          {reviews.map((review) => (
            <div key={review.id} className={styles.card}>
              <div className={styles.header}>
                <div 
                  className={styles.avatar} 
                  style={{ backgroundColor: !review.image ? 'var(--color-white)' : 'var(--color-light-green)' }}
                >
                   {review.image ? (
                     <img 
                      src={review.image} 
                      alt={review.name} 
                      onError={(e) => {
                        e.target.style.display='none'; 
                        e.target.parentElement.style.backgroundColor='var(--color-white)';
                        e.target.nextSibling.style.display='flex';
                      }} 
                    />
                   ) : null}
                   <div className={styles.avatarFallback} style={{ display: review.image ? 'none' : 'flex' }}>
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-dark-green)" strokeWidth="1.5">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                   </div>
                </div>
                <div className={styles.info}>
                  <h3 className={styles.name}>{review.name}</h3>
                  <span className={styles.role}>{review.role}</span>
                  <div className={styles.rating}>{renderStars(review.rating)}</div>
                </div>
              </div>
              <p className={styles.text}>"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
