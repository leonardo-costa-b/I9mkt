import { Check } from 'lucide-react';
import { ReactNode } from 'react';

interface BudgetSuccessProps {
    ModalCloseButton: ReactNode;
}

export function BudgetSuccess({ ModalCloseButton }: BudgetSuccessProps) {
    return (
        <div className="flex flex-col items-center justify-center gap-4 pt-4">
            <div className="rounded-full bg-emerald-300 p-4">
                <Check size={48} className="text-emerald-800" />
            </div>
            <p className="text-center">
                Obrigado por entrar em contato! Em breve, um de nossos representantes entrará em
                contato com você.
            </p>
            {ModalCloseButton}
        </div>
    );
}
