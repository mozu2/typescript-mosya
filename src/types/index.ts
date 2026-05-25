export interface Question {
    id: number;
    text: string;
    options: string[];
    correctIndex: number;
    explanation: string;
}

export type AnswerStatus = "unanswered" | "correct" | "wrong"; //ユニオン型で、未回答・正解・不正解の3つの型

export interface AnswerRecord {
    questionId: number;
    selectedIndex: number;
    isCorrect: boolean;
}

export type QuizPhase = "start" | "playing" | "result";