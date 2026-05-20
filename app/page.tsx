import { getTopManhwa } from "@/lib/anilist";
import QuizPanel from "@/components/quiz/QuizPanel";
import ManhwaCard from "@/components/cards/ManhwaCard";
import Particles from "@/components/ui/Particles";

export default async function HomePage() {

  const manhwa = await getTopManhwa();

  return (
    <main className="min-h-screen bg-[#050505] text-[#f0e8d8]">

      <Particles />

      {/* HERO */}

      <section className="
        relative
        flex
        min-h-screen
        flex-col
        items-center
        justify-center
        overflow-hidden
        px-6
        text-center
      ">

        <div className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(192,57,43,0.2),transparent_50%)]
        " />

        <p className="
          relative
          z-10
          mb-6
          uppercase
          tracking-[0.5em]
          text-red-400
        ">
          WEBTOON RECOMMENDATION ENGINE
        </p>

        <h1 className="
          relative
          z-10
          text-6xl
          font-black
          tracking-[0.08em]
          text-[#f0e8d8]
          drop-shadow-[0_0_30px_rgba(192,57,43,0.25)]
          md:text-8xl
          lg:text-[10rem]
        ">
          MANHWAMATCH
        </h1>

        <p className="
          relative
          z-10
          mt-8
          max-w-2xl
          text-lg
          leading-relaxed
          text-white/70
          md:text-xl
        ">
          Your next obsession is one scroll away.
        </p>

        <button className="
          relative
          z-10
          mt-10
          border
          border-red-500
          bg-black/30
          px-8
          py-4
          uppercase
          tracking-[0.25em]
          backdrop-blur-sm
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-red-500
          hover:text-white
          hover:shadow-[0_0_40px_rgba(192,57,43,0.5)]
        ">
          Start Matching
        </button>

      </section>

      {/* TOP MANHWA */}

      <section className="px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14">

            <p className="
              mb-4
              uppercase
              tracking-[0.4em]
              text-yellow-500
            ">
              TRENDING NOW
            </p>

            <h2 className="
              text-4xl
              font-black
              md:text-6xl
            ">
              Top Manhwa Of All Time
            </h2>

          </div>

          <div className="
            grid
            grid-cols-2
            gap-6
            md:grid-cols-3
            lg:grid-cols-4
          ">

            {manhwa.map((item: any) => (

              <ManhwaCard
                key={item.id}
                title={
                  item.title.english ||
                  item.title.romaji
                }
                image={item.coverImage.extraLarge}
                score={item.averageScore}
                genres={item.genres}
              />

            ))}

          </div>

        </div>

      </section>

      <QuizPanel />
    </main>
  );
}