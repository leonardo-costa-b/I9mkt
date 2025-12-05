import { ReactNode } from 'react';

interface FeedbackModalIconProps {
    icon: ReactNode;
}

export function FeedbackModalIcon({ icon: Icon }: FeedbackModalIconProps) {
    return <>{Icon}</>;
}
