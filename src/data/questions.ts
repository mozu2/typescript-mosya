import type { Question } from "../types";

export const questions: Question[] = [
    {
        id: 1,
        text: "TypeScript は何をベースに作られた言語ですか？",
        options: ["Python", "Java", "JavaScript", "C#"],
        correctIndex: 2,
        explanation:
            "TypeScript は JavaScript のスーパーセット（上位互換）です。JavaScript に型システムを追加した言語です。",
    },
    {
        id: 2,
        text: "React でコンポーネントの状態を管理するために使うフックはどれですか？",
        options: ["useEffect", "useRef", "useContext", "useState"],
        correctIndex: 3,
        explanation:
            "useState はコンポーネント内の状態（state）を管理するための基本的な React フックです。",
    },
    {
        id: 3,
        text: "TypeScript で変数の型を定義する正しい書き方はどれですか？",
        options: [
            "let name: string = 'Alice'",
            "let name = string 'Alice'",
            "string name = 'Alice'",
            "var<string> name = 'Alice'",
        ],
        correctIndex: 0,
        explanation:
            "TypeScript では 変数名: 型名 の形式で型を指定します。例: let name: string = 'Alice'",
    },
    {
        id: 4,
        text: "Vite の主な役割はなんですか？",
        options: [
            "データベース管理",
            "UIコンポーネントライブラリ",
            "フロントエンドのビルドツール",
            "APIサーバーの構築",
        ],
        correctIndex: 2,
        explanation:
            "Vite は高速なフロントエンドビルドツールです。開発サーバーの起動やファイルのバンドルを行います。",
    },
    {
        id: 5,
        text: "TypeScript の interface と type の説明として正しいものはどれですか？",
        options: [
            "interface は数値型のみ定義できる",
            "type はオブジェクトの形を定義できない",
            "interface は extends で拡張できる",
            "type と interface は全く同じで使い分けは不要",
        ],
        correctIndex: 2,
        explanation:
            "interface は extends キーワードで拡張（継承）できます。type も交差型(&)で似たことができますが、interface の extends はより直感的です。",
    },
    {
        id: 6,
        text: "React の useEffect はどのような時に使いますか？",
        options: [
            "コンポーネントのスタイルを変更する時",
            "副作用（APIの呼び出しなど）を扱う時",
            "propsを親コンポーネントに渡す時",
            "変数に型を付ける時",
        ],
        correctIndex: 1,
        explanation:
            "useEffect はデータ取得・DOM操作・タイマー設定など、レンダリング以外の処理（副作用）を扱うためのフックです。",
    },
    {
        id: 7,
        text: "TypeScript の Union 型の書き方として正しいものはどれですか？",
        options: [
            "string & number",
            "string | number",
            "string + number",
            "string, number",
        ],
        correctIndex: 1,
        explanation:
            "Union 型は | (パイプ) を使って書きます。例: string | number は「文字列または数値」を意味します。",
    },
    {
        id: 8,
        text: "React コンポーネントが受け取るデータのことを何と呼びますか？",
        options: ["state", "props", "ref", "context"],
        correctIndex: 1,
        explanation:
            "props（プロップス）は親コンポーネントから子コンポーネントへデータを渡すための仕組みです。",
    },
]