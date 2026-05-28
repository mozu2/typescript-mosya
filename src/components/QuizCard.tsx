import type { Question, AnswerStatus } from "../types";

interface Props {
    question: Question;
    currentNumber: number;
    total: number;
    answerStatus: AnswerStatus;
    selectedIndex: number | null;
    onSelect: (index: number) => void;
    onNext: () => void;
    time: number;
}
// ここに書いている理由はここでしか使用しないから。

export default function QuizCard({
    question,
    currentNumber,
    total,
    answerStatus,
    selectedIndex,
    onSelect,
    onNext,
    time,
}: Props) {
    const getOptionStyle = (index: number): string => {
        const base = "option-button";
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
            <p>{time}</p>
            <div className="options">
                {question.options.map((option, index) => (
                    <button
                        key={index}
                        className={getOptionStyle(index)}
                        onClick={() => onSelect(index)}
                        disabled={answerStatus !== "unanswered"}
                    >
                        {option}
                    </button>
                ))}
            </div>

            {answerStatus !== "unanswered" && (
                <div className={`explanation ${answerStatus}`}>
                    <p className="explanation-label">
                        {answerStatus === "correct" ? "正解" : "不正解"}
                    </p>
                    <p>{question.explanation}</p>
                    <button className="next-button" onClick={onNext}>
                        {currentNumber === total ? "結果を見る" : "次に進む→"}
                    </button>
                </div>
            )}
        </div>
    )
}