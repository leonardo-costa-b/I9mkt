import { X } from 'lucide-react';

interface FeedbackModalCloseProps {
    onClose: VoidFunction;
}

export function FeedbackModalClose({ onClose }: FeedbackModalCloseProps) {
    return (
        <button
            type="button"
            className="absolute top-4 right-4 cursor-pointer rounded-full bg-slate-600 p-[6px]"
            onClick={onClose}
        >
            <X size={16} color="#fff" />
        </button>
    );
}
