interface FeedbackModalTitleProps {
    title: string;
}

export function FeedbackModalTitle({ title }: FeedbackModalTitleProps) {
    return <h2 className="text-lg font-semibold">{title}</h2>;
}
