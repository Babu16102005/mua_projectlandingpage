import styles from "./SubscriptionPlans.module.css";

export default function SubscriptionPlans() {
  const plans = [
    {
      id: 1,
      name: "Weekly Plan",
      meals: "2 Meals / Day",
      price: "$99/week",
      benefits: ["Mon-Fri Delivery", "Standard Menu", "Free Delivery"],
      popular: false,
    },
    {
      id: 2,
      name: "Monthly Plan",
      meals: "2 Meals / Day",
      price: "$349/month",
      benefits: [
        "Mon-Sat Delivery",
        "Premium Menu Options",
        "Free Delivery",
        "Weekly Dessert",
      ],
      popular: true,
    },
    {
      id: 3,
      name: "Diet / Custom",
      meals: "Custom Meals",
      price: "Custom Pricing",
      benefits: [
        "Calorie Counted",
        "Keto/Vegan Options",
        "Nutritionist Consult",
        "Flexible Delivery",
      ],
      popular: false,
    },
  ];

  return (
    <section className={styles.section} id="subscription">
      <div className={styles.container}>
        <h2 className={styles.title}>Choose Your Subscription Plan</h2>
        <div className={styles.grid}>
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`${styles.card} ${plan.popular ? styles.popular : ""}`}
            >
              {plan.popular && (
                <div className={styles.badge}>Most Popular</div>
              )}
              <h3 className={styles.planName}>{plan.name}</h3>
              <p className={styles.meals}>{plan.meals}</p>
              <div className={styles.price}>{plan.price}</div>
              <ul className={styles.benefits}>
                {plan.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
              <button
                className={`${styles.button} ${
                  plan.popular ? styles.primaryBtn : styles.secondaryBtn
                }`}
              >
                Subscribe Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
