import type { Question, AnswerStatus } from "../types";

interface Props {
    question: Question;
    currentNumber: number;
    total: number;
    answerStatus: AnswerStatus;
    selectedIndex: number | null;
    onSelect: (index: number) => void;
    onNext: () => void;
}
// ここに書いている理由はここでしか使用しないから。

exporat default function QuizCard({
    question,
    currentNumber,
    total,
    answerStatus,
    selectedIndex,
    onSelect,
    onNext,
}: Props) {
    const getOptionStyle = (index: number): string => {
        const base = "option-button"

        if (answerStatus === "unanswered") return base;
        if (index === question.correctIndex) return `${base} correct`;
        if (index === selectedIndex) return `${base} wrong`;
        return base;
    }
    return (
        <div className="quiz-card">
            <div className="progress">
                問題 {currentNumber}/{total}
            </div>

            <div className="progress-bar">
                <div
                    className="progress-fill"
                    style={{ width: `${(currentNumber / total) * 100}%` }} />
            </div>

            <p className="question-text">{question.text}</p>
        </div>
    )
}