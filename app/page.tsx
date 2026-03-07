import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import Approach from "@/components/Approach";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import BookingCta from "@/components/BookingCta";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";

export default function Home() {
  return (
    <>
      <PageLoader />
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <WhoThisIsFor />
        <Approach />
        <About />
        <Testimonials />
        <FAQ />
        <BookingCta />
      </main>
      <Footer />
    </>
  );
}
