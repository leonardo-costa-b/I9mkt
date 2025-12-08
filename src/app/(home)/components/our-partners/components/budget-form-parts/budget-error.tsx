import { X } from 'lucide-react';
import { ReactNode } from 'react';

interface BudgetErrorProps {
    ModalCloseButton: ReactNode;
    errorMessage: string;
}

export function BudgetError({ ModalCloseButton, errorMessage }: BudgetErrorProps) {
    return (
        <div className="flex flex-col items-center justify-center gap-4 pt-4">
            <div className="rounded-full bg-red-300 p-4">
                <X size={48} className="text-red-800" />
            </div>

            <p className="text-center">{errorMessage}</p>

            {ModalCloseButton}
        </div>
    );
}
