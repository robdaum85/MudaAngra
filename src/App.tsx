import About from "./components/About";
import FAQ from "./components/FAQ";
import FloatingCTA from "./components/FloatingCTA";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LaunchPopup from "./components/LaunchPopup";
import Location from "./components/Location";
import Participants from "./components/Participants";
import RegistrationForm from "./components/RegistrationForm";
import Topics from "./components/Topics";
import Updates from "./components/Updates";

export default function App() {
  return (
    <div className="min-h-screen brasil-texture text-ink">
      <Header />
      <main>
        <Hero />
        <About />
        <Topics />
        <Participants />
        <RegistrationForm />
        <Updates />
        <Location />
        <FAQ />
      </main>
      <Footer />
      <FloatingCTA />
      <LaunchPopup />
    </div>
  );
}
