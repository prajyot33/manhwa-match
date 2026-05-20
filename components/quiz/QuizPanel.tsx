"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { getTopManhwa } from "@/lib/anilist";
import { scoreManhwa } from "@/lib/recommendation";
import ManhwaCard from "@/components/cards/ManhwaCard";

import { quizQuestions } from "@/lib/quiz-data";

export default function QuizPanel() {

  const [step, setStep] = useState(0);

  const [answers, setAnswers] = useState<string[]>([]);

  const [results, setResults] = useState<any[]>([]);

  const currentQuestion = quizQuestions[step];

  async function handleAnswer(option: string) {

    const updated = [...answers, option];

    setAnswers(updated);

    if (step < quizQuestions.length - 1) {

      setStep(step + 1);

    } else {

      const data = await getTopManhwa();

      const ranked = data
        .map((item: any) => ({
          ...item,
          recommendationScore: scoreManhwa(item, updated),
        }))
        .sort(
          (a: any, b: any) =>
            b.recommendationScore - a.recommendationScore
        );

      setResults(ranked.slice(0, 12));

      setStep(step + 1);
    }
  }

  return (
    <section className="
      relative
      min-h-screen
      overflow-hidden
      bg-[#050505]
      px-6
      py-24
      text-[#f0e8d8]
    ">

      {/* BACKGROUND GLOW */}

      <div className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_top,rgba(192,57,43,0.18),transparent_50%)]
      " />

      <div className="
        relative
        z-10
        mx-auto
        flex
        max-w-4xl
        flex-col
        items-center
        justify-center
      ">

        {/* TOP LABEL */}

        <p className="
          mb-6
          uppercase
          tracking-[0.4em]
          text-red-400
        ">
          Mood Match Quiz
        </p>

        {/* STEP */}

        <p className="
          mb-10
          text-sm
          uppercase
          tracking-[0.3em]
          text-white/40
        ">
          Question {step + 1} / {quizQuestions.length}
        </p>

        {/* ANIMATED PANEL */}

        {step >= quizQuestions.length ? (

          <div className="w-full">

            <div className="mb-16 text-center">

              <p className="
        mb-4
        uppercase
        tracking-[0.4em]
        text-red-400
      ">
                Your Matches
              </p>

              <h2 className="
        text-5xl
        font-black
      ">
                Your Next Obsession
              </h2>

            </div>

            <div className="
      grid
      grid-cols-2
      gap-6
      md:grid-cols-3
      lg:grid-cols-4
    ">

              {results.map((item) => (

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

        ) : (

          <AnimatePresence mode="wait">

            <motion.div
              key={step}

              initial={{
                opacity: 0,
                x: 120,
              }}

              animate={{
                opacity: 1,
                x: 0,
              }}

              exit={{
                opacity: 0,
                x: -120,
              }}

              transition={{
                duration: 0.45,
              }}

              className="w-full"
            >

              {/* QUESTION */}

              <h2 className="
        mb-16
        text-center
        text-4xl
        font-black
        leading-tight
        md:text-6xl
      ">
                {currentQuestion.question}
              </h2>

              {/* OPTIONS */}

              <div className="
        grid
        gap-5
        md:grid-cols-2
      ">

                {currentQuestion.options.map((option) => (

                  <button
                    key={option}

                    onClick={() => handleAnswer(option)}

                    className="
              group
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              p-8
              text-left
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-red-500
              hover:bg-red-500/10
              hover:shadow-[0_0_50px_rgba(192,57,43,0.25)]
            "
                  >

                    <div className="
              absolute
              inset-0
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
              bg-[radial-gradient(circle_at_top,rgba(192,57,43,0.18),transparent_70%)]
            " />

                    <div className="relative z-10">

                      <p className="
                text-2xl
                font-bold
              ">
                        {option}
                      </p>

                    </div>

                  </button>

                ))}

              </div>

            </motion.div>

          </AnimatePresence>

        )}

      </div>

    </section>
  );
}