import { useState } from "react";
import styles from "./Menu.module.css";

export default function Menu() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const menuItems = [
    {
      id: 1,
      name: "Grilled Salmon Delight",
      price: "$18.00",
      image: "/grilled-salmon.png",
      description: "Fresh Atlantic salmon with asparagus and lemon butter sauce.",
    },
    {
      id: 2,
      name: "Chicken Avocado Salad",
      price: "$14.00",
      image: "/chicken-salad.png",
      description: "Organic greens, grilled chicken breast, and creamy avocado.",
    },
    {
      id: 3,
      name: "Garden Veggie Stir Fry",
      price: "$12.00",
      image: "/veg-stir-fry.png",
      description: "Seasonal vegetables stir-fried with tofu in a savory sauce.",
    },
    {
      id: 4,
      name: "Morning Berry Bowl",
      price: "$10.00",
      image: "/smoothie-bowl.png",
      description: "Acai base topped with granola, fresh berries, and honey.",
    },
    {
      id: 5,
      name: "Quinoa Power Bowl",
      price: "$13.00",
      image: "/veg-stir-fry.png", // Reusing image for demo
      description: "Protein-rich quinoa with roasted chickpeas and kale.",
    },
    {
      id: 6,
      name: "Tropical Fruit Bliss",
      price: "$9.00",
      image: "/smoothie-bowl.png", // Reusing image for demo
      description: "Fresh mango, pineapple, and coconut shavings.",
    },
    {
      id: 7,
      name: "Herb Roasted Chicken",
      price: "$16.00",
      image: "/chicken-salad.png", // Reusing image for demo
      description: "Tender chicken breast seasoned with rosemary and thyme.",
    },
    {
      id: 8,
      name: "Lemon Garlic Shrimp",
      price: "$19.00",
      image: "/grilled-salmon.png", // Reusing image for demo
      description: "Juicy shrimp sautéed in a zesty lemon garlic butter.",
    },
  ];

  // Logic for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = menuItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(menuItems.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <section className={styles.section} id="menu">
      <div className={styles.container}>
        <h2 className={styles.title}>Our Featured Menu</h2>
        <div className={styles.grid}>
          {currentItems.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.imageContainer}>
                <img src={item.image} alt={item.name} className={styles.image} />
              </div>
              <div className={styles.content}>
                <div className={styles.header}>
                  <h3 className={styles.name}>{item.name}</h3>
                  <span className={styles.price}>{item.price}</span>
                </div>
                <p className={styles.description}>{item.description}</p>
                <button className={styles.addButton}>Order Now</button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className={styles.pagination}>
          <button 
            className={styles.pageBtn} 
            onClick={prevPage} 
            disabled={currentPage === 1}
            aria-label="Previous Page"
          >
            &lt;
          </button>
          <span className={styles.pageInfo}>
            Page {currentPage} of {totalPages}
          </span>
          <button 
            className={styles.pageBtn} 
            onClick={nextPage} 
            disabled={currentPage === totalPages}
            aria-label="Next Page"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}
