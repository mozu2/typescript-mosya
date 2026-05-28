import { useState } from "react";
import type { QuizPhase, AnswerRecord, AnswerStatus } from "./types";
import { questions } from "./data/questions";
import QuizCard from "./components/QuizCard";
import ResultScreen from "./components/ResultScreen";
import "./App.css";
import './App.css'

export default function App() {
  const [phase, setPhase] = useState<QuizPhase>("start");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [answerStatus, setAnswerStatus] = useState<AnswerStatus>("unanswered");
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [time, setTime] = useState<number>(0);
  const currentQuestion = questions[currentIndex];

  const handleSelect = (index: number) => {
    if (answerStatus !== "unanswered") return;

    const isCorrect = index === currentQuestion.correctIndex; //押したボタンの番号と正解番号が一致しているか確認します。
    setSelectedIndex(index);
    setAnswerStatus(isCorrect ? "correct" : "wrong");
    setAnswers((prev) => [
      ...prev,
      { questionId: currentQuestion.id, selectedIndex: index, isCorrect },
    ]);
  };

  const handleNext = () => {
    if (currentIndex + 1 >= questions.length) {
      setPhase("result"); //結果画面に移動。なぜならphaseで画面を管理しているから。
      return;
    }
    setCurrentIndex((prev) => prev + 1);
    setSelectedIndex(null);
    setAnswerStatus("unanswered");
  };

  const handleRetry = () => {
    setPhase("start");
    setCurrentIndex(0);
    setSelectedIndex(null);
    setAnswerStatus("unanswered");
    setAnswers([]);
  };

  const handleStart = () => {
    setPhase("playing");
    setTime(0);

    setInterval(() => {
      setTime(time + 1);
    })
  }


  return (
    <>
      <div className="app">
        <header className="app-header">
          <h1>TypeScript クイズ</h1>
          <p>React / TypeScript / Vite の知識を試そう！</p>
        </header>

        <main className="app-main">
          {phase === "start" && (
            <div className="start-screen">
              <p className="start-description">
                全 {questions.length} 門のクイズに挑戦しよう！
                <br />
                React・TypeScript・Vite に関する問題です。
              </p>
              <button className="start-button" onClick={() => setPhase("playing")}>
                start
              </button>
            </div>
          )}

          {phase === "playing" && (
            <QuizCard
              question={currentQuestion}
              currentNumber={currentIndex + 1}
              total={questions.length}
              answerStatus={answerStatus}
              selectedIndex={selectedIndex}
              onSelect={handleSelect}
              onNext={handleNext}
            />
          )}

          {phase === "result" && (
            <ResultScreen
              answers={answers}
              questions={questions}
              onRetry={handleRetry}
            />
          )}
        </main>
      </div>
    </>
  );
}
