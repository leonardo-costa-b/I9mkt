import { useCallback, useState } from 'react';

import { PARTNERS } from '@/constants/partners';
import { FeedbackModal } from '@/ui/feedback-modal';

import { BudgetError } from './budget-form-parts/budget-error';
import { BudgetForm } from './budget-form-parts/budget-form';
import { BudgetSuccess } from './budget-form-parts/budget-sucess';

interface BudgetModalProps {
    partnerService: typeof PARTNERS;
    shouldShowModal: boolean;
    onCloseModal: () => void;
}

export function BudgetModal({ partnerService, shouldShowModal, onCloseModal }: BudgetModalProps) {
    const [feedbackType, setFeedbackType] = useState<'SUCCESS' | 'ERROR' | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleToggleModal = useCallback(() => {
        onCloseModal();
        setFeedbackType(null);
    }, [onCloseModal]);

    const handleOnFeedbackType = useCallback((type: 'SUCCESS' | 'ERROR') => {
        setFeedbackType(type);
    }, []);

    const handleOnErrorMessage = useCallback((message: string) => {
        setErrorMessage(message);
    }, []);

    return (
        <FeedbackModal.Root isOpen={shouldShowModal}>
            <FeedbackModal.Title
                title={
                    feedbackType === 'SUCCESS'
                        ? 'Solicitação enviada com sucesso!'
                        : 'Formulário de orçamento'
                }
            />
            <FeedbackModal.Content>
                {feedbackType === 'SUCCESS' ? (
                    <BudgetSuccess
                        ModalCloseButton={<FeedbackModal.Close onClose={handleToggleModal} />}
                    />
                ) : feedbackType === 'ERROR' ? (
                    <BudgetError
                        ModalCloseButton={<FeedbackModal.Close onClose={handleToggleModal} />}
                        errorMessage={errorMessage || ''}
                    />
                ) : (
                    <BudgetForm
                        partnerService={partnerService}
                        handleOnFeedbackType={handleOnFeedbackType}
                        handleOnErrorMessage={handleOnErrorMessage}
                        handleOnCloseModal={handleToggleModal}
                    />
                )}
            </FeedbackModal.Content>
        </FeedbackModal.Root>
    );
}
