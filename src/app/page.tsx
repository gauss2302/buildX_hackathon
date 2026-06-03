import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Eligibility } from "@/components/Eligibility";
import { Teams } from "@/components/Teams";
import { Tracks } from "@/components/Tracks";
import { Schedule } from "@/components/Schedule";
import { Criteria } from "@/components/Criteria";
import { Prizes } from "@/components/Prizes";
import { Expectations } from "@/components/Expectations";
import { Registration } from "@/components/Registration";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Eligibility />
        <Teams />
        <Tracks />
        <Schedule />
        <Criteria />
        <Prizes />
        <Expectations />
        <Registration />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
