import { Achievements } from "@/components/Achievements";
import { Bio } from "@/components/Bio";
import { Calendar, StatsBoard } from "@/components/Boards";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Journey } from "@/components/Journey";
import { Navbar } from "@/components/Navbar";
import { Partners } from "@/components/Partners";
import { Quotes } from "@/components/Quotes";
import { Sponsors } from "@/components/Sponsors";
import { Ticker } from "@/components/Ticker";
import { ACHIEVEMENTS, getDashboard } from "@/lib/dashboard";

export const dynamic = "force-static";

export default async function HomePage() {
  const data = await getDashboard();

  return (
    <>
      <Navbar />
      <main>
        <Hero data={data} />
        <Ticker results={data.results} />
        <Bio player={data.player} />
        <Quotes />
        <Journey />
        <Partners partners={data.partners} />
        <Achievements items={ACHIEVEMENTS} />
        <StatsBoard data={data} />
        <Gallery />
        <Sponsors />
        <Calendar data={data} />
      </main>
      <Footer data={data} />
    </>
  );
}
