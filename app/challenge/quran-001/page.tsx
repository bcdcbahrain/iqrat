"use client"

import Link from "next/link"
import { useState } from "react"
import { quranQuestions } from "./questions"

export default function QuranChallenge() {
  const [questionIndex, setQuestionIndex] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [score, setScore] = useState(0)
  const question = quranQuestions[questionIndex]
  const isResults = questionIndex >= quranQuestions.length
  const isCorrect = selected === question?.correctAnswer

  function chooseAnswer(answer: string) {
    if (selected) return
    setSelected(answer)
    if (answer === question.correctAnswer) setScore((current) => current + 1)
  }

  function continueChallenge() {
    setQuestionIndex((current) => current + 1)
    setSelected(null)
  }

  function playAgain() {
    setQuestionIndex(0)
    setSelected(null)
    setScore(0)
  }

  return (
    <main className="min-h-screen bg-background px-6 py-8 text-foreground sm:py-12">
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-3xl flex-col">
        <header className="flex items-center justify-between gap-4">
          <Link href="/" className="font-semibold tracking-tight">IQRA <span className="text-primary">TAMIL</span></Link>
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Quran Challenge</span>
        </header>

        {isResults ? (
          <section className="m-auto flex w-full flex-col items-center rounded-[2rem] border border-border bg-card px-6 py-12 text-center shadow-sm sm:px-12">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Challenge complete</p>
            <h1 className="mt-5 font-serif text-5xl tracking-tight sm:text-6xl">{score} / 10</h1>
            <div className="mt-8 grid w-full max-w-md grid-cols-3 gap-px overflow-hidden rounded-xl border border-border bg-border">
              <div className="bg-background p-4"><strong className="block text-2xl">{score}</strong><span className="text-xs text-muted-foreground">correct</span></div>
              <div className="bg-background p-4"><strong className="block text-2xl">{10 - score}</strong><span className="text-xs text-muted-foreground">incorrect</span></div>
              <div className="bg-background p-4"><strong className="block text-2xl">{score * 10}%</strong><span className="text-xs text-muted-foreground">percentage</span></div>
            </div>
            <button onClick={playAgain} className="mt-9 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">Play Again</button>
          </section>
        ) : (
          <section className="m-auto w-full">
            <div className="mb-6 flex items-center justify-between text-sm"><span className="font-semibold">Question {questionIndex + 1} of 10</span><span className="font-mono text-xs text-muted-foreground">{Math.round(((questionIndex + 1) / 10) * 100)}%</span></div>
            <div className="mb-10 h-1.5 overflow-hidden rounded-full bg-muted"><div className="h-full rounded-full bg-primary transition-all" style={{ width: `${((questionIndex + 1) / 10) * 100}%` }} /></div>
            <div className="rounded-[2rem] border border-border bg-card p-6 shadow-sm sm:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Reflect and choose</p>
              <h1 className="mt-5 text-balance font-serif text-3xl leading-tight tracking-tight sm:text-4xl">{question.prompt}</h1>
              <div className="mt-8 grid gap-3 sm:grid-cols-2" role="group" aria-label="Answer options">
                {question.options.map((option, index) => {
                  const chosen = selected === option
                  const correct = selected && option === question.correctAnswer
                  return <button key={option} disabled={Boolean(selected)} onClick={() => chooseAnswer(option)} className={`flex min-h-16 items-center gap-4 rounded-xl border px-4 py-4 text-left text-sm transition-colors ${correct ? "border-primary bg-primary/10" : chosen ? "border-destructive bg-destructive/10" : "border-border hover:border-primary/50 hover:bg-muted/50"}`}><span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted font-mono text-xs">{String.fromCharCode(65 + index)}</span><span>{option}</span></button>
                })}
              </div>
              {selected && <div className={`mt-8 rounded-xl border p-5 ${isCorrect ? "border-primary/40 bg-primary/10" : "border-destructive/40 bg-destructive/10"}`} aria-live="polite"><p className="font-semibold">{isCorrect ? "Correct" : "Incorrect"}</p><p className="mt-2 text-sm leading-6">Correct answer: <strong>{question.correctAnswer}</strong></p><p className="mt-3 text-sm leading-6 text-muted-foreground">{question.explanation}</p><button onClick={continueChallenge} className="mt-5 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">{questionIndex === 9 ? "See Results" : "Continue"}</button></div>}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}
