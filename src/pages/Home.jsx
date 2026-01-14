import Header from "../components/Header"
import Hero from "../components/Hero"
import Features from "../components/Features"
import About from "../components/About"
import Footer from "../components/Footer"
import SubscriptionPlans from "../components/SubscriptionPlans"
import TrialMealCTA from "../components/TrialMealCTA"
import Menu from "../components/Menu"
import Testimonials from "../components/Testimonials"

export default function Page() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Menu />
        <SubscriptionPlans />
        <TrialMealCTA />
        <Features />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </div>
  )
}
