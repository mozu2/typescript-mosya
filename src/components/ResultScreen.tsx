import type { AnswerRecord, Question } from "../types";

interface Props {
    answers: AnswerRecord[];
    questions: Question[];
    onRetry: () => void;
}

export default function ResultScreen({ answers, questions, onRetry }: Props) {
    const score = answers.filter((a) => a.isCorrect).length;
    const total = questions.length;
    const percentage = Math.round((score / total) * 100);

    const getMessage = (): string => {
        if (percentage === 100) return "パーフェクト！素晴らしい！";
        if (percentage >= 75) return "よくできました！";
        if (percentage >= 50) return "半分以上正解！もう少し！";
        return "もう一度挑戦する？"
    };
    return (
        <div className="result-circle">
            <h2>結果発表</h2>

            <div className="score-circle">
                <span className="score-number">{score}</span>
                <span className="score-number"> /{total}</span>
            </div>

            <p className="percentage">{percentage}%</p>
            <p className="message">{getMessage()}</p>

            <div className="answer-list">
                {questions.map((question, index) => {
                    const answer = answers[index];
                    if (!answer) return null;
                    return (
                        <div
                            key={question.id}
                            className={`asnwer-item ${answer.isCorrect ? "correct" : "wrong"}`}
                        >
                            <span className="answer-icon">
                                {answer.isCorrect ? "✓" : "✗"}
                            </span>
                            <span className="answer-question">Q{index + 1}. {question.text}</span>
                        </div>
                    );
                })}
            </div>

            <div className="retry-button" onClick={onRetry}>
                もう一度
            </div>

        </div>

    )
}