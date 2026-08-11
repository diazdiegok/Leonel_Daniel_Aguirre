import { Achievements } from "@/components/Achievements";
import { Bio } from "@/components/Bio";
import { Calendar, StatsBoard } from "@/components/Boards";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Journey } from "@/components/Journey";
import { Navbar } from "@/components/Navbar";
import { Partners } from "@/components/Partners";
import { Quotes } from "@/components/Quotes";
import { Ticker } from "@/components/Ticker";
import { ACHIEVEMENTS, getDashboard } from "@/lib/dashboard";

export const revalidate = 1800;

export default async function HomePage() {
  const data = await getDashboard();

  return (
    <>
      <Navbar live={data.apiConnected} />
      <main>
        <Hero data={data} />
        <Ticker results={data.results} />
        <Bio player={data.player} />
        <Quotes />
        <Journey />
        <Partners partners={data.partners} />
        <Achievements items={ACHIEVEMENTS} />
        <StatsBoard data={data} />
        <Calendar data={data} />
      </main>
      <Footer data={data} />
    </>
  );
}
