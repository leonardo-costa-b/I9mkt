interface FeedbackModalTextProps {
    content: string;
}

export function FeedbackModalText({ content }: FeedbackModalTextProps) {
    return <p className="text-center text-gray-600">{content}</p>;
}
