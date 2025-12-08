'use client';

import clsx from 'clsx';
import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface FeedbackModalRootProps {
    children: ReactNode;
    isOpen: boolean;
    closeAutomatically?: VoidFunction;
}

export function FeedbackModalRoot({
    children,
    isOpen,
    closeAutomatically,
}: FeedbackModalRootProps) {
    const [isOpenModal, setIsOpenModal] = useState(isOpen);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        setIsOpenModal(isOpen);

        if (closeAutomatically && isOpen) {
            const closeModalTimeout = setTimeout(() => {
                setIsOpenModal(false);
                closeAutomatically();
            }, 5000);

            return () => {
                clearTimeout(closeModalTimeout);
            };
        }
    }, [isOpen]);

    return (
        isOpenModal &&
        createPortal(
            <>
                <div
                    className={clsx('animate-overlayShow fixed inset-0 z-30 bg-black/50', {
                        '': isOpen,
                    })}
                />
                <div className="animate-contentShow fixed top-1/2 left-1/2 z-30 flex w-full max-w-lg -translate-1/2 flex-col items-center justify-center gap-3 rounded-xl bg-slate-800 p-4 max-md:w-11/12">
                    {children}
                </div>
            </>,
            window.document.body,
        )
    );
}
