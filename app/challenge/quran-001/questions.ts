export type QuranQuestion = {
  id: `quran-${string}`
  prompt: string
  options: string[]
  correctAnswer: string
  explanation: string
}

export const quranQuestions: QuranQuestion[] = [
  { id: "quran-001", prompt: "Which surah is known as the heart of the Quran?", options: ["Surah Al-Fatiha", "Surah Ya-Sin", "Surah Al-Ikhlas", "Surah Al-Kahf"], correctAnswer: "Surah Ya-Sin", explanation: "Surah Ya-Sin is widely referred to as the heart of the Quran because of its central themes of faith, resurrection, and Allah's signs." },
  { id: "quran-002", prompt: "How many surahs are in the Quran?", options: ["99", "110", "114", "120"], correctAnswer: "114", explanation: "The Quran contains 114 surahs, beginning with Al-Fatiha and ending with An-Nas." },
  { id: "quran-003", prompt: "Which was the first word revealed from the Quran?", options: ["Iqra", "Bismillah", "Alhamdulillah", "Qul"], correctAnswer: "Iqra", explanation: "The first revealed command was Iqra, meaning 'Read' or 'Recite', from the beginning of Surah Al-'Alaq." },
  { id: "quran-004", prompt: "Which surah begins with 'Alhamdu lillahi Rabbil 'alamin'?", options: ["Al-Baqarah", "Al-Fatiha", "An-Nas", "Al-Mulk"], correctAnswer: "Al-Fatiha", explanation: "Surah Al-Fatiha opens with praise to Allah, the Lord of all worlds." },
  { id: "quran-005", prompt: "In which month was the Quran first revealed?", options: ["Muharram", "Rajab", "Sha'ban", "Ramadan"], correctAnswer: "Ramadan", explanation: "The Quran says it was revealed in Ramadan, the month in which guidance was sent down for humanity." },
  { id: "quran-006", prompt: "Which surah is the longest in the Quran?", options: ["Al-Imran", "Al-Baqarah", "An-Nisa", "Al-Ma'idah"], correctAnswer: "Al-Baqarah", explanation: "Surah Al-Baqarah is the longest surah, with 286 verses." },
  { id: "quran-007", prompt: "What is the name of the Quran's 112th surah?", options: ["Al-Falaq", "An-Nas", "Al-Kafirun", "Al-Ikhlas"], correctAnswer: "Al-Ikhlas", explanation: "Surah Al-Ikhlas teaches the oneness and uniqueness of Allah." },
  { id: "quran-008", prompt: "Which prophet is mentioned most often in the Quran?", options: ["Ibrahim", "Musa", "Nuh", "Isa"], correctAnswer: "Musa", explanation: "Prophet Musa is mentioned more than any other prophet in the Quran." },
  { id: "quran-009", prompt: "What does the word 'Quran' commonly mean?", options: ["The Written Book", "The Recitation", "The Law", "The Reminder"], correctAnswer: "The Recitation", explanation: "Quran comes from an Arabic root related to recitation or reading aloud." },
  { id: "quran-010", prompt: "Which surah is recited in every unit of salah?", options: ["Al-Fatiha", "Al-Ikhlas", "Al-Kawthar", "Al-Asr"], correctAnswer: "Al-Fatiha", explanation: "Surah Al-Fatiha is recited in each rak'ah, or unit, of the prayer." },
]

if (quranQuestions.length !== 10) throw new Error("The first Quran Challenge must contain exactly 10 questions.")
